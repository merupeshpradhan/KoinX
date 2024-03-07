import React, { useState, useEffect } from 'react'
import "./recomend.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import RecomendCard from './RecomendCard';

function Recomend() {
    const [data, setData] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(5);

    async function fetchData() {
        let res = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
        let datas = await res.json();
        setData(datas.coins);
    }
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(5);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='recomend'>
            <div>
                <h6>You may also like</h6>
                <div>
                    <Swiper modules={[Navigation, Scrollbar, Autoplay]} spaceBetween={10} slidesPerView={slidesPerView} autoplay={true} navigation style={{ padding: "5px 0 20px" }}>
                    {data
                      ? (data.map((e) => {
                            return (
                                <SwiperSlide key={e.id}>
                                    <RecomendCard  {...e} />
                                </SwiperSlide>
                            );
                        })) : null}
                    </Swiper>
                </div>
            </div>
            <div>
                <h6>Trending Coins</h6>
                <div>
                    <Swiper modules={[Navigation, Scrollbar, Autoplay]} spaceBetween={10} slidesPerView={slidesPerView} autoplay={true} navigation style={{ padding: "5px 0 0" }}>
                    {data
                      ? (data.map((e) => {
                            return (
                                <SwiperSlide key={e.id}>
                                    <RecomendCard  {...e} />
                                </SwiperSlide>
                            );
                        })) : null}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Recomend