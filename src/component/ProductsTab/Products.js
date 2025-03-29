import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";

const jsonData = {
  heading: "Comprehensive Solutions for Addiction Recovery",
  categories: [
    {
      name: "Medications (Prescribed by Doctors)",
      products: [
        { name: "Naltrexone", description: "Blocks the euphoric effects of opioids and alcohol.", image: "images/recoverybg-1.jpg" },
        { name: "Buprenorphine", description: "Reduces opioid cravings and withdrawal symptoms.", image: "images/recoverybg-1.jpg" },
        { name: "Methadone", description: "Used for opioid addiction to reduce cravings and withdrawal effects.", image: "images/recoverybg-1.jpg" },
        { name: "Disulfiram (Antabuse)", description: "Used for alcohol addiction to create unpleasant effects when drinking.", image: "images/recoverybg-1.jpg" }
      ]
    },
    {
      name: "Natural Supplements and Herbal Products",
      products: [
        { name: "Kudzu Root", description: "May reduce alcohol cravings.", image: "images/recoverybg-1.jpg" },
        { name: "Milk Thistle", description: "Supports liver health for those recovering from alcohol abuse.", image: "images/recoverybg-1.jpg" },
        { name: "L-Theanine", description: "Helps reduce anxiety and stress.", image: "images/recoverybg-1.jpg" },
        { name: "Ashwagandha", description: "Known for stress relief and mental stability.", image: "images/recoverybg-1.jpg" }
      ]
    },
    {
      name: "Psychological Support Tools",
      products: [
        { name: "Cognitive Behavioral Therapy (CBT)", description: "A therapy method that helps change negative thought patterns.", image: "images/recoverybg-1.jpg" },
        { name: "Meditation and Mindfulness Apps", description: "Mobile applications that assist with relaxation and focus.", image: "images/recoverybg-1.jpg" },
        { name: "Support Groups", description: "Includes Narcotics Anonymous, Alcoholics Anonymous, and other peer-support programs.", image: "images/recoverybg-1.jpg" }
      ]
    },
    {
      name: "Lifestyle and Healthy Alternatives",
      products: [
        { name: "Regular Exercise", description: "Physical activities that help reduce cravings and improve mental health.", image: "images/recoverybg-1.jpg" },
        { name: "Healthy Diet and Hydration", description: "Nutritious food and proper water intake to support recovery.", image: "images/recoverybg-1.jpg" },
        { name: "Engaging in Hobbies", description: "Activities to distract from cravings and build positive habits.", image: "images/recoverybg-1.jpg" }
      ]
    },
    {
      name: "Holistic Therapies",
      products: [
        { name: "Acupuncture", description: "Traditional Chinese therapy that may aid in reducing cravings and stress.", image: "images/recoverybg-1.jpg" },
        { name: "Aromatherapy", description: "Use of essential oils to reduce stress and promote relaxation.", image: "images/recoverybg-1.jpg" },
        { name: "Yoga and Breathing Techniques", description: "Practices that support emotional and mental balance.", image: "images/recoverybg-1.jpg" }
      ]
    }
  ]
};

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const [bgColor,setBgColor] = useState("white");

  return (
    <div className="container mt-5">
        <div className="common-heading-container">
      <h2 className="text-center mb-4 common-heading">{jsonData.heading}</h2>
      </div>
      <div className="row mt-3" >
        <div className="col-md-3 m-2" style={{ "box-shadow":" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <ul className="nav flex-column   p-2"  >
            {jsonData.categories.map((category, index) => (
              <li key={index} className="nav-item">
                <div
                  className={`nav-link ${activeTab === index ? 'active' : ''}  p-2 m-2`} 
                  onClick={() => {setActiveTab(index);}}
                  style={{
                    cursor: "pointer",
                    borderBottom: "2px solid #00a8a8",
                    borderRadius: "5px",
                    backgroundColor: activeTab === index ? "#00a8a8" : "white",
                    color: activeTab === index ? "white" : "black",
                    fontWeight: activeTab === index ? "bold" : "normal"
                  }}  
                >
                  {category.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-8  p-3 ">
          {jsonData.categories.map((category, index) => (
            <div key={index} className={activeTab === index ? '' : 'd-none'}>
              <div className="row">
                {category.products.map((product, pIndex) => (
                  <div className="col-md-6 mb-4" key={pIndex}>
                    <div className="card h-100 d-flex flex-row align-items-center border shadow-sm">
                      <img src={product.image} className="card-img-left" alt={product.name} style={{ width: "40%", height: "100%", objectFit: "cover" }} />
                      <div className="card-body" style={{ width: "60%" }}>
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
