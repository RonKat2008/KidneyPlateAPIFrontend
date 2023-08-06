import React from "react";
import Intro1 from "../assets/img/intro-1.jpg";
import Intro2 from "../assets/img/intro-2.jpg";
import Intro3 from "../assets/img/intro-3.jpg";
import Shape2 from "../assets/img/angle-shape2.png";
import Shape from "../assets/img/angle-shape.png";
import Check from "../assets/img/icons/check.svg";

const AboutHealingKidneys = ({ name }) => {
  return (
    <div>
      <section className="introduction introduction1 sec-pad">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="intro-left wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="frame-1">
                  <div className="img-1">
                    <img src={Intro1} alt={"Intro1"} />
                  </div>

                  <div
                    className="raised wow animate fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="raised-cnt">
                      <h5 className="mb-0 mt-2"> 12+ </h5>
                      <span className="mt-0"> Years Experience </span>
                    </div>

                    <div className="angle-shape">
                      <img src={Shape2} alt={"Shape2"} />
                    </div>
                  </div>
                </div>

                <div className="frame-2">
                  <div className="img-1">
                    <img src={Intro2} alt={"Intro2"} />
                    <div className="angle-shape">
                      <img src={Shape} alt={"Shape"} />
                    </div>
                  </div>
                  <div className="img-2">
                    <img src={Intro3} alt={"Intro3"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="intro-right intro-right1  wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <span> GET TO KNOW ABOUT Healing Kidneys </span>
                <h2> We advise you to prevent disease with nutrition. </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <ul className="intro-list">
                  <li>
                    <i>
                      <img src={Check} alt={"Check"} />
                    </i>
                    Nutritional assessment.
                  </li>
                  <li>
                    <i>
                      <img src={Check} alt={"Check"} />
                    </i>
                    Meal planning and analysis.
                  </li>
                  <li>
                    <i>
                      <img src={Check} alt={"Check"} />
                    </i>
                    Weight assessment.
                  </li>
                </ul>
                <div className="cmn-btn">
                  <a href="about.html">
                    More About &nbsp;{" "}
                    <i className="bi-arrow-right-circle-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row gy-4 mt-5">
              <div className="col-md-6 col-lg-4">
                <div
                  className="individual-project wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon one">
                    <svg
                      width="42"
                      height="44"
                      viewBox="0 0 42 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 44C20.8251 44 20.6503 43.9417 20.5046 43.8265L11.9838 37.0445C8.08759 33.9429 5.30382 29.5686 4.14634 24.7242C4.14369 24.7149 4.14237 24.7043 4.13972 24.695L0.722909 7.59511C0.636827 7.16602 0.914939 6.74886 1.3427 6.66145C5.88123 5.73308 18.1553 2.77582 20.408 0.263544C20.5589 0.0953525 20.7735 0 21 0C21.2264 0 21.441 0.0966768 21.5919 0.263544C23.8446 2.77582 36.1187 5.73308 40.6572 6.66145C41.0863 6.74886 41.3631 7.16602 41.277 7.59511L37.8602 24.695C37.8589 24.7043 37.8562 24.7149 37.8536 24.7242C36.6961 29.5673 33.9123 33.9429 30.0161 37.0445L21.4953 43.8265C21.3496 43.9417 21.1748 44 21 44ZM5.69582 24.3692C6.77384 28.8641 9.35764 32.9232 12.9744 35.801L21 42.1896L29.0255 35.801C32.6409 32.9232 35.2261 28.8641 36.3041 24.3692L39.5633 8.05598C36.1902 7.33686 24.6392 4.71864 20.9986 1.86732C17.358 4.71731 5.80707 7.33686 2.43396 8.05598L5.69582 24.3692Z" />
                      <path d="M23.6631 29.8587H18.334C17.8956 29.8587 17.5394 29.5024 17.5394 29.0641V24.1865H12.6631C12.2248 24.1865 11.8685 23.8303 11.8685 23.3919V18.0641C11.8685 17.6257 12.2248 17.2695 12.6631 17.2695H17.5394V12.3919C17.5394 11.9535 17.8956 11.5973 18.334 11.5973H23.6631C24.1015 11.5973 24.4577 11.9535 24.4577 12.3919V17.2695H29.3353C29.7737 17.2695 30.1299 17.6257 30.1299 18.0641V23.3919C30.1299 23.8303 29.7737 24.1865 29.3353 24.1865H24.4577V29.0641C24.4577 29.5024 24.1028 29.8587 23.6631 29.8587ZM19.1299 28.2695H22.8699V23.3919C22.8699 22.9535 23.2261 22.5973 23.6645 22.5973H28.542V18.8587H23.6645C23.2261 18.8587 22.8699 18.5024 22.8699 18.0641V13.1865H19.1299V18.0641C19.1299 18.5024 18.7737 18.8587 18.3353 18.8587H13.4591V22.5973H18.3353C18.7737 22.5973 19.1299 22.9535 19.1299 23.3919V28.2695Z" />
                    </svg>
                  </div>
                  <div className="project-inner three">
                    <h4> Healthy daily life </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <a className="one" href=" ">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="individual-project wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon two">
                    <svg
                      width="42"
                      height="44"
                      viewBox="0 0 42 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 44C20.8251 44 20.6503 43.9417 20.5046 43.8265L11.9838 37.0445C8.08759 33.9429 5.30382 29.5686 4.14634 24.7242C4.14369 24.7149 4.14237 24.7043 4.13972 24.695L0.722909 7.59511C0.636827 7.16602 0.914939 6.74886 1.3427 6.66145C5.88123 5.73308 18.1553 2.77582 20.408 0.263544C20.5589 0.0953525 20.7735 0 21 0C21.2264 0 21.441 0.0966768 21.5919 0.263544C23.8446 2.77582 36.1187 5.73308 40.6572 6.66145C41.0863 6.74886 41.3631 7.16602 41.277 7.59511L37.8602 24.695C37.8589 24.7043 37.8562 24.7149 37.8536 24.7242C36.6961 29.5673 33.9123 33.9429 30.0161 37.0445L21.4953 43.8265C21.3496 43.9417 21.1748 44 21 44ZM5.69582 24.3692C6.77384 28.8641 9.35764 32.9232 12.9744 35.801L21 42.1896L29.0255 35.801C32.6409 32.9232 35.2261 28.8641 36.3041 24.3692L39.5633 8.05598C36.1902 7.33686 24.6392 4.71864 20.9986 1.86732C17.358 4.71731 5.80707 7.33686 2.43396 8.05598L5.69582 24.3692Z" />
                      <path d="M23.6631 29.8587H18.334C17.8956 29.8587 17.5394 29.5024 17.5394 29.0641V24.1865H12.6631C12.2248 24.1865 11.8685 23.8303 11.8685 23.3919V18.0641C11.8685 17.6257 12.2248 17.2695 12.6631 17.2695H17.5394V12.3919C17.5394 11.9535 17.8956 11.5973 18.334 11.5973H23.6631C24.1015 11.5973 24.4577 11.9535 24.4577 12.3919V17.2695H29.3353C29.7737 17.2695 30.1299 17.6257 30.1299 18.0641V23.3919C30.1299 23.8303 29.7737 24.1865 29.3353 24.1865H24.4577V29.0641C24.4577 29.5024 24.1028 29.8587 23.6631 29.8587ZM19.1299 28.2695H22.8699V23.3919C22.8699 22.9535 23.2261 22.5973 23.6645 22.5973H28.542V18.8587H23.6645C23.2261 18.8587 22.8699 18.5024 22.8699 18.0641V13.1865H19.1299V18.0641C19.1299 18.5024 18.7737 18.8587 18.3353 18.8587H13.4591V22.5973H18.3353C18.7737 22.5973 19.1299 22.9535 19.1299 23.3919V28.2695Z" />
                    </svg>
                  </div>
                  <div className="project-inner three">
                    <h4> Fat-burning workouts </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <a className="one" href=" ">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="individual-project wow animate fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon three">
                    <svg
                      width="42"
                      height="44"
                      viewBox="0 0 42 44"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 44C20.8251 44 20.6503 43.9417 20.5046 43.8265L11.9838 37.0445C8.08759 33.9429 5.30382 29.5686 4.14634 24.7242C4.14369 24.7149 4.14237 24.7043 4.13972 24.695L0.722909 7.59511C0.636827 7.16602 0.914939 6.74886 1.3427 6.66145C5.88123 5.73308 18.1553 2.77582 20.408 0.263544C20.5589 0.0953525 20.7735 0 21 0C21.2264 0 21.441 0.0966768 21.5919 0.263544C23.8446 2.77582 36.1187 5.73308 40.6572 6.66145C41.0863 6.74886 41.3631 7.16602 41.277 7.59511L37.8602 24.695C37.8589 24.7043 37.8562 24.7149 37.8536 24.7242C36.6961 29.5673 33.9123 33.9429 30.0161 37.0445L21.4953 43.8265C21.3496 43.9417 21.1748 44 21 44ZM5.69582 24.3692C6.77384 28.8641 9.35764 32.9232 12.9744 35.801L21 42.1896L29.0255 35.801C32.6409 32.9232 35.2261 28.8641 36.3041 24.3692L39.5633 8.05598C36.1902 7.33686 24.6392 4.71864 20.9986 1.86732C17.358 4.71731 5.80707 7.33686 2.43396 8.05598L5.69582 24.3692Z" />
                      <path d="M23.6631 29.8587H18.334C17.8956 29.8587 17.5394 29.5024 17.5394 29.0641V24.1865H12.6631C12.2248 24.1865 11.8685 23.8303 11.8685 23.3919V18.0641C11.8685 17.6257 12.2248 17.2695 12.6631 17.2695H17.5394V12.3919C17.5394 11.9535 17.8956 11.5973 18.334 11.5973H23.6631C24.1015 11.5973 24.4577 11.9535 24.4577 12.3919V17.2695H29.3353C29.7737 17.2695 30.1299 17.6257 30.1299 18.0641V23.3919C30.1299 23.8303 29.7737 24.1865 29.3353 24.1865H24.4577V29.0641C24.4577 29.5024 24.1028 29.8587 23.6631 29.8587ZM19.1299 28.2695H22.8699V23.3919C22.8699 22.9535 23.2261 22.5973 23.6645 22.5973H28.542V18.8587H23.6645C23.2261 18.8587 22.8699 18.5024 22.8699 18.0641V13.1865H19.1299V18.0641C19.1299 18.5024 18.7737 18.8587 18.3353 18.8587H13.4591V22.5973H18.3353C18.7737 22.5973 19.1299 22.9535 19.1299 23.3919V28.2695Z" />
                    </svg>
                  </div>
                  <div className="project-inner three">
                    <h4> Improving Health </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <a className="one" href=" ">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHealingKidneys;
