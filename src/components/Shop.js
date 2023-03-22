import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products/category/women's clothing"),
      fetch("https://fakestoreapi.com/products/category/men's clothing"),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => setData(data.flat()))
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

  const cardItems = data.map((item) => (
    <Card
      imageUrl={item.image}
      title={item.title}
      price={item.price}
      key={item.id}
    />
  ));

  return <div className="shop--container">{cardItems}</div>;
};

export default Shop;
