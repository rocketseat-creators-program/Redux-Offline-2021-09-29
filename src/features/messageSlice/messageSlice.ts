import { createAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface MessageState {
  items: {
    [id: string]: {
      amount: number;
      error?: string;
      pending?: boolean;
    };
  };
}

const ADD_ITEM = "messages/addItem";
const ADD_ITEM_COMMIT = "messages/addItemCommit";
const INCREASE_AMOUNT = "messages/increaseAmount";
const ADD_ITEM_ROLLBACK = "messages/addItemRollback";
const INCREASE_AMOUNT_ROLLBACK = "messages/increaseAmountRollback";

const initialState: MessageState = {
  items: {
    1: { amount: 10 },
    2: { amount: 20 },
    3: { amount: 30 },
  },
};

const increaseAmount = createAction(
  INCREASE_AMOUNT,
  ({ itemId }: { itemId: number }) => ({
    payload: { itemId },
    meta: {
      offline: {
        effect: {
          url: "/api/increase-amount",
          method: "POST",
          json: { itemId },
        },
        rollback: {
          type: INCREASE_AMOUNT_ROLLBACK,
          meta: { itemId },
        },
      },
    },
  })
);

const addItem = createAction(
  ADD_ITEM,
  ({ itemId, amount }: { itemId: number; amount: number }) => ({
    payload: { itemId, amount },
    meta: {
      offline: {
        effect: {
          url: "/api/add-item",
          method: "POST",
          json: { itemId, amount },
        },
        commit: { type: ADD_ITEM_COMMIT, meta: { itemId, amount } },
        rollback: {
          type: ADD_ITEM_ROLLBACK,
          meta: { itemId, amount },
        },
      },
    },
  })
);

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addItem: (state, action: any) => {
      const { itemId, amount } = action.payload;
      let error = "";
      if (action.meta) {
        error = action.meta.error;
      }
      state.items[itemId] = { amount, error };
    },
    additemCommit: (state, action: any) => {
      const { itemId } = action.payload;
      delete state.items[itemId].pending;
      delete state.items[itemId].error;
    },
    addItemRollback: (state, action: any) => {
      const { itemId } = action.meta;
      state.items[itemId] = {
        amount: action.meta.amount,
        error: action.payload.error,
      };
    },
    increaseAmount: (state, action) => {
      const { itemId } = action.payload;
      const item = state.items[itemId];
      console.log(item);
      if (item) {
        item.amount += 10;
      }
    },
    increaseAmountRollback: (state, action: any) => {
      const { itemId } = action.meta;
      const item = state.items[itemId];
      if (item) {
        item.amount -= 10;
      }
    },
  },
});

export const getMessages = (state: RootState) => state.message.items;
export const actions = { increaseAmount, addItem };
export default messageSlice.reducer;
