import React from "react";
import "./sentiment.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Sentimentcard from "./Sentimentcard";

function Sentiment() {
    const arr = [
        {
          icon: "fa fa-file-text-o",
          color: "blue",
          data1: "Consectetur consectetur adipisicing elit. Asperiores, saepe.",
          data2: "Lorem ipsum da maximeabod, ximeab labore quia et ipsa quisquam dolorum natus quo tota et ipsa quisquam dolorum natus quo totam omnis veritatis qui laudantium."
        },
        {
          icon: "fa fa-line-chart",
          color: "green",
          data1: "Consectetur consectetur adipisicing elit. Asperiores, saepe.",
          data2: "Lorem ipsum da maximeabod, ximeab labore quia et ipsa quisquam dolorum natus quo tota et ipsa quisquam dolorum natus quo totam omnis veritatis qui laudantium."
        },
        {
          icon: "fa fa-telegram",
          color: "orange",
          data1: "Consectetur consectetur adipisicing elit. Asperiores, saepe.",
          data2: "Lorem ipsum da maximeabod, ximeab labore quia et ipsa quisquam dolorum natus quo tota et ipsa quisquam dolorum natus quo totam omnis veritatis qui laudantium."
        },
        {
          icon: "fa fa-fax",
          color: "#c200ff",
          data1: "Consectetur consectetur adipisicing elit. Asperiores, saepe.",
          data2: "Lorem ipsum da maximeabod, ximeab labore quia et ipsa quisquam dolorum natus quo tota et ipsa quisquam dolorum natus quo totam omnis veritatis qui laudantium."
        },
    ]
    return (
        <div className="sentiment">
            <h5>Sentiment</h5>
            <h6>
                key Events <span className="exlamatory">!</span>
            </h6>
            <Swiper modules={[Navigation, Scrollbar, Autoplay]} spaceBetween={10} slidesPerView={1.5} autoplay={true} style={{padding:"5px 0 20px"}}>
                {arr.map((e) => {
                    return (
                        <SwiperSlide key={e.id}>
                            <Sentimentcard  {...e} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <h6>
                Analyst Estimates<span className="exlamatory">!</span>
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
                            <div class="progress-bar" style={{ width: "90%", background: "green" }}></div>
                        </div>
                        <p className="m-0">76%</p>
                    </div>
                    <div className="chartsss_div">
                        <p className="m-0">Hold</p>
                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ background: "none", height: "10px", width: "10%", margin: "8px 12px 4px" }}>
                            <div class="progress-bar" style={{ width: "90%", background: "gray" }}></div>
                        </div>
                        <p className="m-0">8%</p>
                    </div>
                    <div className="chartsss_div">
                        <p className="m-0">Sell</p>
                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ background: "none", height: "10px", width: "28%", margin: "8px 12px 4px" }}>
                            <div class="progress-bar" style={{ width: "90%", background: "red" }}></div>
                        </div>
                        <p className="m-0">16%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sentiment;
