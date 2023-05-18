import React from "react";

const HomeContact = ({ name }) => {
  return (
    <div>
      <section className="join-now">
        <div className="newsletter">
          <div className="row align-items-center">
            <div className="col-md-9">
              <div
                className="newsletter-cnt wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <h2> Let's create something new together..</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="joinnow-btn">
                <a href=" "> Contact Us </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContact;
