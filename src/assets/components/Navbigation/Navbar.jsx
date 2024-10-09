// import React, { useState } from "react";
// import "./Navigation.css";
// import NavLinks from "../subcom/navRoutes";
// import { LuUser2 } from "react-icons/lu";
// import { IoIosSearch } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa";
// import { IoBagOutline } from "react-icons/io5";
// import Search from "./SubNav/Search";

// const Navbar = () => {
//   let [search, setSearch] = useState(false);
//   let forSearch = () => {
//     setSearch(true);
//   };
 
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <img src="/src/assets/images/Logo.png" alt="" />
//           </a>
//           <button
//             className="navbar-toggler"
//             id="bars"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span
//               className="navbar-toggler-icon"
//               data-bs-toggle="offcanvas"
//               href="#offcanvasExample"
//               aria-controls="offcanvasExample"
//             ></span>
//           </button>
//           <div className="icons d-none d-lg-block">
//             <IoIosSearch onClick={forSearch} id="nav-icons" />
//             <LuUser2 id="nav-icons" />
//             <FaRegHeart id="nav-icons" />
//             <span className="bag">
//               <IoBagOutline id="nav-icons" />
//               <span className="bag-num">0</span>
//             </span>
//           </div>
          
//         </div>
//       </nav>
//       <Search getClick={search} toSetSearch={setSearch} />

//       <div
//         class="offcanvas offcanvas-start"
//         tabindex="-1"
//         id="offcanvasExample"
//         aria-labelledby="offcanvasExampleLabel"
//       >
//         <div class="offcanvas-header">
//           <h5 class="offcanvas-title" id="offcanvasExampleLabel">
//             Offcanvas
//           </h5>
//           <button
//             type="button"
//             class="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div class="offcanvas-body">
//           <ul id="Navigation" className="navbar-nav m-auto mb-2 mb-lg-0">
//             {NavLinks.map((route, index) => {
//               if (route.subLinks) {
//                 return (
//                   <li key={index} className="nav-item dropdown">
//                     <a
//                       className="nav-link dropdown-toggle"
//                       href="#"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       {route.title}
//                     </a>
//                     <ul className="dropdown-menu py-1 m-auto">
//                       {route.subLinks.map((link, index) => {
//                         return (
//                           <li key={index} className="m-auto text-center">
//                             <a
//                               className="dropdown-item p-1 text-center"
//                               href="#"
//                             ></a>
//                             {link.title}
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </li>
//                 );
//               }
//               return (
//                 <li key={index} className="nav-item">
//                   <a className="nav-link">{route.title}</a>
//                 </li>
//               );
//             })}
//           </ul>
//           <div></div>
//         </div>
//       </div>
//       <div className="icons ">
//            <IoIosSearch onClick={forSearch} id="nav-icons"/>
//           <LuUser2 id="nav-icons"/>
//           <FaRegHeart id="nav-icons"/>
//           <span className="bag">
//           <IoBagOutline id="nav-icons" />
//           <span className="bag-num">0</span>
//           </span>
//            </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./Navigation.css";
import NavLinks from "../subcom/navRoutes";
import { LuUser2 } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Search from "./SubNav/Search";


const Navbar = () => {
  let [search, setSearch] = useState(false);
  let forSearch = () => {
    setSearch(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/src/assets/images/Logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
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
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul id="Navigation" className="navbar-nav m-auto mb-2 mb-lg-0">
            {NavLinks.map((route, index) => {
              if (route.subLinks) {
                return (
                  <li key={index} className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {route.title}
                    </a>
                    <ul className="dropdown-menu py-1 m-auto">
                      {route.subLinks.map((link, index) => {
                        return (
                          <li key={index} className="m-auto text-center">
                            <a
                              className="dropdown-item p-1 text-center"
                          
                            >
                              {link.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
              else{
                return (
                  <li key={index} className="nav-item">
                    <a className="nav-link">
                      {route.title}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
    </div>
          <div className=" icons d-none d-lg-flex">
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
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          <img src="/src/assets/images/Logo.png" alt="" />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul id="Navigation" className="navbar-nav m-auto mb-2 mb-lg-0">
            {NavLinks.map((route, index) => {
              if (route.subLinks) {
                return (
                  <li key={index} className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {route.title}
                    </a>
                    <ul className="dropdown-menu py-1 m-auto">
                      {route.subLinks.map((link, index) => {
                        return (
                          <li key={index} className="m-auto text-center">
                            <a
                              className="dropdown-item p-1 text-center"
                          
                            >
                              {link.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
              else{
                return (
                  <li key={index} className="nav-item">
                    <a className="nav-link">
                      {route.title}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
          <div></div>
        </div>
      </div>

      <div className=" icons mobile-icons shadow-lg d-lg-none d-flex">
        <LuUser2 id="nav-icons" />
      <div id="nav-icons" >
      <span className="search-icon" >
        <IoIosSearch onClick={forSearch}  />
        </span>
      </div>
        {/* <FaRegHeart id="nav-icons" /> */}
        <span className="bag">
          <IoBagOutline id="nav-icons" />
          <span className="bag-num">0</span>
        </span>
      </div>
    </>
  );
};

export default Navbar;