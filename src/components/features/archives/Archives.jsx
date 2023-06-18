/* eslint-disable */

import { useNavigate } from "react-router";

import "./Archives.css";
import { useHabitTracker } from "../../../core/contexts/HabitTrackerContext";

const Archives = () => {
  const { archivedHabits, deleteArchivedHabit } = useHabitTracker();
  const navigate = useNavigate();

  return (
    <div className="archived-habits-container">
      <div className="habits-container-flex">
        {archivedHabits.length > 0 &&
          archivedHabits.map((habit, index) => (
            <div className="habit-card" key={habit.id}>
              <img
                className="habit-image"
                src={habit.img + (index + 1)}
                alt={habit.name}
              />
              <h4>{habit.name}</h4>
              <button
                className="habit-action-btn"
                onClick={() => deleteArchivedHabit(habit.id)}
              >
                Remove
              </button>
            </div>
          ))}
        {archivedHabits.length < 1 && <h2>No archived habits found.</h2>}
      </div>
      <button className="go-back-btn" onClick={() => navigate("/")}>
        ⬅️Back to Habits
      </button>
    </div>
  );
};

export default Archives;
