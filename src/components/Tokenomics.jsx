import React from "react";
import Distribut from "../images/Distribution.png"

function Tokenomics() {
  return (
    <div
      className="Tokenomics"
      style={{
        padding: "15px",
        background: "white",
        borderRadius: "5px",
        marginBottom: "35px",
      }}
    >
      <h5>Tokenomics</h5>
      <h6 className="pt-2">Initial Distribution</h6>
      <img style={{width:"290px"}} src={Distribut}></img>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque facilis
        incidunt asperiores porro ducimus dolorum ex at reiciendis culpa maxime
        quam, minima repellendus autem magni voluptate temporibus dignissimos
        accusantium ut doloribus animi iste. Officia, nemo, alias soluta iure
        repellendus minima necessitatibus incidunt iusto esse placeat porro
        obcaecati vitae nesciunt adipisci?
      </p>
    </div>
  );
}

export default Tokenomics;
