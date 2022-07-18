import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import App from "./app/App";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
