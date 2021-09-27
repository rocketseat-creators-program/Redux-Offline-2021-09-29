import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";

import Home from "./screens/Home";

const options = {
  network: true,
  store: true,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home {...options} />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
