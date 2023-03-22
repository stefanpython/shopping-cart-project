import React from "react";
import { useState, useEffect } from "react";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <div className="shop--container"></div>;
};

export default Shop;
