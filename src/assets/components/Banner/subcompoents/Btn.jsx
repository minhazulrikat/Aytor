import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Btn.css"


const Btn = () => {
    return (
        <div>
            <button className={`${'bannerBtn'}`} > Shop Now <HiOutlineArrowNarrowRight/></button>
        </div>
    );
};

export default Btn;