
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";

// import RehabCenters from "./component/Rehabcenters";
// import MapComponent from "./component/Mapcomponent";
import ArticleCard from "./component/ArticleCard";
import HeroSection from "./component/HeroSection/Hero";
import Products from "./component/ProductsTab/Products";
import Footer from "./component/Footer";
import FindRehab from "./component/RehabCenters/RehaCenters";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import AboutUs from "./component/AboutsUS/AboutUs";
import DrugType from "./component/DrugsType/DrugType";
import ConsultationSection from "./component/Consultation/ConsultationSection";
import ContactUs from "./component/ContactUs";
import FAQ from "./component/FAQ";
import QuizApp from "./component/Quize App/QuizeApp";
import DrugAwarencess from "./component/DrugAwarencess";
import SafeZoneRoadmap from "./component/RecoveryRoadmap/SafeZoneRoadmap";
import DangerZoneRoadmap from "./component/RecoveryRoadmap/DangerZoneRoadmap";
const App = () => {
  
 

  return (
    <div>

<Router>
<Navbar/>

  <Routes>
    
  <Route path="/" element={<><HeroSection /><AboutUs/><Products /><ArticleCard /> <FAQ/> </>} />
<Route path = "/rehabcenters" element={<FindRehab/>} />
<Route path = "/about" element=  {<><AboutUs/></>}/>
<Route path = "/typesofDrug" element = {<DrugType/>}/>
<Route path = "/get-help" element = {<ConsultationSection/>}/>
<Route path = "/contact" element = {<ContactUs/>}/>
<Route path = "/quize" element = {<QuizApp/>}/>
<Route path = "/drug_awareness" element = {<DrugAwarencess/>}/>



  </Routes>
  <Footer/>
</Router>





{/* <RehabCenters/>
<MapComponent/> */}

    </div>
  );
};

export default App;
