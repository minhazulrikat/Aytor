import React from "react";
import "./News.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import newsImage1 from "../../images/News.png";

const NewsCard = ({ heading, description, date }) => {
  return (
    <div className="news">
      <div className="News-Card w-100 h-100">
        <div className="News-Image text-center text-lg-left">
          <img src={newsImage1} className="img-fluid" alt="NewsImage" />
        </div>
        <div className="News-content">
          <h3>{heading}</h3>
          <p>{description}</p>
          <div className="d-flex justify-content-between">
            <span className="Read-More">
              Read More <HiOutlineArrowNarrowRight />
            </span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;