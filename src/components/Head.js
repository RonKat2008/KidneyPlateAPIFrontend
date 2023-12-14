import React, { useState } from "react";
import "./Head.css";
import logo from "../assets/img/logo.png";

const Head = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="grid grid-flow-col">
      <header className="header-area-2 sticky">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt={"logo"} />
          </a>
        </div>
        <div className="main-menu">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <a href="/">
                <img src={logo} alt={"logo"} />
              </a>
            </div>
            <div className="menu-close-btn">
              <i className="bi bi-x-lg"></i>
            </div>
          </div>
          <ul className="menu-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/AboutUs"> About us </a>
            </li>
            <li>
              <a href="/browsefoods"> Browse Foods </a>
            </li>
            {/* <li>
              <a href="/usersfeedback"> Users Feedback </a>
            </li> */}
            <li>
              <a href="/termsandpolicies"> Terms & Policies </a>
            </li>
            {/* <li>
              <a href="/contactus"> Contact Us </a>
            </li> */}
          </ul>
        </div>

        <div className="mobile-menu-btn d-lg-none d-block">
          <button onClick={handleMenuOpen}>Menu</button>
          {openMenu && (
            <ul style={{ color: "black" }}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/AboutUs"> About us </a>
              </li>
              <li>
                <a href="/browsefoods"> Browse Foods </a>
              </li>
              {/* <li>
                <a href="/usersfeedback"> Users Feedback </a>
              </li> */}
              <li>
                <a href="/termsandpolicies"> Terms & Policies </a>
              </li>
              {/* <li>
                <a href="/contactus"> Contact Us </a>
              </li> */}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
};

export default Head;
