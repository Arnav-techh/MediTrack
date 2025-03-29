import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <section className="about-us-section position-relative py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 position-relative">
            <div className="position-absolute bg-gradient rounded-circle shadow-lg"
            style={{
                background: "linear-gradient(135deg, #00a8a8, #007f7f)",
                minHeight: "100vh", // Ensures full section height
                display: "flex",
                alignItems: "center",
              }} >
              </div>
            <img
              src="images/support bg-2.jpg"
              alt="Team"
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6">
            <div className="bg-white p-4 shadow-lg rounded-4">
              <h2 className="fw-bold">About Us</h2>
              <p className="text-muted">
              We are dedicated to helping individuals overcome drug addiction through structured recovery programs 
              and interactive support systems. Our platform offers real-time statistics, 
              expert guidance, and engaging tools like the 21-day recovery challenge to 
            promote a healthier lifestyle. With access to rehabilitation centers, 
            AI-driven assistance, and daily progress tracking, we empower individuals 
            to take control of their journey toward a drug-free life. Our mission is
             to create a supportive community focused on awareness, prevention, and
              long-term recovery
              </p>
             
              <button className="btn  px-4 py-2 rounded-pill" style={{backgroundColor:"#00a8a8" ,color:"#fff"}}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
