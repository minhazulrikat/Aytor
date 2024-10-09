import React from "react";
import "./Banner.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay , Pagination } from "swiper/modules";
import Btn from "./subcompoents/Btn";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper"
     
      >
        <SwiperSlide>
          <div className="Banner">
            <div className="container">
              <h5>Mega Sale</h5>
              <h2>Up To 35% Off</h2>
              <p>
                Objectively incubate enabled innovation through leveraged
                mindshare. Competently.
              </p>
              <Btn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Banner">
            <div className="container">
              <h5>Mega Sale</h5>
              <h2>Up To 35% Off</h2>
              <p>
                Objectively incubate enabled innovation through leveraged
                mindshare. Competently.
              </p>
              <Btn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Banner">
            <div className="container">
              <h5>Mega Sale</h5>
              <h2>Up To 35% Off</h2>
              <p>
                Objectively incubate enabled innovation through leveraged
                mindshare. Competently.
              </p>
              <Btn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Banner">
            <div className="container">
              <h5>Mega Sale</h5>
              <h2>Up To 35% Off</h2>
              <p>
                Objectively incubate enabled innovation through leveraged
                mindshare. Competently.
              </p>
              <Btn />
            </div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </>
  );
};

export default Banner;
