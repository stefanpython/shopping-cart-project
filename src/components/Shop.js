import React from "react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./cartContext";
import Card from "./Card";

const Shop = () => {
  const [data, setData] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products/category/women's clothing"),
      fetch("https://fakestoreapi.com/products/category/men's clothing"),
      // fetch("https://api.escuelajs.co/api/v1/products"),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => setData(data.flat()))
      .catch((error) => console.error(error));
  }, []);

  const cardItems = data.map((item) => (
    <Card
      imageUrl={item.image}
      title={item.title}
      price={item.price}
      key={item.id}
      addToCart={() => addToCart(item)}
    />
  ));

  return <div className="shop--container">{cardItems}</div>;
};

export default Shop;
