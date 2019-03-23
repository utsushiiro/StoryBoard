import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./state/store";
import App from "./views/App";

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app-root")
  );
});
