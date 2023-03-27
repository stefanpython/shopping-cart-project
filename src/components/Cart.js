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
      <div className="cart--container">
        <h1>Shopping cart:</h1>
        <hr />
        {cart.map((item) => (
          <div className="cart--inside--container" key={item.id}>
            <img className="cart--image" src={item.image} alt={item.title} />
            <p className="cart--title">{item.title.slice(0, 20)}...</p>

            <div className="cart--input--button">
              <button
                onClick={() => {
                  handleMinus(item.id);
                }}
                type="button"
                className="cart--minus"
              >
                -
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
                +
              </button>
            </div>

            <div className="checkout--div"></div>
          </div>
        ))}

        {cart.length !== 0 ? (
          <>
            <br />
            <hr />
            <h1 className="cart--price">Total: ${Math.floor(totalPrice)}</h1>
            <button onClick={handleCheckout} className="checkout--button">
              Checkout
            </button>
          </>
        ) : (
          <h2>Your cart is empty.</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
