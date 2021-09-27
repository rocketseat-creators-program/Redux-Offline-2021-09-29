import ItemList from "../components/ItemList";
import { NetworkStatus } from "../components/NetworkStatus";
import { StoreState } from "../components/StoreState";

export default function Home({ network = false, store = false }) {

  const handleAddItem = () => {
    console.log("Add Item");
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex h-full">
          <main className="flex flex-col w-full  overflow-x-hidden overflow-y-auto">
            <div className="flex w-full mx-auto px-6 py-4">
              <div className="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
                <ItemList />
              </div>
            </div>
          </main>
          <nav className="flex w-1/2 h-full">
            <div className="w-full flex mx-auto px-6 py-4">
              <div className="w-full h-full flex flex-col bg-pink-200  items-center justify-center text-gray-900 text-xl">
                {network && (
                  <div className="border-4 border-dashed border-gray-900 flex flex-1 items-center justify-center w-full">
                    <NetworkStatus />
                  </div>
                )}
                <div className="border-4 bg-purple-100 border-dashed border-gray-900 flex flex-1 items-center justify-center w-full">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAddItem}
                  >
                    Add Card
                  </button>
                </div>
                {store && (
                  <div className="border-4 bg-white border-dashed border-gray-900 flex flex-1 items-center justify-center w-full">
                    <StoreState />
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
