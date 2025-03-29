import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faUsers, faHeart, faCheckCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DrugAwareness = () => {
  return (
    <div className="container " style={{marginTop:"6rem"}}>
      <h2 className="text-center fw-bold" style={{ color: "#00a8a8" }}>🚨 Drug Awareness: Know the Facts</h2>
      <p className="text-center text-muted">Understanding drug abuse is the first step in prevention. Learn the signs, causes, and consequences to protect yourself and others.</p>

      <div className="row mt-4">
        {/** Signs & Symptoms **/}
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card p-3 shadow-lg w-100" style={{ borderTop: "5px solid #00a8a8" }}>
            <h4 style={{ color: "#00a8a8" }}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={{marginRight:"8px" }}  />
              Signs & Symptoms
            </h4>
            <p className="text-muted">Drug abuse affects people physically, mentally, and socially. Common signs include:</p>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faExclamationTriangle} style={{ color: "red", marginRight: "8px" }} /> Mood swings, secrecy, isolation.</li>
              <li><FontAwesomeIcon icon={faExclamationTriangle} style={{ color: "orange", marginRight: "8px" }} /> Weight loss, poor hygiene.</li>
              <li><FontAwesomeIcon icon={faExclamationTriangle} style={{ color: "purple", marginRight: "8px" }} /> Anxiety, paranoia, memory loss.</li>
            </ul>
          </div>
        </div>

        {/** Causes & Risk Factors **/}
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card p-3 shadow-lg w-100" style={{ borderTop: "5px solid #00a8a8" }}>
            <h4 style={{ color: "#00a8a8" }}>
              <FontAwesomeIcon icon={faUsers} style={{marginRight:"8px" }}  />
              Causes & Risk Factors
            </h4>
            <p className="text-muted">Several factors contribute to drug abuse:</p>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faUsers} style={{ color: "blue", marginRight: "8px" }} /> Peer pressure & social influence.</li>
              <li><FontAwesomeIcon icon={faUsers} style={{ color: "green", marginRight: "8px" }} /> Mental health issues.</li>
              <li><FontAwesomeIcon icon={faUsers} style={{ color: "darkred", marginRight: "8px" }} /> Family history.</li>
            </ul>
          </div>
        </div>

        {/** Consequences **/}
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card p-3 shadow-lg w-100" style={{ borderTop: "5px solid #00a8a8" }}>
            <h4 style={{ color: "#00a8a8" }}  >
              <FontAwesomeIcon icon={faHeart} style={{marginRight:"8px" }} />
              Consequences of Drug Abuse
            </h4>
            <p className="text-muted">Drug abuse has serious consequences:</p>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faHeart} style={{ color: "red", marginRight: "8px" }} /> Health risks.</li>
              <li><FontAwesomeIcon icon={faHeart} style={{ color: "darkblue", marginRight: "8px" }} /> Social impact.</li>
              <li><FontAwesomeIcon icon={faHeart} style={{ color: "brown", marginRight: "8px" }} /> Financial struggles.</li>
            </ul>
          </div>
        </div>
      </div>

      {/** Prevention & Help **/}
      <div className="row mt-5">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card p-3 shadow-lg w-100" style={{ borderTop: "5px solid #00a8a8" }}>
            <h4 style={{ color: "#00a8a8",marginRight:"8px" }}>
              <FontAwesomeIcon icon={faCheckCircle} style={{marginRight:"8px" }}  />
              How to Prevent Drug Abuse?
            </h4>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: "green", marginRight: "8px" }} /> Stay informed.</li>
              <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: "blue", marginRight: "8px" }} /> Engage in hobbies.</li>
              <li><FontAwesomeIcon icon={faCheckCircle} style={{ color: "purple", marginRight: "8px" }} /> Build strong relationships.</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card p-3 shadow-lg w-100" style={{ borderTop: "5px solid #00a8a8" }}>
            <h4 style={{ color: "#00a8a8" }}>
              <FontAwesomeIcon icon={faPhone} style={{marginRight:"8px" }}   />
              Need Help? Reach Out!
            </h4>
            <p className="text-muted">If you or someone you know is struggling, seek help:</p>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faPhone} style={{ color: "darkblue", marginRight: "8px" }} /> Call a rehab center.</li>
              <li><FontAwesomeIcon icon={faPhone} style={{ color: "red", marginRight: "8px" }} /> Talk to professionals.</li>
            </ul>
          </div>
        </div>
      </div>

      {/** Call to Action **/}
      <div className="text-center mt-5">
        <h3 className="fw-bold" style={{ color: "#00a8a8" }}>🚫 Say NO to Drugs, Say YES to Life! 🚫</h3>
        <p className="text-muted">Spread awareness and help create a drug-free society.</p>
        <Link to = "/"><button className="btn btn-lg text-white" style={{ backgroundColor: "#00a8a8" }}>Learn More</button></Link>
      </div>
    </div>
  );
};

export default DrugAwareness;
