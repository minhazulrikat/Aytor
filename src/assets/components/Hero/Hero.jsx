import React from "react";


const Hero = () => {
  return (
    <>
      <div className="container my-4 my-md-5 gap-3">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <img className="img-fluid mt-3 mt-md-0" src="/src/assets/images/hero1.png" alt="" />
            </div>
            <div className="row">
              <img className="img-fluid mt-3 mt-md-0" src="/src/assets/images/hero2.png" alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <img className="img-fluid mt-3 mt-md-0" src="/src/assets/images/hero3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
