import React from "react";
import "./DealCard.css";
import CommonBtn from "../../Common/Button/CommonBtn";




const DealCard = ({bgImage}) => {
  return (
    <>
      <div style={{backgroundImage: `url(${bgImage})`}} className="DealsCard">
        <h4>Fairness Cream</h4>
        <h2>Get Up To 35% Off</h2>
        <p>
          Competently target best-of-breed value without transparent e-commerce.
          Dramatically procrastin ate fully tested relationships.
        </p>
        <div>
          <span>$256.35</span>
          <span className="text-decoration-line-through px-3">$556.35</span>
        </div>
        <CommonBtn style={"DealsBtn"} text={"Shop Now"} />
      </div>
    </>
  );
};

export default DealCard;
