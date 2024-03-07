import React, { useState, useEffect } from "react";
import polygon from "../images/polygon-token.png";
import bitcoin from "../images/bitcoin.png";
import ethereum from "../images/ethereum.png";
import tringle from "../images/triangle.png";
import "./trendingCoins.css";

function TrendingCoins() {
  const [data, setData] = useState([]);

  async function fetchData() {
    let res = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
    let datas = await res.json();
    setData(datas.coins.slice(0, 3));
    // console.log(datas.coins.slice(0, 3));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="trendingCoins">
        <h1>Trending Coins (24h)</h1>
        <div className="Coins">
          {data
            ? (data.map((e,index) => {
              return (
                <div className="coin" key={index}>
                  <div className="CoinName">
                    <img src={e.item.small} alt="img"></img>
                    <p>{e.item.name} ({e.item.symbol} )</p>
                  </div>
                  <div className="percentage">
                    <img src={tringle}></img>
                    <p>{(e.item.price_btc*100000).toFixed(2)}%</p>
                  </div>
                </div>
              );
            }))
            : null}
        </div>
      </div>
    </div>
  );
}

export default TrendingCoins;
