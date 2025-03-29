import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="container mt-5">
        <div className="common-heading-container">
      <h2 className="text-center  p-3 common-heading" >
        Contact Us
      </h2>
      </div>

      <div className="row mt-5">
        {/* Contact Form */}
        <div className="col-md-6 shadow-sm p-4 mb-4">
          <h4 className="common-heading" style={{fontSize:"20px"}}>Send Us a Message</h4>
          <form className="mt-2">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="btn common-btn">Submit</button>
          </form>
        </div>

        {/* Emergency Helplines */}
        <div className="col-md-5 shadow-sm p-4 m-1 mb-4 d-flex flex-column align-items-center  ">
        
            <div>
            <h4 className="common-heading">Emergency Helplines</h4>
          <p className="mt-4"><strong>Drug Abuse Helpline:</strong> +1-800-123-4567</p>
          <p><strong>Mental Health Support:</strong> +1-800-987-6543</p>
          <p><strong>Rehabilitation Centers:</strong> Find one near you <Link to = "/rehabcenters">here</Link>.</p>
          <div className="">
          <h4>Follow Us</h4>
          <a href="#" className="btn btn-primary me-2">Facebook</a>
          <a href="#" className="btn btn-info me-2">Twitter</a>
          <a href="#" className="btn btn-danger">Instagram</a>
        </div>
        </div>
        </div>
      </div>

      
    </div>
  );
};

export default ContactUs;
