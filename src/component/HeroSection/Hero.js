import { Carousel } from 'react-bootstrap';
import "./Herosection.css";
import { useState, useEffect } from "react";

import { FaHeartbeat, FaHospitalAlt, FaUsers, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

const stats = [
  { icon: <FaHeartbeat size={30} />, label: "Lives Changed", start: 4800, end: 5000 },
  { icon: <FaHospitalAlt size={30} />, label: "Rehab Centers", start: 180, end: 200 },
  { icon: <FaUsers size={30} />, label: "Support Community", start: 9500, end: 10000 },
  { icon: <FaPhone size={30} />, label: "Helpline Assistance", start: 48000, end: 50000 },
];

export default function HeroSection() {
  // Counter
const CounterCard = ({ icon, label, start, end }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => (prev < end ? prev + 1 : end));
    }, 20); // Adjust speed

    return () => clearInterval(interval);
  }, [end]);

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-4 w-60 h-40 text-center">
      <div className="text-teal-600" style={{color: "#00a8a8"}}>{icon}</div>
      <h2 className="text-2xl font-bold">{count.toLocaleString()}</h2>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

  const texts = [
    "Prevention starts with awareness—say no to drugs, say yes to life.",
"Your future is too valuable to be lost to addiction. Stay strong, stay drug-free.",
"One choice can change your life—choose health, not addiction."
  ];

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const nextIndex = (texts.indexOf(prevText) + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="box">
      <video autoPlay loop muted>
        <source src="/images/background.mp4" type="video/mp4" />
      </video>
      <div className="boxBlur">
        <h1>Drug Awareness & Addiction Prevention</h1>
        <h3>{currentText}</h3>
        <Link to ="/quize"><button className='btn' style={{backgroundColor:"#FF4C4C", color:"#fff", border:"none"}} >Safe or Risk? Drug Awareness Test</button></Link>
      </div>
    </section>

    {/* ..........counter Card.......... */}
    <div className="container mx-auto">
  <div className="stats-grid">
    {stats.map((stat, index) => (
      <div key={index} className="counter-card">
        <CounterCard {...stat} />
      </div>
    ))}
  </div>

  {/* drug awrencess */}
  <div className="position-relative text-center text-white" style={{ 
  background: 'url("/images/drugsss.png.webp") center/cover', 
  height: '400px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  position: 'relative'
}}>
  <div className="overlay" style={{
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }}></div>

  <div className="container position-relative">
    <h1 className="fw-bold">Understanding Drug Awareness: A Step Towards a Healthier Life</h1>
    <p className="mt-3">Drug awareness helps prevent addiction and promotes healthier choices. Stay informed, stay strong, and support those in need.</p>

    <div className="mt-4">
      {/* <button className="btn common-btn me-3">Learn More</button> */}
    <Link to = "/quize"> <button className="btn"  style={{backgroundColor:"#FF4C4C", color:"#fff", border:"none"}}>Take the Quiz</button></Link> 
    </div>
  </div>
</div>

</div>

    
    
    </>
  
  );
}
