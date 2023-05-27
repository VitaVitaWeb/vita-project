import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomerInfoProvider } from "./customerInfo"; // Add this line

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CustomerInfoProvider>
      <App />
    </CustomerInfoProvider>
  </Provider>
);
