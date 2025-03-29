import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
      <div
        className="container-fluid"
        style={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/images/medicare.png"
            alt="Meditrack Logo"
            style={{ width: 50, marginRight: 8 }}
          />
          <span style={{ fontWeight: "600", fontSize: "1.2rem" }}>Meditrack</span>
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "#000", fontWeight: "500" }}>
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: "#000", fontWeight: "500" }}>
                📜 About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/drug_awareness" className="nav-link" style={{ color: "#000", fontWeight: "500" }}>
                📖 Drug Awareness
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rehabcenters" className="nav-link" style={{ color: "#000", fontWeight: "500" }}>
                🏥 Rehabilitation Centers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/typesofDrug" className="nav-link" style={{ color: "#000", fontWeight: "500" }}>
                💊 Types of Drugs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/get-help" className="nav-link" style={{ color: "#000", fontWeight: "500" }}>
                🗣 Consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="d-flex">
          <Link to="/contact">
            <button className="btn" style={{ backgroundColor: "#00a8a8", color: "#fff" }}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
