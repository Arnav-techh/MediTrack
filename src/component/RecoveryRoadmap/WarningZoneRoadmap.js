import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const dailyHabits = [
  "💤 8 hours of sleep",
  "💧 Drink 8 glasses of water",
  "🍎 Eat a balanced meal",
  "🚶‍♂️ 30 min physical activity",
  "🧘‍♂️ 10 min meditation",
];

const roadmap = [
  { day: 1, task: "🧠 Understand addiction: Read how it affects your body & mind" },
  { day: 2, task: "🚶 Start morning walks to refresh your mind" },
  { day: 3, task: "📔 Journal your thoughts & cravings" },
  { day: 4, task: "🍵 Reduce caffeine & sugar intake" },
  { day: 5, task: "🎧 Listen to calming music before bed" },
  { day: 6, task: "💡 Identify your biggest triggers & avoid them" },
  { day: 7, task: "📝 Set a small goal for the week & track it" },
  { day: 8, task: "🎥 Watch a motivational recovery story" },
  { day: 9, task: "🏋️ Try a new physical activity like yoga" },
  { day: 10, task: "🌳 Spend 30 min outdoors daily" },
  { day: 11, task: "🚫 Reduce screen time before sleeping" },
  { day: 12, task: "📚 Read success stories of former addicts" },
  { day: 13, task: "🏆 Reward yourself for completing weekly tasks" },
  { day: 14, task: "💬 Talk to a supportive friend or mentor" },
  { day: 15, task: "🎨 Try a new creative hobby (art, writing, music)" },
  { day: 16, task: "📅 Plan a weekly routine & follow it strictly" },
  { day: 17, task: "🍏 Maintain a healthy diet & avoid junk food" },
  { day: 18, task: "🛌 Follow a strict bedtime routine" },
  { day: 19, task: "🎭 Attend a community support group or webinar" },
  { day: 20, task: "📝 Write a letter to your future self" },
  { day: 21, task: "🎉 Celebrate your progress & plan for the future" },
];

const WarningZoneRoadmap = () => {
  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("trackerData")) || { daily: [], roadmap: [], lastReset: new Date().toISOString().split("T")[0] }
  );

  // Function to check and reset daily tasks
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    if (completed.lastReset !== today) {
      setCompleted({
        ...completed,
        daily: [], // Reset only daily habits
        lastReset: today, // Update reset date
      });
    }

    localStorage.setItem("trackerData", JSON.stringify(completed));
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
    <div className="container mt-4 p-4 bg-light rounded shadow">
      <h2 className="text-center mb-3">🚨 21-Day Recovery Challenge</h2>

      {/* Daily Routine */}
      <h4 className="text-primary">🌟 Daily Essential Habits</h4>
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
          🎉 Great Job! You completed today's habits. Keep going strong! 💪 <br />
          ✅ Daily tasks will reset at midnight.
        </div>
      )}

      {/* 21-Day Recovery Challenge */}
      <h4 className="text-danger mt-4">🔄 Day-by-Day Recovery Plan</h4>
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
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${overallProgress}%` }}
        >
          {Math.round(overallProgress)}%
        </div>
      </div>

      {/* Motivational Message for Overall Completion */}
      {overallProgress === 100 && (
        <div className="alert alert-success text-center mt-3">
          🎉 Congratulations! You've completed the 21-Day Challenge! Stay strong and keep moving forward. 💪
        </div>
      )}
    </div>
  );
};



export default WarningZoneRoadmap;
