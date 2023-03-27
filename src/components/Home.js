import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home--container">
      <img
        className="home--img"
        src="./shopping-cart-project/images/home3.jpg"
        alt="manequines"
      />

      <div className="home--shop">
        <p>The newest brands in fashon, at the best prices.</p>

        <p>What are you waiting for? </p>
        <Link to="/shop">
          <button className="home--button">
            <h1>Shop Now</h1>
          </button>
        </Link>
      </div>
      <footer>
        Copyright © 2023 Stefanpython &nbsp;
        <a href="https://github.com/stefanpython">
          <img
            className="git"
            width="30px"
            src="https://c.tenor.com/A15H8E1VUh8AAAAM/github-cat.gif"
            alt="cat"
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
