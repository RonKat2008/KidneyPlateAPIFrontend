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
                <h5>Introduction:</h5>
                <p>
                  {" "}
                  At HealingKidneys, we are dedicated to promoting kidney health
                  and well-being through education, awareness, and practical
                  guidance. Learn more about the team behind this initiative and
                  our mission to empower individuals to make informed choices
                  for kidney health.
                </p>
                <h5>Our Mission:</h5>
                <p>
                  {" "}
                  HealingKidneys was founded with a clear mission: to provide
                  accessible and reliable information about kidney health and
                  the vital role that diet plays in maintaining and improving
                  kidney function. We aim to make this information available to
                  individuals of all ages and backgrounds, with a special focus
                  on helping those who may be at risk of kidney disease or are
                  already managing kidney-related conditions.
                </p>
                <h5>Why We Care:</h5>
                <p>
                  {" "}
                  Our team is united by a shared commitment to kidney health
                  advocacy.
                </p>
                <h5>Our Approach:</h5>

                <p>
                  At HealingKidneys, we believe that knowledge is power. We are
                  committed to delivering accurate, up-to-date, and
                  easy-to-understand information to help individuals take
                  control of their kidney health journey. Our content is
                  thoroughly researched and reviewed by our team of experts to
                  ensure reliability.
                </p>
                <h5>Get Involved:</h5>
                <p>
                  {" "}
                  We encourage you to get involved in our mission to promote
                  kidney health. Whether you're looking for information,
                  support, or ways to contribute, we welcome your participation
                  in our community.
                </p>
                <h5>Contact Us:</h5>
                <p>
                  {" "}
                  If you have questions, suggestions, or simply want to connect
                  with our team, we'd love to hear from you. Please don't
                  hesitate to reach out through our.
                </p>
                <h5>Conclusion:</h5>
                <p>
                  Thank you for visiting HealingKidneys. We are dedicated to
                  being your trusted resource for kidney health information.
                  Together, we can make strides toward healthier kidneys and a
                  better quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
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
      </section> */}
    </div>
  );
};

export default AboutUs;
