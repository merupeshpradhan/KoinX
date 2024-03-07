import React from "react";
import "./sentiment.css";

function Sentiment() {
    return (
        <div className="sentiment">
            <h5>Sentiment</h5>
            <h6>
                key Events <span className="exlamatory">!</span>
            </h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
                dolorum sequi, alias itaque harum obcaecati vitae, ipsum dolore qui
                quidem, autem vero. Eum blanditiis, error earum accusantium molestiae
                facere impedit!
            </p>
            <h6>
                Analyst Estimates <span className="exlamatory">!</span>
            </h6>
            <div className="anlyse">
                <div className="percentage">
                    <h1>
                        76<span>%</span>
                    </h1>
                </div>
                <div className="chartsss">
                <div className="chartsss_div">
                        <p className="m-0">Buy</p>
                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ background: "none", height: "10px", width: "100%", margin: "8px 12px 4px" }}>
                            <div class="progress-bar" style={{ width: "90%",background:"green" }}></div>
                        </div>
                        <p className="m-0">76%</p>
                    </div>
                    <div className="chartsss_div">
                        <p className="m-0">Hold</p>
                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ background: "none", height: "10px", width: "10%", margin: "8px 12px 4px" }}>
                            <div class="progress-bar" style={{ width: "90%",background:"gray"  }}></div>
                        </div>
                        <p className="m-0">8%</p>
                    </div>
                    <div className="chartsss_div">
                        <p className="m-0">Sell</p>
                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ background: "none", height: "10px", width: "28%", margin: "8px 12px 4px" }}>
                            <div class="progress-bar" style={{ width: "90%" ,background:"red" }}></div>
                        </div>
                        <p className="m-0">16%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sentiment;
