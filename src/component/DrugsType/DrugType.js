import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { legalDrugs, illegalDrugs } from "./DrugTypeData";



export default function DrugType() {
  


  return (
    <div className="container mt-4">
      
  
      <div className=" " style={{  borderRadius: "10px" }}>
        <div className="common-heading-container">
      <h2 className="text-center mb-4 common-heading mt-5">Types of Drugs & Their Effects</h2>
      </div>
      <div className="row mt-4">
        {/* Legal Drugs Section */}
        <div className="col-md-6 ">
          <div className="card shadow border-0 p-3">
            <h4 className="common-heading">Legal Drugs</h4>
            <div className="row">
        {legalDrugs.map((drug) => (
          <div key={drug.id} className="col-md-4 mt-5 ">
            <div className="card mb-3 shadow-sm border-0" style={{height:"250px"}}>
              <img src={drug.image} className="card-img-top m-auto mt-3" alt={drug.name} style={{height:"50px" ,width:"50px"}} />
              <div className="card-body text-center">
                <h5 className="card-title" style={{fontSize:"20px"}} >{drug.name}</h5>
              <p>{drug.description}</p>
           
              </div>
            </div>
          </div>
        ))}
      </div>
          
          </div>
        </div>

        {/* Illegal Drugs Section */}
        <div className="col-md-6 ">
          <div className="card  shadow p-3 border-0">
            <h4 className="common-heading">IllegalDrugs</h4>
            <div className="row">
        {illegalDrugs.map((drug) => (
          <div key={drug.id} className="col-md-4 mt-5  ">
            <div className="card mb-3 shadow-sm border-0" style={{height:"250px"}}>
              <img src={drug.image} className="card-img-top m-auto mt-3" alt={drug.name} style={{height:"50px" ,width:"50px"}} />
              <div className="card-body text-center">
                <h5 className="card-title" style={{fontSize:"20px"}} >{drug.name}</h5>
              <p>{drug.description}</p>
           
              </div>
            </div>
          </div>
        ))}
      </div>
            
          </div>
        </div>
      </div>

      {/* Effects on Health */}
      <div className="mt-5 p-4 mb-4 rounded">
        <div className="common-heading-container">
        <h3 className="text-center common-heading">Effects on Mental & Physical Health</h3>
        </div>
        <div className="row text-center mt-4 d-flex align-items-center justify-content-center">
          <div className="col-md-3 mt-4 rounded m-1" style={{border: "2px solid #00a8a8" ,padding:"10px"}}>
            <h5 className="text-danger">Short-Term Effects</h5>
            <p>Includes nausea, dizziness, impaired memory, and poor decision-making.</p>
          </div>
          <div className="col-md-3 mt-4 rounded m-1" style={{border: "2px solid #00a8a8" ,padding:"10px"}}>
            <h5 className="text-info">Long-Term Effects</h5>
            <p>May cause organ failure, depression, anxiety, and social isolation.</p>
          </div>
          <div className="col-md-3 mt-4 rounded m-1" style={{border: "2px solid #00a8a8" ,padding:"10px"}}>
            <h5 className="text-primary">Social & Legal Consequences</h5>
            <p>Leads to financial issues, legal troubles, and relationship breakdowns.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
