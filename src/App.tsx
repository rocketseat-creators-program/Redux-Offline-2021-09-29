import { useDispatch, useSelector } from "react-redux";
import { Card } from "./components/Card";
import { actions, getMessages } from "./features/messageSlice/messageSlice";

function App() {
  const items = useSelector(getMessages);
  const itemsList = Object.entries(items);
  const dispatcher = useDispatch();
  const { increaseAmount, addItem } = actions;

  return (
    <div className="App p-10 bg-yellow-100 flex flex-1">
      <div className="grid grid-cols-3 gap-4">
        {itemsList.map(([itemId, { amount, pending, error }]: any) => (
          <Card
            key={itemId}
            error={error}
            likes={amount}
            pending={pending}
            retry={() => dispatcher(addItem({ itemId, amount }))}
            addLike={() => dispatcher(increaseAmount({ itemId }))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
