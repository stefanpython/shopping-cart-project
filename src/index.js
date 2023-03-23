import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteSwitch from "./components/RouteSwitch";
import { CartProvider } from "./components/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouteSwitch />
    </CartProvider>
  </React.StrictMode>
);
