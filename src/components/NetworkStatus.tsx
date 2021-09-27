import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";

export function NetworkStatus() {
  const { online, busy } = useSelector(
    (state) => state.offline || { online: true, busy: false }
  );
  const appDispatch = useDispatch();
  const [status, setstatus] = useState(false);

  const toggle = () => {
    setstatus(!status);
    appDispatch({
      type: "Offline/STATUS_CHANGED",
      payload: { online: status },
    });
  };

  return (
    <button
      className="inline-flex items-center px-4 py-2 border  font-medium rounded-md text-white transition "
      onClick={() => toggle()}
      style={{ backgroundColor: online ? "green" : "red" }}
    >
      {busy && <Loader />}
      {online ? <>App online</> : "App offline"}
    </button>
  );
}
