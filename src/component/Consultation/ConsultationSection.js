import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorsData from "./doctorsData.json";

const ConsultationSection = () => {
  const [doctors, setDoctors] = useState([]);

  // Load doctor data from JSON
  // useEffect(() => {
  //   fetch("./doctorsData.json")
  //     .then((response) => response.json())
  //     .then((data) => setDoctors(data))
  //     .catch((error) => console.error("Error loading data:", error));
  // }, []);

  return (
    <div className="container mt-4">
      <div className="common-heading-container">
      <h2 className="text-center mb-4 common-heading">
        Consult with a Doctor or Counselor
      </h2>
      </div>
      <div className="row">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="col-md-4 mb-4">
            <div className="card shadow-sm p-3">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="card-img-top rounded-circle mx-auto d-block"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="text-muted">{doctor.specialization}</p>
                <a href={`tel:${doctor.phone}`} className="btn btn-sm m-1" style={{backgroundColor: "#00a8a8", color: "#fff"}}>
                  Call Now
                </a>
                <a href={doctor.whatsapp} className="btn btn-success btn-sm m-1" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationSection;
