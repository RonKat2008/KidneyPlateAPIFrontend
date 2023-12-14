import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactStars from "react-rating-stars-component";
import "./UsersFeedBack.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  location: Yup.string(),
  message: Yup.string(),
});

const UsersFeedBack = () => {
  const [rating, setRating] = useState(0);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmits,
  });
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
  function handleSubmits() {
    const formData = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      city: values.location,
      rating: rating,
      suggestion: values.message,
      feedback_form: "feedback_form",
    };
    axios
      .post(
        "https://backend-kidneyplate.azurewebsites.net/api/submit-form.php",
        formData
      )
      .then((response) => {
        console.log(response);
        thanks();
        resetForm();
        setRating("");
      })
      .catch((error) => {
        console.error(error);
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
      });
  }
  const handleChangeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <>
      <section class="breadcrumbs">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb-wrapper">
                <h1>Users FeedBack </h1>
                <span>
                  <a href="index.html">Home</a>
                  <i class="bi bi-chevron-right"></i>Users FeedBack{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join-team sec-mar-top sec-mar-bottom">
        <div className="container">
          <div className="row">
            <div
              className="sec-title wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
              style={{ marginTop: "20px" }}
            >
              <h2> Users Feedback </h2>
              <p>
                We truly appreciate you taking the time to share your thoughts
                with us. Your feedback is invaluable and helps us enhance our
                services. We're delighted to hear about your positive
                experience, and your kind words motivate us to continue striving
                for excellence.
              </p>
            </div>

            <div
              className="col-lg-7 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="joining-form">
                <form
                  onSubmit={handleSubmit}
                  action="feedback.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <p> Your First Name </p>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.firstName && touched.firstName
                            ? "input-error"
                            : ""
                        }
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="error" style={{ color: "red" }}>
                          {" "}
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <p> Your Last Name </p>
                      <input
                        type="text"
                        name="lastName"
                        placeholder=""
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.lastName && touched.lastName
                            ? "input-error"
                            : ""
                        }
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="error" style={{ color: "red" }}>
                          {" "}
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <p> Your Email </p>
                      <input
                        type="email"
                        name="email"
                        placeholder=""
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email ? "input-error" : ""
                        }
                      />
                      {errors.email && touched.email && (
                        <p className="error" style={{ color: "red" }}>
                          {" "}
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6">
                      <p> Your Location/ City </p>
                      <input
                        type="text"
                        name="location"
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="rating-container">
                        <p> Rating </p>
                        <ReactStars
                          count={5}
                          onChange={handleChangeRating}
                          size={35}
                          activeColor="#ffd700"
                        />
                        {/* {errors.rating && touched.rating && (
                          <p className="error-message" style={{ color: "red" }}>
                            {" "}
                            {errors.rating}
                          </p>
                        )} */}
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="mb-1">
                        {" "}
                        Do you have suggestions on what we can do to provide you
                        with a better service?
                      </p>
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Type Here..."
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.message && touched.message && (
                        <p className="error" style={{ color: "red" }}>
                          {" "}
                          {errors.message}
                        </p>
                      )}
                      <input type="submit" value="Submit" name="comments" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-5 wow animate fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="join-banner">
                <img src="assets/img/feedback-banner.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default UsersFeedBack;
