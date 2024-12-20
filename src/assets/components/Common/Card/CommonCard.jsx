import React from 'react';
import "./CommonCard.css";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus  } from "react-icons/fa";
import { FaEye   } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";


const CommonCard = ({image,image2,price,text,Sale,SaleText}) => {
    return (
        <>
             <div className="ProductCard text-center d-flex flex-column align-items-center">
            <div className="cardImage">
                <span className={`${Sale?"Sale":""}`}>{SaleText}</span>
                <div className='hoverIcon'>
                    <span><FaCartPlus /> </span>
                    <span><FaHeart/></span>
                    <span><FaEye/></span>
                    <span><GiNetworkBars/></span>

                </div>
              <div className="primaryImage">
                <img
                  src={image}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="seconderyImage">
                <img
                  src={image2}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <p className='my-4'>{price}</p>
            <h5>{text}</h5>
            <span>
            &#9733;
            &#9733;
            &#9733;
            &#9733;
            &#9733;
              {/* <img src={Rating} alt="" /> */}
            </span>
          </div>
        </>
    );
};

export default CommonCard;
