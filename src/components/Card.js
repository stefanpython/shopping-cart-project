import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card--container">
      <div className="card--content">
        <img className="card--img" src={props.imageUrl} alt="t-shirt" />
        <hr />
        <p className="card--title">{props.title}</p>
        <p className="card--price">${props.price}</p>

        <button className="card--button">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
