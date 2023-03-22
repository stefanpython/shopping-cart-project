import React from "react";
import "./Cart.css";
import { useState } from "react";

const Cart = () => {
  const [number, setNumber] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("aaa");
  };

  const handlePlus = () => {
    setNumber(number + 1);
  };

  const handleMinus = () => {
    if (number === 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <div className="cart--container">
      <h1>Your shopping cart</h1>
      <img
        className="cart--image"
        src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
        alt=""
      />

      <form onSubmit={handleSubmit} className="cart--form">
        <button onClick={handleMinus} type="button" className="cart--minus">
          <h1>-</h1>
        </button>
        <input type="tel" placeholder={number} />
        <button onClick={handlePlus} type="button" className="cart--plus">
          <h1>+</h1>
        </button>

        <h1 className="cart--price">$166.5</h1>

        <div className="checkout--div">
          <button className="checkout--button">Checkout</button>
        </div>
      </form>
    </div>
  );
};

export default Cart;
