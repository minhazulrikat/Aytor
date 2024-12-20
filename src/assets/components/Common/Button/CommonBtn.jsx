
import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./CommonBtn.css";


const CommonBtn = ({style,text,}) => {
    return (
        <div>
            <button href="#" id={`${style}`} className='HoverEffect'>{text} <HiOutlineArrowNarrowRight/></button>
        </div>
    );
};

export default CommonBtn;