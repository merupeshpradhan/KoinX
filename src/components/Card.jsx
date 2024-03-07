import React from "react";
import "./card.css";
import cardImg from '../images/cardImg.png'

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-containt">
          <h1>
            Get Started With KoinX <br/>for FREE
          </h1>
          <p>With Our range of features that you can equip for free,KoinX allows you to be more educated and aware of your tax reports.</p>
          <img src={cardImg} alt="img"></img>
          <button>Get Started for FREE</button>
        </div>
      </div>
    </> 
  );
}

export default Card;
