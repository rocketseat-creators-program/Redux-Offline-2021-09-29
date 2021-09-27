import { Card } from "./Card";

function ItemList() {
  const items = [
    { itemId: 1, amount: 10, pending: false, error: "" },
    { itemId: 2, amount: 10, pending: false, error: "" },
    { itemId: 3, amount: 10, pending: false, error: "" },
  ];
  const itemsList = Object.entries(items);
  return (
    <div className="App p-10 bg-yellow-100 flex flex-1">
      <div className="grid grid-cols-3 gap-4">
        {itemsList.map(([itemId, { amount, pending, error }]) => (
          <Card
            key={itemId}
            error={error}
            likes={amount}
            pending={pending}
            retry={() => console.log("Retry")}
            addLike={() => console.log("Add like")}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
