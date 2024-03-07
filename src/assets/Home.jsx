import React from "react";
import Left from "./left";
import Right from "./right";
import "./home.css";

function Home() {
  return (
    < div style={{background:"rgb(225 225 235)"}}>
      <div className="container" >
        <div class="row">
          <div class="col-md-8">
            <div className="left-container">
              <Left />
            </div>
          </div>
          <div class="col-md-4">
            <div className="right-container">
              <Right />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
