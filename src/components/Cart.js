import React from "react";
import "./Cart.css";
import { useState, useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleCheckout = (event) => {
    console.log("aaaaa");
  };

  const handlePlus = (id) => {
    const updatedItem = cart.map((item) =>
      id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedItem);
  };

  const handleMinus = (id) => {
    const updatedItem = cart
      .map((item) =>
        id === item.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity >= 1);
    setCart(updatedItem);
  };

  console.log(cart);

  return (
    <>
      <h1>Your shopping cart</h1>
      <div className="cart--container">
        {cart.map((item) => (
          <div key={item.id}>
            <img className="cart--image" src={item.image} alt={item.title} />
            <p>{item.title.slice(0, 20)}...</p>

            <button
              onClick={() => {
                handleMinus(item.id);
              }}
              type="button"
              className="cart--minus"
            >
              <h1>-</h1>
            </button>
            <input type="tel" value={item.quantity} />
            <button
              onClick={() => handlePlus(item.id)}
              type="button"
              className="cart--plus"
            >
              <h1>+</h1>
            </button>

            <h1 className="cart--price">
              ${Math.floor(item.price * item.quantity)}
            </h1>

            <div className="checkout--div"></div>
          </div>
        ))}

        {cart.length !== 0 ? (
          <button onClick={handleCheckout} className="checkout--button">
            Checkout
          </button>
        ) : (
          <h2>You have 0 items in your shopping cart.</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
