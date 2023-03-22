import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div className="shop--container">
      <Card />
    </div>
  );
};

export default Shop;
