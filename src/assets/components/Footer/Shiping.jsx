import React from "react";
import "./Footer.css";
import ShipingImg from "../../images/shipingImage.png";
const Shiping = ({ Heading, Description }) => {
  return (
    <>
      <div className="ShipingCard d-flex justify-content-between align-items-center col-lg-3 col-md-4 col-6">
        <div className="ShipinImage">
          <img src={ShipingImg} className="img-fluid" alt="" />
        </div>
        <div className="ShipingText d-none d-lg-block">
          <h4>{Heading}</h4>
          <p>
            {Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Shiping;
