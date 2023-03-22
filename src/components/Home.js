import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home--container">
      <img className="home--img" src="./images/home.jpg" alt="manequines" />

      <div className="home--shop">
        <p>The newest brands in fashon, at the best prices.</p>

        <p>What are you waiting for? </p>
        <Link to="/shop">
          <button className="home--button">
            <h1>Shop Now</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
