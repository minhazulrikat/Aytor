import React from "react";
import Hero1 from "../../images/hero1.png";
import Hero2 from "../../images/hero2.png";
import Hero3 from "../../images/hero3.png";

const Hero = () => {
  return (
    <>
      <div className="container my-4 my-md-5 gap-3">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <img className="img-fluid mt-3 mt-md-0" src={Hero1} alt="" />
            </div>
            <div className="row">
              <img className="img-fluid mt-3 mt-md-0" src={Hero2} alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <img className="img-fluid mt-3 mt-md-0" src={Hero3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
