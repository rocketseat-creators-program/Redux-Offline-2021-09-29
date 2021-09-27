import React from "react";
import { useSelector } from "react-redux";

export function PenddingActions() {
  const state = useSelector((state) => state);
  return (
    <div className="m5">
      <p>
        {`${state.offline.outbox.length} pending ${
          state.offline.outbox.length === 0 || state.offline.outbox.length > 1
            ? "actions"
            : "action"
        }`}
      </p>
    </div>
  );
}
