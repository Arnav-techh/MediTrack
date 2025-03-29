import React, { useState } from "react";
import "./QuizeApp.css";
import SafeZoneRoadmap from "../RecoveryRoadmap/SafeZoneRoadmap";
import WarningZoneRoadmap from "../RecoveryRoadmap/WarningZoneRoadmap";
import DangerZoneRoadmap from "../RecoveryRoadmap/DangerZoneRoadmap";

const QuizApp = () => {
  const [age, setAge] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [result, setResult] = useState(null);

  // Sample Questions based on Age Group
  const questions = {
    teen: [
      { id: 1, question: "Have you ever felt peer pressure to try drugs?", weight: 2 },
      { id: 2, question: "Do you engage in extracurricular activities?", weight: -1 },
      { id: 3, question: "Do you have friends who use drugs?", weight: 2 },
      { id: 4, question: "Do you often feel stressed and look for relief?", weight: 3 }
    ],
    young: [
      { id: 1, question: "Do you drink or smoke regularly?", weight: 2 },
      { id: 2, question: "Do you have difficulty quitting after trying drugs?", weight: 3 },
      { id: 3, question: "Do you avoid social situations without drugs?", weight: 2 },
      { id: 4, question: "Are you experiencing work or relationship issues due to substance use?", weight: 3 }
    ],
    adult: [
      { id: 1, question: "Do you rely on substances to cope with stress?", weight: 3 },
      { id: 2, question: "Have you tried quitting but failed?", weight: 3 },
      { id: 3, question: "Do you feel withdrawal symptoms?", weight: 3 },
      { id: 4, question: "Do you hide your substance use from family/friends?", weight: 2 }
    ]
  };

  // Roadmap Data
  const roadmapData = {
    teen: {
      "Safe Zone": "Stay engaged in sports and hobbies to avoid peer pressure.",
      "Warning Zone": "Talk to a mentor or school counselor about your feelings.",
      "Danger Zone": "Seek guidance from youth-friendly rehab programs."
    },
    young: {
      "Safe Zone": "Maintain a balanced lifestyle and avoid triggers.",
      "Warning Zone": "Join a support group or career-focused programs.",
      "Danger Zone": "Consider therapy or a professional rehab program."
    },
    adult: {
      "Safe Zone": "Strengthen your financial and social stability.",
      "Warning Zone": "Join a local addiction recovery program.",
      "Danger Zone": "Seek medical and psychological treatment immediately."
    }
  };

  // Get Age Category
  let category = "adult";
  if (age && age <= 19) category = "teen";
  else if (age && age <= 35) category = "young";

  const handleStartQuiz = () => {
    if (!age || age < 13) {
      alert("Please enter a valid age (13+)");
      return;
    }
    setStartQuiz(true);
  };

  const handleAnswerChange = (id, weight) => {
    setQuizAnswers({ ...quizAnswers, [id]: weight });
    
  };

  const calculateResult = () => {
    const totalScore = Object.values(quizAnswers).reduce((a, b) => a + b, 0);

    let finalResult = "Safe Zone";
    if (totalScore >= 4) finalResult = "Warning Zone";
    if (totalScore >= 7) finalResult = "Danger Zone";

    setResult(finalResult);
  };

  return (
    <div className="container" style={{marginTop:"5rem"}}>
    
      {!startQuiz ? (
        <div className="">
            <div className="bg-overlay"></div>
            <div className="text-center">
                <h3 className="common-heading text-white">Test Your Awareness: Are You at Risk?</h3>
                <p className="mt-3 w-75 text-center m-auto text-white" style={{fontSize:"18px"}}>"Are you in control, or is addiction taking over? Take this quick quiz to find out your risk level. Stay aware, stay strong, and take the first step toward a healthier future!</p>
            </div>
        <div className="text-center mt-5 shadow pt-3 pb-3  mb-5 bg-white rounded w-50 m-auto">
          <h3 className="common-heading" style={{fontSize:"20px"}}>Enter Your Age</h3>
          <input
            type="number"
            className="form-control w-50 mx-auto mt-3"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button className="btn common-btn mt-3" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
        </div>
      ) : !result ? (
        <div>
          <div className="common-heading-container">
          <h3 className="text-center common-heading m-auto">Quiz for Age Group: {category.toUpperCase()}</h3>
          </div>
          {questions[category].map((q) => (
            <div key={q.id} className="mb-3 mt-3">
              <p><strong>{q.question}</strong></p>
              <div>
              <button 
  className={`btn me-2 ${quizAnswers[q.id] === 0 ? "btn-success text-white" : "btn-outline-success"}`} 
  onClick={() => handleAnswerChange(q.id, 0)}
>
  No
</button>

<button 
  className={`btn ${quizAnswers[q.id] === q.weight ? "btn-danger text-white" : "btn-outline-danger"}`} 
  onClick={() => handleAnswerChange(q.id, q.weight)}
>
  Yes
</button>
              </div>
            </div>
          ))}
          <button className="btn common-btn mt-3" onClick={calculateResult}>Get Result</button>
        </div>
      ) : (
        <div className="text-center shadow p-3 mb-5 bg-white rounded w-75 m-auto ">
          <h3>Your Result: <span className={` mt-5 text-${result === "Safe Zone" ? "success" : result === "Warning Zone" ? "warning" : "danger"}`}>{result}</span></h3>
          <p style={{fontSize:"15px"}}>{roadmapData[category][result]}</p>
          {
            result==="Safe Zone"? <SafeZoneRoadmap/> : result==="Warning Zone" ? <WarningZoneRoadmap/> : <DangerZoneRoadmap/>
          }
          {/* <button className="btn common-btn mt-3 mb-4" onClick={() => window.location.reload()}>Take Quiz Again</button> */}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
