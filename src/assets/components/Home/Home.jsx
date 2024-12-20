import React from "react";
import Navbar from "../Navbigation/Navbar";
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import Product from "../products/Product";
import Load from "../LoadEvent/Load";
import Cosmatics from "../Cosmatics/Cosmatics";
import BestSell from "../BestSell/BestSell";
import Deals from "../Deals/Deals";
import Beauty from "../Beauty/Beauty";
import News from "../News/News";
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <Product />
      <Cosmatics />
      <BestSell />
      <Deals />
      <Beauty />
     <News/>
     <Footer/>
   
    </>
  );
};

export default Home;
