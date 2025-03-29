import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const dailyHabits = [
  "💤 8 hours of sleep",
  "💧 Drink 10 glasses of water",
  "🍎 Eat nutrient-rich meals",
  "🚶‍♂️ 45 min physical activity",
  "🧘‍♂️ 15 min meditation & breathing",
  "📝 Journal thoughts & triggers",
  "📞 Check-in with a mentor/support group",
];

const roadmap = [
  { day: 1, task: "📅 Commit to the 21-day challenge & set your goals" },
  { day: 2, task: "🏥 Seek professional guidance or rehab if necessary" },
  { day: 3, task: "🚫 Identify and remove all substances from your environment" },
  { day: 4, task: "🧠 Learn about addiction & withdrawal symptoms" },
  { day: 5, task: "💬 Talk to a trusted friend or family member for support" },
  { day: 6, task: "📔 Write down why you want to quit and read it daily" },
  { day: 7, task: "🏃 Engage in intense physical activity (cycling, gym, etc.)" },
  { day: 8, task: "🎧 Listen to motivational recovery podcasts/videos" },
  { day: 9, task: "🍏 Follow a strict detox diet to cleanse your body" },
  { day: 10, task: "📅 Create a structured daily routine & follow it" },
  { day: 11, task: "🚫 Avoid places or people that trigger cravings" },
  { day: 12, task: "🛌 Follow a strict bedtime routine to improve sleep" },
  { day: 13, task: "🎨 Engage in a new hobby (music, art, writing, etc.)" },
  { day: 14, task: "📖 Read inspiring recovery stories & success journeys" },
  { day: 15, task: "🏆 Reward yourself for completing 2 weeks!" },
  { day: 16, task: "📅 Attend a group therapy or addiction meeting" },
  { day: 17, task: "🚶 Spend time in nature for mental clarity" },
  { day: 18, task: "📞 Call a support helpline if you feel triggered" },
  { day: 19, task: "💡 Set a 6-month recovery goal and plan for it" },
  { day: 20, task: "🏅 Celebrate your progress & inspire others!" },
  { day: 21, task: "🎉 Create a relapse prevention plan & commit to long-term recovery" },
];

const DangerZoneRoadmap = () => {
  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("dangerZoneTracker")) || { daily: [], roadmap: [], lastReset: new Date().toISOString().split("T")[0] }
  );

  // Function to reset daily tasks every 24 hours
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    if (completed.lastReset !== today) {
      setCompleted({
        ...completed,
        daily: [],
        lastReset: today,
      });
    }

    localStorage.setItem("dangerZoneTracker", JSON.stringify(completed));
  }, [completed]);

  const toggleCheckbox = (type, index) => {
    const updatedCompleted = { ...completed };
    updatedCompleted[type][index] = !updatedCompleted[type][index];
    setCompleted(updatedCompleted);
  };

  const dailyProgress = (completed.daily.filter(Boolean).length / dailyHabits.length) * 100;
  const overallProgress =
    ((completed.daily.filter(Boolean).length + completed.roadmap.filter(Boolean).length) /
      (dailyHabits.length + roadmap.length)) *
    100;

  return (
    <div className="container mt-4 p-4 bg-danger-subtle rounded shadow">
      <h2 className="text-center text-danger mb-3">🔥 21-Day Intensive Recovery Challenge</h2>

      {/* Daily Routine */}
      <h4 className="text-dark">🌟 Essential Daily Recovery Habits</h4>
      <ul className="list-group">
        {dailyHabits.map((habit, index) => (
          <li key={index} className="list-group-item d-flex align-items-center">
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={completed.daily[index] || false}
              onChange={() => toggleCheckbox("daily", index)}
            />
            <span className={completed.daily[index] ? "text-decoration-line-through text-muted" : ""}>
              {habit}
            </span>
          </li>
        ))}
      </ul>

      {/* Motivational Message for Daily Completion */}
      {dailyProgress === 100 && (
        <div className="alert alert-success text-center mt-3">
          ✅ Amazing! You've completed today's habits. Keep pushing forward! 💪 <br />
          🔄 Your tasks will reset at midnight.
        </div>
      )}

      {/* 21-Day Recovery Challenge */}
      <h4 className="text-dark mt-4">🚀 Intensive 21-Day Recovery Plan</h4>
      <ul className="list-group">
        {roadmap.map((item, index) => (
          <li key={index} className="list-group-item d-flex align-items-center">
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={completed.roadmap[index] || false}
              onChange={() => toggleCheckbox("roadmap", index)}
            />
            <span className={completed.roadmap[index] ? "text-decoration-line-through text-muted" : ""}>
              <strong>Day {item.day}:</strong> {item.task}
            </span>
          </li>
        ))}
      </ul>

      {/* Progress Bar */}
      <div className="progress mt-4">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: `${overallProgress}%` }}
        >
          {Math.round(overallProgress)}%
        </div>
      </div>

      {/* Motivational Message for Overall Completion */}
      {overallProgress === 100 && (
        <div className="alert alert-success text-center mt-3">
          🎉 You made it! You've completed the 21-Day Recovery Challenge! Keep staying strong and inspiring others! 💪
        </div>
      )}
    </div>
  );
};

export default DangerZoneRoadmap;
