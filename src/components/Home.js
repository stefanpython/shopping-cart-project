import React from "react";

const Home = () => {
  return (
    <div className="home--container">
      <img className="home--img" src="./images/home.jpg" alt="manequines" />

      <div className="home--shop">
        <p>The newest brands in fashon, at the best prices.</p>
        <p>You have all you need,right here, right now.</p>
        <p>What are you waiting for? Come on in.</p>
        <button className="home--button">
          <h1>Shop Now</h1>
        </button>
      </div>
    </div>
  );
};

export default Home;
