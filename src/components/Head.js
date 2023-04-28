import React from "react";

import logo from "../assets/img/logo.png";

const Head = () => {
  return (
    <div className="grid grid-flow-col">
      <header className="header-area-2 sticky">
        <div className="header-logo">
          <img src={logo} alt={"logo"} />
        </div>
        <div className="main-menu">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <img src={logo} alt={"logo"} />
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
              <a href="foods.html"> Browse Foods </a>
            </li>
            <li>
              <a href="feedback.html"> Users Feedback </a>
            </li>
            <li>
              <a href="polices.html"> Terms & Policies </a>
            </li>
            <li>
              <a href="contact.html"> Contact Us </a>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-btn d-lg-none d-block">
          <span>MENU</span>
        </div>
      </header>
    </div>
  );
};

export default Head;
