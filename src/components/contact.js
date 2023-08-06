import React, { useState } from 'react';
import {useFormik} from "formik"
import {basicSchema} from "../schemas"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const thanks = () => {
  toast.success('Thank You So Much For The Review', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

const ContactUS = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    intialValues: {
      firstName: "",
      lastName: "",
      email: "",
      rating: ""
    },
    validationSchema: basicSchema,
    onsubmit
  });
  const [post,setPost] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    rating: '',
    comment: ''
  })
  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.event})
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('localhost', {post})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  return (
    <>
    <section class="join-team sec-mar-top sec-mar-bottom">
    <div class="container">
    <div class="row">
        <div class="sec-title wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" >
            <h2>  Users Feedback  </h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
        </div>

    <div class="col-lg-7 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" >
    <div class="joining-form">
    <form onSubmit = {() => {
      handleSubmit
      thanks()
    }} action="feedback.php" method="post">
    <div class="row">

        <div class="col-md-6">
        <p> Your First Name </p>
        <input 
        type="text" 
        name="Fname" 
        placeholder="Enter your first name"
        value = {values.firstName}
        onChange = {() => {
          handleChange
          handleInput
        }}
        onBlue = {handleBlur}        
        className= {errors.firstName && touched.firstName ? "input-error" : ""}
        ></input>
        {errors.firstName && touched.firstName && (
        <p className="error"> {errors.firstName}</p>
        )}
        </div>
        <div class="col-md-6">
         <p> Your Last Name </p>   
        <input 
        type="text" 
        name="Lname" placeholder=""
        value = {values.lastName}
        onChange = {() => {
          handleChange
          handleInput
        }}
        onBlue = {handleBlur}
        className= {errors.lastName && touched.lastName ? "input-error" : ""}
        ></input>
        {errors.lastName && touched.lastName && (
        <p className="error"> {errors.lastName}</p>
        )}
        </div>
        
        <div class="col-md-6">
            <p> Your Email  </p>
        <input 
        type="email" 
        name="email" 
        placeholder=""
        value = {values.email}
        onChange = {() => {
          handleChange
          handleInput
        }}
        onBlue = {handleBlur}
        className= {errors.email && touched.email ? "input-error" : ""}
        ></input>
        {errors.email && touched.email && (
        <p className="error"> {errors.email}</p>
        )}
        </div>
        
        <div class="col-md-6">
            <p> Your Location/ City </p>
        <input type="text" name="location" onChange = {() => {
          handleChange
          handleInput
        }}placeholder=""></input>
        </div>

        <div class="col-md-12">
            <p> Rating </p>
        <input 
        type="text" 
        name="location" 
        placeholder=""
        value = {values.rating}
        onChange = {() => {
          handleChange
          handleInput
        }}
        onBlue = {handleBlur}  
        className= {errors.rating && touched.rating ? "input-error" : ""}
        ></input>
        {errors.rating && touched.rating && (
        <p className="error"> {errors.rating}</p>
        )}
        </div>
         
        <div class="col-12">
        <p class="mb-1"> Do you have suggestions on what we can do to provide you with a better service?</p>
        <textarea name="message" cols="30" rows="10" placeholder="Type Here..."></textarea>
        <input type="submit" onChange = {() => {
          handleChange
          handleInput
        }} value="Submit" name = "comments"></input>
        </div>
        </div>
        </form>
        </div>
        </div>

        <div class="col-lg-5 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms"  >
        <div class="join-banner">
        <img src="assets/img/feedback-banner.jpg" alt=""></img>
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
    {/* Same as */}
    <ToastContainer />
    </>
);



}



export default ContactUS;
