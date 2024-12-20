
import CommonCard from "../Common/Card/CommonCard";
import "./BestSell.css";
import bestSell1 from "../../images/bestSell1.png";
import bestSell3 from "../../images/bestSell3.png";
import CommonBtn from './../Common/Button/CommonBtn';

const BestSell = () => {
  return (
    <>
      <div className="container my-3 my-lg-5 bestSell">
        <h2>Best Seller Products</h2>
       <div className="row">
        <div className="col-lg-3">
        <CommonCard
          image={bestSell1}
          image2={bestSell3}
          price={"$150.65"}
          text={"Lotion Shower gel"}
        />
        </div>
        <div className="col-lg-3">
        <CommonCard
          image={bestSell1}
          image2={bestSell3}
          price={"$150.65"}
          text={"Lotion Shower gel"}
        />
        </div>
        <div className="col-lg-3">
        <CommonCard
          image={bestSell1}
          image2={bestSell3}
          price={"$150.65"}
          text={"Lotion Shower gel"}
        />
        </div>
        <div className="col-lg-3">
        <CommonCard
          image={bestSell1}
          image2={bestSell3}
          price={"$150.65"}
          text={"Lotion Shower gel"}
        />
        </div>
      
       </div>
       <div className="row">
        <div className="col-lg-3">
        <CommonCard
          image={bestSell1}
          image2={bestSell3}
          price={"$150.65"}
          text={"Lotion Shower gel"}
        />
        </div>
        <div className="col-lg-3">
        <CommonCard
          image={bestSell1}
          image2={bestSell3}
          price={"$150.65"}
          text={"Lotion Shower gel"}
        />
        </div>
        <div className="col-lg-3">
        <CommonCard
          image={bestSell1}
          image2={bestSell3}
          price={"$150.65"}
          text={"Lotion Shower gel"}
        />
        </div>
        <div className="col-lg-3">
        <CommonCard
          image={bestSell1}
          image2={bestSell3}
          price={"$150.65"}
          text={"Lotion Shower gel"}
        />
        </div>
      
       </div>
       <div className="my-4 my-lg-5 d-flex justify-content-center align-items-center">
        <CommonBtn style={"ProductBtn"} text={"See All Products"}/>
       </div>
      </div>
    </>
  );
};

export default BestSell;
