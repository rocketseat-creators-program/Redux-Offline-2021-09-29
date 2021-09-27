import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import { configureStore } from "@reduxjs/toolkit";

import { StoreEnhancer } from "redux";
import { effect } from "../service/api";
import messageReducer from "../features/messageSlice/messageSlice";

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
  enhancers: [
    offline({
      ...offlineConfig,
      persist: undefined,
      effect,
    }) as StoreEnhancer,
  ],
});
