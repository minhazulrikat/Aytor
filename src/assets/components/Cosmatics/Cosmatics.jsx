import React from "react";
import styles from "./Cosmatic.module.css";
import CommonBtn from "../Common/Button/CommonBtn";

const Cosmatics = () => {
  return (
    <>
      <div className={`${styles.cosmatic}`}>
        <div className="container">
          <h2>Get Up To 35% Off all Best Spa Cosmetics Cream</h2>
          <p>Holisticly maximize interoperable action items for effective e-business. Globally impact enterprise-wide niche markets through dynamic.</p>
        <CommonBtn style={'cosmaticBtn'} text={"Shop Now"}/>
        </div>
      </div>
    </>
  );
};

export default Cosmatics;
