import React from "react";
import "./Footer.css"; // Import the CSS file
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import footerLogo from "../../images/footerLogo.png";
import paymentImage from "../../images/payment.png";
// location icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import Shiping from "./Shiping";
import ShipingContent from "./ShipingAllcontent";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Social Icons */}

        <div className=" HrLine d-flex flex-column flex-lg-row g-3 g-lg-0 w-100 my-5 align-items-center justify-content-between">
          <div className="row mt-4">
            <div className=" d-flex justify-content-between social-icons">
              <a
                href="#"
                className=" p-1 me-1 d-flex justify-content-center align-items-center s-icon"
              >
                <a href="#">
                  <FaFacebookF className="SocialIcon" />
                </a>
              </a>
              <a
                href="#"
                className=" p-1 me-1 d-flex justify-content-center align-items-center s-icon"
              >
                <a href="#">
                  <FaTwitter className="SocialIcon" />
                </a>
              </a>
              <a
                href="#"
                className=" p-1 me-1 d-flex justify-content-center align-items-center s-icon"
              >
                <a href="#">
                  <FaInstagram className="SocialIcon" />
                </a>
              </a>
              <a
                href="#"
                className=" p-1 d-flex justify-content-center align-items-center s-icon"
              >
                <a href="#">
                  <FaPinterestP className="SocialIcon" />
                </a>
              </a>
            </div>
          </div>

          <div className="logo align-self-center">
            <img src={footerLogo} className="img-fluid" alt="" />
          </div>
          <div className="payment-icons">
            <img src={paymentImage} className="img-fluid" alt="" />
          </div>
        </div>

        {/* Footer Columns */}

        <div class="container footer-container">
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-4 footer-section">
                  <h3 class="footer-title">My Account</h3>
                  <ul class="list-unstyled footer-links">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">View Cart</a>
                    </li>
                    <li>
                      <a href="#">Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Compare</a>
                    </li>
                    <li>
                      <a href="#">New Products</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 footer-section">
                  <h3 class="footer-title">Support</h3>
                  <ul class="list-unstyled footer-links">
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Store Locations</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-5 footer-section">
                  <h3 class="footer-title">Opening Time</h3>
                  <ul class="list-unstyled footer-links">
                    <li>
                      <strong>Mon - Tue:</strong> 8AM - 10PM
                    </li>
                    <li>
                      <strong>Wed:</strong> 8AM - 7PM
                    </li>
                    <li>
                      <strong>Sat:</strong> 9AM - 8PM
                    </li>
                    <li>
                      <strong>Sun:</strong> Closed
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="row">
                <div class="col-lg-5 footer-section contact-info">
                  <h3 class="footer-title">Contact Us</h3>
                  <ul class="list-unstyled footer-links">
                    <li className="d-flex">
                      <i class="me-1">
                        <IoLocationSharp />
                      </i>
                      830 Broadway, New York, NY 10003
                    </li>
                    <li className="d-flex">
                      <i class="me-1">
                        <FaPhone />
                      </i>
                      +1 800 866 0286
                    </li>
                    <li className="d-flex">
                      <i class="me-1">
                        <MdMailOutline />
                      </i>
                      aetor.info@gmail.com
                    </li>
                    <li className="d-flex">
                      <i class="me-1"></i>info@aetor.com
                    </li>
                  </ul>
                </div>

                <div class="col-lg-7 footer-section">
                  <h3 class="footer-title">Newsletter</h3>
                  <p class="footer-description">
                    Authoritatively morph 24/7 potentialities with error-free
                    partnerships.
                  </p>
                  <div class="newsletter d-flex">
                    <input
                      type="email"
                      class="form-control form-control-lg me-2"
                      placeholder="Enter your email..."
                    />
                    <button class="btn btn-danger btn-lg">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center">
          &copy; 2022 All Rights Reserved Aytor By Angfuzsoft.
        </div>
      </div>

      {/* <div className="shipingSection w-100 bg-white d-flex align-items-center justify-content-center row">
        {ShipingContent.slice(0,4).map((elmnt, index) => (
          <Shiping key={index} 
          Heading={elmnt.heading}
          Description={elmnt.paragraph}   
          />
        ))}
      </div> */}
    </footer>
  );
};

export default Footer;
