import React from "react";
import Location from "../assets/img/icons/location.svg";
import Phone from "../assets/img/icons/phone-white.svg";
import Envelope from "../assets/img/icons/envelope.svg";

const Footer = ({ name }) => {
  return (
    <div>
      <footer>
        <div className="footer-middle mt-1">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div className="col-md-12 col-lg-4 col-xl-6">
                <div className="footer-widget">
                  <div className="contact-info">
                    <h4>Contact Us :</h4>
                    <div className="info">
                      <div className="icon">
                        <i>
                          {" "}
                          <img src={Location} alt={"Location"} />
                        </i>
                      </div>
                      <p>House#168/170, Road#02, Ave#01, Mirpur DOHS, Dhaka</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="footer-widget">
                  <div className="info">
                    <div className="icon">
                      <i>
                        <img src={Phone} alt={"Phone"} />
                      </i>
                    </div>
                    <div className="phone">
                      <a href="tel:01760000032">+880 176 0000 032</a>
                      <a href="tel:09256806649">+092568 06649</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="footer-widget">
                  <div className="info">
                    <div className="icon">
                      <i>
                        <img src={Envelope} alt={"Envelope"} />
                      </i>
                    </div>
                    <div className="email">
                      <a href=" ">
                        <span className=""> dummyemail@gmail.com</span>
                      </a>
                      <a href=" ">
                        <span className=""> dummyemail@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                <div className="copy-txt text-center">
                  <span>
                    {" "}
                    &#169; Copyright 2022{" "}
                    <b>Healing Kidneys. &nbsp; All Rights Reserved </b>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
