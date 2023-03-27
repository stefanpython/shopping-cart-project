import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Home from "./Home";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
