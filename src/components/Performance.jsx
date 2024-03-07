import React from "react";
import "./performance.css";

function Performance() {
  return (
    <div>
      <div className="Filters">
        <div className="filter" id="active">
          OverView
        </div>
        <div className="filter">Fundamentals</div>
        <div className="filter">News Insights</div>
        <div className="filter">Sentiments</div>
        <div className="filter">Team</div>
        <div className="filter">Technicals</div>
        <div className="filter">Tokenomics</div>
      </div>
      <div className="performance">
        <h5>Performance</h5>
        <div className="pt-2 pb-2">
          <div className="analyticsBar">
            <div className="analyticsBar_div">
                <p>Today's Low</p>
                <p style={{ fontWeight: "500" }}>15,777.05</p>
            </div>
            <div className="bar">

            </div>
            <div className="analyticsBar_div">
                <p>Today's High</p>
                <p style={{ fontWeight: "500" }}>25,777.05</p>
            </div>
          </div>
        </div>
        <div className="pt-2 pb-4">
          <div className="analyticsBar">
            <div className="analyticsBar_div">
                <p>52W Low</p>
                <p style={{ fontWeight: "500" }}>15,777.05</p>
            </div>
            <div className="bar">

            </div>
            <div className="analyticsBar_div">
                <p>52W High</p>
                <p style={{ fontWeight: "500" }}>25,777.05</p>
            </div>
          </div>
        </div>
        <div>
          <h6>
            Fundamentals <span className="exlamatory">!</span>
          </h6>
          <div class="row ps-1 pe-2">
          <div class="col-md-6">
              <div className="lines">
                <p>Bitcoin Price</p>
                <p style={{ fontWeight: "500" }}>$16,815.46</p>
              </div>
              <div className="lines">
                <p>24h Low / 24h High</p>
                <p style={{ fontWeight: "500" }}>$16,382.07 / $16,874.12</p>
              </div>
              <div className="lines">
                <p>7d Low / 7d High</p>
                <p style={{ fontWeight: "500" }}>$16,382.07 / $16,874.12</p>
              </div>
              <div className="lines">
                <p>Trading Volume</p>
                <p style={{ fontWeight: "500" }}>$23,249,202,782</p>
              </div>
              <div className="lines">
                <p>Market Cap Rank</p>
                <p style={{ fontWeight: "500" }}>#1</p>
              </div>
            </div>
            <div class="col-md-6">
              <div className="lines">
                <p>Market Cap</p>
                <p style={{ fontWeight: "500" }}>$323,507,290,047</p>
              </div>
              <div className="lines">
                <p>Market Cap Dominance</p>
                <p style={{ fontWeight: "500" }}>38.343%</p>
              </div>
              <div className="lines">
                <p>VOlume / Market Cap</p>
                <p style={{ fontWeight: "500" }}>0.0718</p>
              </div>
              <div className="lines" style={{padding:"4px 0"}}>
                <p>All-Time-High</p>
                <p style={{ fontWeight: "500" }}>$69,044.77 <span style={{color:"red"}}>-75.6%</span><br/><span style={{fontSize:"9px"}}>Nov 10,2021 (about 1 year)</span></p>
              </div>
              <div className="lines" style={{padding:"4px 0"}}>
                <p>All-Time-Low</p>
                <p style={{ fontWeight: "500" }}>$67.81 <span style={{color:"yellowgreen"}}>24729.1%</span><br/><span style={{fontSize:"9px"}}>Nov 10,2021 (about 1 year)</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
