import React from "react";
import bitcoin from "../images/bitcoin.png";
import "./graph.css";

function Graph() {
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
        <p>$46,963.o4</p>
        <p>&#8377;39,42,343</p>
      </div>
    </div>
  );
}

export default Graph;
