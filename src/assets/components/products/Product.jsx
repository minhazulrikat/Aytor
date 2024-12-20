import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Product.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SubProduct from "./SubProduct/SubProduct";
import image1 from "../../images/product1.png";
import image2 from "../../images/product2.png";
import image3 from "../../images/product3.png";
import image4 from "../../images/product4.png";
import image5 from "../../images/product5.png";
import image6 from "../../images/product6.png";
import image7 from "../../images/product7.jpg";
import image8 from "../../images/product8.jpg";
import Rating from "../../images/Rating.png";


const Product = () => {
  return (
    <div className="container mb-5">
      <h1 className="text-center my-4">New Arrivals Products</h1>
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
            Sale={true}
            SaleText={"-45%"}
            image={image1}
            image2={image3}
            price={"$150.65"}
            text={"Lotion Shower gel"}
            Rating = {Rating}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            Sale={true}
            SaleText={"Sale"}
            image={image2}
            image2={image4}
            price={"$256.00"}
            text={"Argan Cream Body Butter"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            image={image3}
            image2={image1}
            price={"$175.04"}
            text={"Compact Face Powder"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            Sale={true}
            SaleText={"Sale"}
            image={image4}
            image2={image3}
            price={"$75.65"}
            text={"Manicure Gel nails, makeup"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            image={image8}
            image2={image1}
            price={"$150.65"}
            text={"Lotion Shower gel"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            image={image7}
            image2={image2}
            price={"$150.65"}
            text={"Lotion Shower gel"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            image={image5}
            image2={image4}
            price={"$150.65"}
            text={"Lotion Shower gel"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SubProduct
            image={image6}
            image2={image3}
            price={"$150.65"}
            text={"Lotion Shower gel"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Product;
