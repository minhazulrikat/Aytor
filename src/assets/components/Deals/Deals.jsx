import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay , Pagination } from "swiper/modules";
import deal1 from "../../images/deal1.png";
import deal2 from "../../images/deal2.png";
import DealCard from "./subDeals/DealCard";
import "./Deals.css";
import CountdownTimer from "./subDeals/CountDown";


const Deals = () => {
  const deadline = "2024-12-31T23:59:59"
  return (
    <>
      <div className="container DealsSection mb-5">
        <h1 className="text-center my-4  my-lg-5">Deals Of The Days</h1>
        <div className="deadLine">
          <CountdownTimer deadline={deadline}/>
        </div>
        <div className="deals d-flex align-items-center">
          <Swiper
       
          pagination={{
            clickable: true,
            dynamicBullets: true,
            pagination: true, // Allows bullets to be clickable
          
          }}
        
         
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
           
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination,Autoplay]}
            style={{height:"100%"}}
            className="mySwiper"
            id="DealsSwiper"
          >
            <SwiperSlide>
              <DealCard bgImage={deal1} />
            </SwiperSlide>
            <SwiperSlide>
              <DealCard bgImage={deal2} />
            </SwiperSlide>
            <SwiperSlide>
              <DealCard bgImage={deal1} />
            </SwiperSlide>
            <SwiperSlide>
              <DealCard bgImage={deal2} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Deals;
