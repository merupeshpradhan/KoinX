import React from 'react';
import "./performance.css";

function Performance() {
  return (
    <div>
      <div className="Filters">
        <div className="filter" id="active">OverView</div>
        <div className="filter">Fundamentals</div>
        <div className="filter">News Insights</div>
        <div className="filter">Sentiments</div>
        <div className="filter">Team</div>
        <div className="filter">Technicals</div>
        <div className="filter">Tokenomics</div>
      </div>
      <div className="performance">performance</div>
    </div>
  )
}

export default Performance
