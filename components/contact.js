import React from 'react';

const ContactUS = ({name}) => {
    return (
        <section className="contact-area sec-mar-top sec-mar-bottom">
        <div className="container">
        <div className="row">
        <div className="col-lg-6">
        <div className="contact-form">
        <h3>Get in Touch</h3>
        <p> We are waiting to help you and your team, so don’t hesitate to reach out! </p>
        <form action="#" method="post">
        <div className="row">
        <div className="col-md-6">
        <input type="text" name="name" placeholder="Your First Name "></input>
        </div>
        <div className="col-md-6">
            <input type="text" name="name" placeholder="Your Last Name "></input>
        </div>
        <div className="col-md-6">
        <input type="email" name="email" placeholder="Your Email "></input>
        </div>
        <div className="col-md-6">
        <input type="text" name="phone" placeholder="Phone Number "></input>
        </div>
         
        <div className="col-12">
        <textarea name="message" cols="30" rows="4" placeholder="Write Message "></textarea>
        <input type="submit" value="Send Message"></input>
        </div>
        </div>
        </form>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="mapouter">
        <div className="gmap_canvas">
        <iframe src="https://maps.google.com/maps?q=dhaka%20bangladesh&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
        </div>
        </div>
        <div className="contact-information">
        <div className="single-info">
        <div className="icon">
        <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="info-cnt">
        <p>168/170, Ave 01, Road 02 Old York Drive Rich, Mirpur DOHS, Dhaka.</p>
        </div>
        </div>
        <div className="single-info">
        <div className="icon">
        <i className="fas fa-phone-alt"></i>
        </div>
        <div className="info-cnt">
        <a href="tel:02123456788">+02 1234 567 88</a>
        <a href="tel:0170000000">+88 017 0000 000</a>
        </div>
        </div>
        <div className="single-info">
        <div className="icon border-n">
        <i className="far fa-envelope"></i>
        </div>
        <div className="info-cnt">
            <a href=""><span className="" > dummyemail@gmail.com</span></a>
            <a href=""><span className="">  dummyemail@gmail.com</span></a></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    );
};

export default ContactUS;