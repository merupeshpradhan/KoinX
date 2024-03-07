import React, { useEffect, useRef, useState } from "react";
import bitcoin from "../images/bitcoin.png";
import "./graph.css";
import tringle from "../images/triangle.png";

function Graph() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "CRYPTO:BTCUSD",
          "interval": "20",
          "timezone": "Etc/UTC",
          "theme": "light",
          "gridColor": "rgba(42, 46, 57, 0.15)",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);


  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    let res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`);
    let datas = await res.json();
    setData(datas);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [data]);


  return (
    <div className="charts">
      <div className="charts-top">
        <img src={bitcoin} alt="bitcoinLogo" />
        <h5 className="m-0 px-3">
          BitCoin <span>BTC</span>
        </h5>
        <button type="button" class="btn btn-secondary btn-sm">
          Rank #1
        </button>
      </div>

      <div className="amount">
        <div className="d-flex align-items-center">
          {isLoading ? (
            <p style={{fontSize:"10px" ,padding:"0 10px"}}>Loading..</p>
          ) : (
            data.bitcoin ? (
              <p className="m-0">${data.bitcoin.usd.toLocaleString('en-IN')}</p>
            ) : null
          )}
          {data.bitcoin ? (
            <div className="percentage">
              <img src={tringle} alt="triangle"></img>
              <p style={{fontSize:"12px"}}>{data.bitcoin.usd_24h_change.toFixed(2)}</p>
            </div>
          ) : null}
          <p className="m-0" style={{ fontSize: "12px", opacity: "0.7" }}>(24H)</p>
        </div>
        {data.bitcoin ? (
          <p style={{ fontSize: "13px" }}>&#8377;{data.bitcoin.inr.toLocaleString('en-IN')}</p>
        ) : null}
      </div>


      <div className="Graph_Upper_bar">
        <p>Bitcoin Price Chart(USD)</p>
        <div className="Graph_Upper_subbar">
          <p>1H</p>
          <p>24H</p>
          <p>7D</p>
          <p>1M</p>
          <p>6M</p>
          <p>Y</p>
          <p>ALL</p>
        </div>
      </div>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "200px", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default Graph;
