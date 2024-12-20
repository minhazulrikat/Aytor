import React, { useState } from "react";
import "./Navigation.css";
import NavLinks from "../subcom/navRoutes";
import { LuUser2 } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Search from "./SubNav/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [search, setSearch] = useState(false);
  let forSearch = () => {
    setSearch(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <a className="navbar-brand">
            <img src="/src/assets/images/Logo.png" alt="" />
          </a>
          <button className="navbar-toggler"
            id="bars"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              aria-controls="offcanvasExample"
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul id="Navigation" className="navbar-nav m-auto mb-2 mb-lg-0">
              {NavLinks.map((route, index) => {
                if (route.subLinks) {
                  return (
                    <li key={index} className="nav-item dropdown">
                      <Link 
                        to={route.path} // Add this line
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-haspopup="true" // Add this line
                      >
                        {route.title}
                      </Link>
                      <ul className="dropdown-menu py-1 m-auto">
                        {route.subLinks.map((link) => {
                          return (
                            <li key={link.path} className="m-auto text-center"> {/* Use link.path for key */}
                              <Link to={link.path} className="dropdown-item p-1 text-center">
                                {link.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="nav-item">
                      <Link to={route.path} className="nav-link">{route.title}</Link> {/* Add to prop here */}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="icons d-none d-lg-flex">
            <IoIosSearch onClick={forSearch} id="nav-icons" />
            <LuUser2 id="nav-icons" />
            <FaRegHeart id="nav-icons" />
            <span className="bag">
              <IoBagOutline id="nav-icons" />
              <span className="bag-num">0</span>
            </span>
          </div>
        </div>
      </nav>
      <Search getClick={search} toSetSearch={setSearch} />

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src="/src/assets/images/Logo.png" alt="" />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul id="Navigation" className="navbar-nav m-auto mb-2 mb-lg-0">
            {NavLinks.map((route, index) => {
              if (route.subLinks) {
                return (
                  <li key={index} className="nav-item dropdown">
                    <Link
                      to={route.path} // Add this line
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      aria-haspopup="true" // Add this line
                    >
                      {route.title}
                    </Link>
                    <ul className="dropdown-menu py-1 m-auto">
                      {route.subLinks.map((link) => {
                        return (
                          <li key={link.path} className="m-auto text-center">
                            <Link to={link.path} className="dropdown-item p-1 text-center">
                              {link.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="nav-item">
                    <Link to={route.path} className="nav-link">{route.title}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="icons mobile-icons shadow-lg d-lg-none d-flex">
          <LuUser2 id="nav-icons" />
          <div id="nav-icons">
            <span className="search-icon">
              <IoIosSearch onClick={forSearch} />
            </span>
          </div>
          <span className=" bag">
            <IoBagOutline id="nav-icons" />
            <span className="bag-num">0</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;