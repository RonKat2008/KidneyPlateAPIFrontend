import React from "react";
import About from "../assets/img/about.png";
import Team from "../assets/img/team/team-1.jpg";

const AboutUs = ({ name }) => {
  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <h1>About us</h1>
                <span>
                  <a href="index.html">Home</a>
                  <i className="bi bi-chevron-right"></i>About us
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="introduction introduction2 pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="intro-left two wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="row g-4">
                  <div className="col-12">
                    <img src={About} alt={"About"} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="intro-right two wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <span> ABOUT Healing Kidneys </span>
                <h2> We advise you to prevent disease with nutrition. </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>

                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>

                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="team-member sec-mar-top sec-mar-bottom wow animate fadeInUp"
        data-wow-delay="400ms"
        data-wow-duration="1500ms"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-xl-6">
              <div
                className="sec-title wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <h2>Team Member</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusa doloremque laudantium, totam.
                </p>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col">
              <div
                className="single-person wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="person-img">
                  <img src={Team} alt={"Team"} />
                  <ul className="team-social">
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="person-info">
                  <h5>
                    <a href="member-details.html">Johan Martin SR</a>
                  </h5>
                  <span> Designation </span>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="single-person wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="person-img">
                  <img src={Team} alt={"Team"} />
                  <ul className="team-social">
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="person-info">
                  <h5>
                    <a href="member-details.html">Johan Martin SR</a>
                  </h5>
                  <span> Designation </span>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="single-person wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="person-img">
                  <img src={Team} alt={"Team"} />
                  <ul className="team-social">
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="person-info">
                  <h5>
                    <a href="member-details.html">Johan Martin SR</a>
                  </h5>
                  <span> Designation </span>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="single-person wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="person-img">
                  <img src={Team} alt={"Team"} />
                  <ul className="team-social">
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="person-info">
                  <h5>
                    <a href="member-details.html">Johan Martin SR</a>
                  </h5>
                  <span> Designation </span>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="single-person wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="person-img">
                  <img src={Team} alt={"Team"} />
                  <ul className="team-social">
                    <li>
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="person-info">
                  <h5>
                    <a href="member-details.html">Johan Martin SR</a>
                  </h5>
                  <span> Designation </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
