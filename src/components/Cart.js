import React from "react";
import "./Cart.css";
import { useState, useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = (props) => {
  const [number, setNumber] = useState(0);
  const { cart } = useContext(CartContext);

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

  console.log(cart);

  return (
    <>
      <h1>Your shopping cart</h1>
      <div className="cart--container">
        {cart.map((item) => (
          <div key={item.id}>
            <img className="cart--image" src={item.image} alt={item.title} />
            <p>{item.title.slice(0, 20)}...</p>
            <form onSubmit={handleSubmit} className="cart--form">
              <button
                onClick={handleMinus}
                type="button"
                className="cart--minus"
              >
                <h1>-</h1>
              </button>
              <input type="tel" value={item.quantity} />
              <button onClick={handlePlus} type="button" className="cart--plus">
                <h1>+</h1>
              </button>

              <h1 className="cart--price">${item.price}</h1>

              <div className="checkout--div"></div>
            </form>
          </div>
        ))}

        {cart.length !== 0 ? (
          <button className="checkout--button">Checkout</button>
        ) : (
          <h2>You have 0 items in your shopping cart.</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
