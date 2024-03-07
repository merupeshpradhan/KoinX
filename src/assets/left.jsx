import React from "react";

import Graph from "../components/Graph";
import Performance from "../components/Performance";
import About from "../components/About";
import Sentiment from "../components/Sentiment";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";

function left() {
  return (
    <div className="leftContainer">
    <p>Cryptocurriencies  >> <span className="fw-semibold">Bitcoin</span></p>
      <Graph/>
      <Performance/>
      <Sentiment/>
      <About/>
      <Tokenomics/>
      <Team/>
    </div>
  );
}

export default left;
