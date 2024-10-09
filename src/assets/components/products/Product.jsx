import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Product.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SubProduct from "./SubProduct/SubProduct";

const Product = () => {
  return (
    <div className="container">
      <h2 className="text-center my-4">New Arrivals Products</h2>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SubProduct
          Sale = {true}
          SaleText = {"-45%"}
            image={"/src/assets/images/product1.png"}
            image2={"/src/assets/images/product3.png"}
            price={"$150.65"}
            text={"Lotion Shower gel"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
           Sale = {true}
           SaleText = {"Sale"}
            image={"/src/assets/images/product2.png"}
            image2={"/src/assets/images/product4.png"}
            price={"$256.00"}
            text={"Argan Cream Body Butter"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            image={"/src/assets/images/product3.png"}
            image2={"/src/assets/images/product1.png"}
            price={"$175.04"}
            text={"Compact Face Powder"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
           Sale = {true}
           SaleText = {"Sale"}
            image={"/src/assets/images/product4.png"}
            image2={"/src/assets/images/product3.png"}
            price={"$75.65"}
            text={"Manicure Gel nails, makeup"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            image={"/src/assets/images/product8.jpg"}
            image2={"/src/assets/images/product1.png"}
            price={"$150.65"}
            text={"Lotion Shower gel"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            image={"/src/assets/images/product7.jpg"}
            image2={"/src/assets/images/product2.png"}
            price={"$150.65"}
            text={"Lotion Shower gel"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Product;
