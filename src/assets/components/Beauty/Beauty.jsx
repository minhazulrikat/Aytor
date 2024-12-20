import React from "react";
import Beauty1 from "../../images/Beauty1.png";
import CommonBtn from "../Common/Button/CommonBtn";
import Play from "../../images/play.png";
import "./Beauty.css";


const Beauty = () => {
  return (
    <>
      <section className="Beauty" id="Beauty">
        <div className="container">
        
              <h4>SPECIAL OFFER</h4>
              <h2>Beauty Inspired by Real Shine In Life </h2>
              <p>
                Completely grow maintainable niches via tactical services.
                Progressively synthesize market positioning paradigms for
                functional architectures. Professionally aggregate.
              </p>
              <CommonBtn style={"BeautyBtn"} text={"Explore More"}/>
           
        </div>
        <div className="Beauty-Video" id="Beauty-Video">
          <img src={Beauty1} className="Video" alt="" />
          <div className="PlayButton">
            <div>
                <img src={Play} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beauty;
