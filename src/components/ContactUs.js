import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const thanks = () => {
    toast.success("Thank You So Much For The Review", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      contact_form: "contact_form",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      axios
        .post(
          "https://backend-kidneyplate.azurewebsites.net/api/submit-form.php",
          values
        )
        .then((response) => {
          console.log(response);
          thanks();
          resetForm();
          setIsSubmitting(false);
        })
        .catch((error) => {
          toast.error("Faiked to submit the review", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.error(error);
          setIsSubmitting(false);
        });
    },
  });

  return (
    <div>
      <section class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb-wrapper">
                <h1> Contact Us </h1>
                <span>
                  <a href="index.html">Home</a>
                  <i class="bi bi-chevron-right"></i> Contact Us{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-area sec-mar-top sec-mar-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="contact-form">
                <h3>Get in Touch</h3>
                <p>
                  We are waiting to help you and your team, so don’t hesitate to
                  reach out!
                </p>
                <form onSubmit={formik.handleSubmit} method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="Your First Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.first_name}
                      />
                      {formik.touched.first_name &&
                        formik.errors.first_name && (
                          <div style={{ color: "red" }} className="error">
                            {formik.errors.first_name}
                          </div>
                        )}
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Your Last Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.last_name}
                      />
                      {formik.touched.last_name && formik.errors.last_name && (
                        <div style={{ color: "red" }} className="error">
                          {formik.errors.last_name}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div style={{ color: "red" }} className="error">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <div style={{ color: "red" }} className="error">
                          {formik.errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        cols="30"
                        rows="4"
                        placeholder="Write Message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                      />
                      {formik.touched.message && formik.errors.message && (
                        <div style={{ color: "red" }} className="error">
                          {formik.errors.message}
                        </div>
                      )}
                      <input
                        type="submit"
                        value="Send Message"
                        disabled={isSubmitting} // Disable the button during submission
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe src="https://maps.google.com/maps?q=texas%20united+states&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
              </div>
              <div class="contact-information">
                <div class="single-info">
                  <div class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="info-cnt">
                    <p>House#168/170, Road#02, Ave#01, USA</p>
                  </div>
                </div>
                <div class="single-info">
                  <div class="icon">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div class="info-cnt">
                    <a href="tel:02123456788">+1 44 55 66 77 88 99</a>
                    <a href="tel:0170000000">+1 66 77 88 99 00</a>
                  </div>
                </div>
                <div class="single-info">
                  <div class="icon border-n">
                    <i class="far fa-envelope"></i>
                  </div>
                  <div class="info-cnt">
                    <a href="">
                      <span class=""> example@gmail.com</span>
                    </a>
                    <a href="">
                      <span class=""> example2@gmail.com</span>
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

export default ContactUs;
