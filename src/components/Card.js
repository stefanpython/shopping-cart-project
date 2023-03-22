import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card--container">
      <div className="card--content">
        <img
          className="card--img"
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="t-shirt"
        />
        <hr />
        <p className="card--title">Mens Casual Premium Slim Fit T-Shirts</p>
        <p className="card--price">$22.3</p>

        <button className="card--button">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
