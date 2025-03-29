import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const dailyHabits = [
  "💤 8 hours of sleep",
  "💧 Drink 10 glasses of water",
  "🍎 Eat nutrient-rich meals",
  "🚶‍♂️ 30 min physical activity",
  "🧘‍♂️ 10 min meditation & breathing",
  "📝 Journal thoughts & gratitude",
  "📞 Check-in with a mentor/friend",
];

const SafeZoneRoadmap = () => {
  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("safeZoneTracker")) || { daily: [], lastReset: new Date().toISOString().split("T")[0] }
  );

  // Function to reset daily tasks every 24 hours
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    if (completed.lastReset !== today) {
      setCompleted({
        daily: [],
        lastReset: today,
      });
    }

    localStorage.setItem("safeZoneTracker", JSON.stringify(completed));
  }, [completed]);

  const toggleCheckbox = (index) => {
    const updatedCompleted = { ...completed };
    updatedCompleted.daily[index] = !updatedCompleted.daily[index];
    setCompleted(updatedCompleted);
  };

  const dailyProgress = (completed.daily.filter(Boolean).length / dailyHabits.length) * 100;

  return (
    <div className="container mt-4 p-4 bg-success-subtle rounded shadow">
      <h2 className="text-center text-success mb-3">🟢 21-Day Safe Zone Recovery Tracker</h2>

      {/* Daily Routine */}
      <h4 className="text-dark">🌟 Essential Daily Recovery Habits</h4>
      <ul className="list-group">
        {dailyHabits.map((habit, index) => (
          <li key={index} className="list-group-item d-flex align-items-center">
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={completed.daily[index] || false}
              onChange={() => toggleCheckbox(index)}
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
          ✅ Great job! You've completed today's healthy habits. Stay consistent! 💪 <br />
          🔄 Your tasks will reset at midnight.
        </div>
      )}

      {/* Progress Bar */}
      <div className="progress mt-4">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${dailyProgress}%` }}
        >
          {Math.round(dailyProgress)}%
        </div>
      </div>
    </div>
  );
};

export default SafeZoneRoadmap;
