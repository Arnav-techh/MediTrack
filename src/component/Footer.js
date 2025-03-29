import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const iconStyle = {
  backgroundColor: "#fff",
  color: "#00a8a8",
  padding: "8px 10px",
  borderRadius: "10px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
};

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>MediTrack: Empowering Recovery Through Digital Support
          </span>
        </div>

        <div>
          <a href='' className='me-4 text-reset' >
            <MDBIcon fab icon="facebook-f" style={{backgroundColor:"#fff", color: "#00a8a8", padding:"8px 10px" ,borderRadius: "10px", boxShadow:  " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" style = {iconStyle} />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" style = {iconStyle} />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" style = {iconStyle}/>
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" style = {iconStyle} />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" style = {iconStyle} />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"black"}}>
               <img src= "images/medicare.png" height={40} width={40}/>
              MediTrack
              </h6>
              <p style={{color:"black"}}>
              MediTrack is a web-based platform dedicated to raising awareness about drug abuse and providing support for recovery.

              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <Link to = "/" className='text-reset'>
                 Home  </Link>
              </p>
              <p>
                <Link  to = "/about" className='text-reset'>
                  About US
                </Link>
              </p>
              <p>
                <Link to = "/drug_awareness"  className='text-reset'>
                  Drug Awarencess
                </Link>
              </p>
              <p>
                <Link to = "typesofDrug" className='text-reset'>
                    Types of Drugs
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to ="/rehabcenters" className='text-reset'>
                 Rehabilitation Centers
                </Link>
              </p>
              <p>
                <Link to = "/get-help" className='text-reset'>
                  Consulting
                </Link>
              </p>
              <p>
                <Link  to = "contact" className='text-reset'>
                  Contact Us
                </Link>
              </p>
              <p>
               
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" style={{color:"#00a8a8"}} />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" style={{color:"#00a8a8"}}  />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3 " style={{color:"#00a8a8"}}  /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3 " style={{color:"#00a8a8"}}  /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 Copyright:
        <a className='text-reset fw-bold' href='https://digitalsavers.in/'>
         Digital Savers
        </a>
      </div>
    </MDBFooter>
  );
}