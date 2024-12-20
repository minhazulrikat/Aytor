import React from 'react';
import Navbar from '../Navbigation/Navbar';
import BestSell from '../BestSell/BestSell';
import Footer from '../Footer/Footer';
import CommonGrid from '../Common/Card/CommonGrid';



const Shop = () => {
    return (
        <div>
            <Navbar/>
            <CommonGrid Text={"Shop"}/>
            <BestSell/>
            <Footer/>
        </div>
    );
};

export default Shop;