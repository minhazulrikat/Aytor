import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import NewsCard from "./NewsCard";
import allNewsAndHeading from "./NewsAndHeading";

const News = () => {
  const swiperSettings = {
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Latest News</h1>
      <Swiper
        {...swiperSettings}
        modules={[Pagination, Autoplay]}
        style={{ height: "350px" }}
        className="mySwiper"
        id="NewsSwiper"
      >
        {allNewsAndHeading.slice(0, 8).map((item, index) => (
          <SwiperSlide key={index}>
            <NewsCard 
              heading={item.heading} 
              description={item.des} 
              date={item.date} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;