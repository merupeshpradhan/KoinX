import React from "react";

import tringle from "../images/triangle.png";

function RecomendCard(props) {
    console.log(props);
  return (
    <div className="rec_card">
      <div className="coin" >
        <div className="CoinName">
          <img src={props.item.small} alt="img"></img>
          <p>{props.item.name}</p>
        </div>
        <div className="percentage">
          <img src={tringle}></img>
          <p>{(props.item.price_btc*100000).toFixed(2)}%</p>
        </div>
      </div>
      <h6>{props.item.data.price}</h6>
      <img src={props.item.data.sparkline} alt="" />
    </div>
  );
}

export default RecomendCard;
