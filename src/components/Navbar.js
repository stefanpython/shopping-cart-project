import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const totalNumber = cart.reduce((acc, item) => {
    return acc + Math.floor(item.quantity);
  }, 0);

  return (
    <nav>
      <h3 className="nav--title">
        {" "}
        <span>
          {" "}
          <img className="nav--image" src="./images/vip.png" alt="" />
        </span>{" "}
        ViPremium Designs
      </h3>
      <ul className="nav--links">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <li>Shop</li>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <li className="card--dot">
            Cart <span className="cart--number">{totalNumber}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
