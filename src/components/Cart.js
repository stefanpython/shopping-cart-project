import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleCheckout = (event) => {
    alert(`--Website under construction--
     --Stay tunned for updates--`);
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

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleQuantityChange = (id, num) => {
    const updatedItem = cart.map((item) =>
      id === item.id ? { ...item, quantity: Math.floor(num) } : item
    );
    setCart(updatedItem);
  };

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
            <input
              className="cart--input"
              min="1"
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
            <button
              onClick={() => handlePlus(item.id)}
              type="button"
              className="cart--plus"
            >
              <h1>+</h1>
            </button>

            <div className="checkout--div"></div>
          </div>
        ))}

        {cart.length !== 0 ? (
          <>
            <h1 className="cart--price">${Math.floor(totalPrice)}</h1>
            <button onClick={handleCheckout} className="checkout--button">
              Checkout
            </button>
          </>
        ) : (
          <h2>You have 0 items in your shopping cart.</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
