import React from "react";
import Quote from "../assets/img/icons/quote.png";
import Thum1 from "../assets/img/testimonial-thum-1.jpg";
import Thum2 from "../assets/img/testimonial-thum-2.jpg";
import Thum3 from "../assets/img/testimonial-thum-3.jpg";

const Testimonial = ({ name }) => {
  return (
    <div>
      <section className="testimonial-area ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial two">
                <span>Testimonial</span>
                <h3>Our Patients Say</h3>
                <i>
                  <img src={Quote} alt={"Quote"} />
                </i>
                <div className="swiper testimonial-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="reviewer">
                        <img src={Thum1} alt={"Thum1"} />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="reviewer">
                        <img src={Thum2} alt={"Thum2"} />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="reviewer">
                        <img src={Thum3} alt={"Thum3"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper testimonial-slider2 two">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-single two">
                        <p>
                          Always available, extremely knowledgeable, and a
                          tremendous "can-do" attitude. Our company was on a
                          tight timeline and strict budget to create a
                          first-className mobile interpretation app, and Will
                          was the perfect partner. His guidance and advice was
                          invaluable in producing that app which easily exceeded
                          my expectations... the entire company was thrilled
                          with it! Without any hesitation... highly recommended.
                          Always available to answer any questions. Very
                          knowledgeable about the services they provide. Would
                          recommend to anyone!You have been absolutely wonderful
                          for Kinship Center.
                        </p>
                        <div className="testimonial-inner">
                          <h4>--Johan Martin S--</h4>
                          <span>CEO Founder</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-single two">
                        <p>
                          Always available, extremely knowledgeable, and a
                          tremendous "can-do" attitude. Our company was on a
                          tight timeline and strict budget to create a
                          first-className mobile interpretation app, and Will
                          was the perfect partner. His guidance and advice was
                          invaluable in producing that app which easily exceeded
                          my expectations... the entire company was thrilled
                          with it! Without any hesitation... highly recommended.
                          Always available to answer any questions. Very
                          knowledgeable about the services they provide. Would
                          recommend to anyone!You have been absolutely wonderful
                          for Kinship Center.
                        </p>
                        <div className="testimonial-inner">
                          <h4>--Selina Selo S--</h4>
                          <span>CEO Founder</span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-single two">
                        <p>
                          Always available, extremely knowledgeable, and a
                          tremendous "can-do" attitude. Our company was on a
                          tight timeline and strict budget to create a
                          first-className mobile interpretation app, and Will
                          was the perfect partner. His guidance and advice was
                          invaluable in producing that app which easily exceeded
                          my expectations... the entire company was thrilled
                          with it! Without any hesitation... highly recommended.
                          Always available to answer any questions. Very
                          knowledgeable about the services they provide. Would
                          recommend to anyone!You have been absolutely wonderful
                          for Kinship Center.
                        </p>
                        <div className="testimonial-inner">
                          <h4>--Malika Jeso M--</h4>
                          <span>CEO Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arrows">
                    <div className="swiper-button-next-c">
                      <svg
                        width="30"
                        height="13"
                        viewBox="0 0 30 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.0250063 6.86415C0.125078 7.09519 0.337732 7.31408 0.569149 7.41744C0.781803 7.50864 0.981948 7.53296 1.73249 7.53296C2.55809 7.53296 2.67067 7.5208 2.92085 7.39312C3.30237 7.21072 3.49626 6.87631 3.46499 6.48111C3.43372 6.15279 3.29612 5.92782 2.98339 5.7211C2.7895 5.59342 2.71445 5.58734 1.73249 5.58734C0.750531 5.58734 0.675476 5.59342 0.481586 5.7211C0.16886 5.9339 0.0312607 6.15279 0.00624253 6.48111C-0.00626634 6.63919 -1.19124e-05 6.81551 0.0250063 6.86415Z" />
                        <path d="M5.31006 7.04693C5.39137 7.15637 5.53522 7.30837 5.62904 7.37525C5.80416 7.49685 5.87296 7.50293 7.98699 7.50293C10.101 7.50293 10.1698 7.49685 10.3449 7.37525C10.6827 7.13205 10.814 6.8706 10.789 6.49364C10.7577 6.09844 10.5889 5.83091 10.2761 5.68499C10.0948 5.59987 9.77578 5.58771 7.97448 5.58771C5.93551 5.58771 5.88547 5.59379 5.6478 5.72755C5.18497 5.98291 5.02235 6.63348 5.31006 7.04693Z" />
                        <path d="M12.5341 6.86431C12.6216 7.07103 12.8218 7.29599 13.0094 7.39935C13.1971 7.49663 13.6912 7.50271 19.7143 7.53311L26.219 7.56351L23.861 9.50305C22.3287 10.7616 21.4655 11.5156 21.403 11.6432C21.1903 12.081 21.3842 12.6708 21.8095 12.8896C22.0535 13.0234 22.5225 13.0356 22.7289 12.9261C22.804 12.8836 24.4239 11.5703 26.3378 10.0016C28.677 8.08032 29.8403 7.08319 29.9091 6.95551C30.0968 6.56031 29.9904 6.12862 29.6214 5.78814C29.0022 5.22877 22.6852 0.151923 22.5163 0.0789622C22.2473 -0.0365592 22.0159 -0.0243989 21.7095 0.109363C21.2154 0.328245 21.0027 0.984891 21.2716 1.42873C21.3342 1.5321 22.4663 2.49275 23.786 3.55676C25.0994 4.62685 26.1814 5.51453 26.1814 5.53886C26.1877 5.56926 23.2668 5.5875 19.6892 5.5875L13.1971 5.5875L12.9907 5.72126C12.6779 5.93406 12.5403 6.15294 12.5153 6.48126C12.5028 6.63935 12.5091 6.81567 12.5341 6.86431Z" />
                      </svg>
                    </div>
                    <div className="swiper-button-prev-c">
                      <svg
                        width="30"
                        height="13"
                        viewBox="0 0 30 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M29.975 6.13585C29.8749 5.90481 29.6623 5.68592 29.4309 5.58256C29.2182 5.49136 29.0181 5.46704 28.2675 5.46704C27.4419 5.46704 27.3293 5.4792 27.0792 5.60688C26.6976 5.78928 26.5037 6.12369 26.535 6.51889C26.5663 6.84721 26.7039 7.07218 27.0166 7.2789C27.2105 7.40658 27.2856 7.41266 28.2675 7.41266C29.2495 7.41266 29.3245 7.40658 29.5184 7.2789C29.8311 7.0661 29.9687 6.84721 29.9938 6.51889C30.0063 6.36081 30 6.18449 29.975 6.13585Z" />
                        <path d="M24.6899 5.95307C24.6086 5.84363 24.4648 5.69163 24.371 5.62475C24.1958 5.50315 24.127 5.49707 22.013 5.49707C19.899 5.49707 19.8302 5.50315 19.6551 5.62475C19.3173 5.86795 19.186 6.1294 19.211 6.50636C19.2423 6.90156 19.4111 7.16909 19.7239 7.31501C19.9052 7.40013 20.2242 7.41229 22.0255 7.41229C24.0645 7.41229 24.1145 7.40621 24.3522 7.27245C24.815 7.01709 24.9777 6.36652 24.6899 5.95307Z" />
                        <path d="M17.4659 6.13569C17.3784 5.92897 17.1782 5.70401 16.9906 5.60065C16.8029 5.50337 16.3088 5.49729 10.2857 5.46689L3.78103 5.43649L6.13899 3.49695C7.67134 2.23837 8.53447 1.48445 8.59701 1.35677C8.80967 0.919001 8.61578 0.329235 8.19047 0.110353C7.94654 -0.0234083 7.47745 -0.0355684 7.27106 0.0738726C7.196 0.116433 5.57608 1.42973 3.6622 2.99838C1.32301 4.91968 0.159669 5.91681 0.090869 6.04449C-0.0967666 6.43969 0.00956025 6.87138 0.378577 7.21186C0.997774 7.77123 7.31484 12.8481 7.48371 12.921C7.75265 13.0366 7.98407 13.0244 8.29054 12.8906C8.78465 12.6718 8.9973 12.0151 8.72836 11.5713C8.66581 11.4679 7.53375 10.5073 6.21404 9.44324C4.90059 8.37315 3.81856 7.48547 3.81856 7.46114C3.81231 7.43074 6.73317 7.4125 10.3108 7.4125L16.8029 7.4125L17.0093 7.27874C17.3221 7.06594 17.4597 6.84706 17.4847 6.51874C17.4972 6.36065 17.4909 6.18433 17.4659 6.13569Z" />
                      </svg>
                    </div>
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

export default Testimonial;
