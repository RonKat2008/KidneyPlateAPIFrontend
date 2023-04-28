import React from "react";
import HomebannerImg from "../assets/img/home1-banner.png";
import Handtop from "../assets/img/hand-top.png";
import Handbtm from "../assets/img/hand-btm.png";
import BannerVT from "../assets/img/icons/bannar1-vector-top.svg";
import Bannert from "../assets/img/bannar-top-2.png";
import BannerVb from "../assets/img/icons/bannar1-vector-btm.svg";
import BannerVp from "../assets/img/icons/bannar1-vector-pata.svg";

const HomeBanner = ({ name }) => {
  return (
    <div>
      <section className="hero-area d-flex align-items-center">
        <ul>
          <li className="hand-top">
            <img src={Handtop} alt={"Handtop"} />
          </li>
          <li className="hand-btm">
            <img src={Handbtm} alt={"Handbtm"} />
          </li>
          <li className="bannar1-vector-top">
            <img src={BannerVT} alt={"BannerVT"} />
          </li>
          <li className="bannar-top-2">
            <img src={Bannert} alt={"Bannert"} />
          </li>
          <li className="bannar1-vector-btm">
            <img src={BannerVb} alt={"BannerVb"} />
          </li>
          <li className="bannar1-vector-pata">
            <img src={BannerVp} alt={"BannerVp"} />
          </li>
        </ul>
        <div className="container">
          <div className="row BannerVpign-items-center">
            <div className="hero-style-one">
              <div className="social-media">
                <ul className="footer-social gap-4">
                  <li>
                    <a href="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://pinterest.com/">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <h6>Follow Us</h6>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="hero-content">
                <span>--Change your life--</span>
                <h1>
                  Why should you diet with Kidney <span> Problems? </span>
                </h1>
                <p>
                  “Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy”
                </p>
              </div>
              <div className="bannar-buttonss d-flex">
                <div className="cmn-btn">
                  <a href="foods.html">
                    {" "}
                    Get Started Today &nbsp;{" "}
                    <i className="bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="hero-img wow animate zoomIn"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img src={HomebannerImg} alt={"HomebannerImg"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
