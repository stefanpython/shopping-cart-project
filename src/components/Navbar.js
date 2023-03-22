import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav--links">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <li>Shop</li>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <li>
            Cart <span className="cart--number">1</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
