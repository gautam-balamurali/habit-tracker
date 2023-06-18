/* eslint-disable */

import { FaPlus } from "react-icons/fa";
import { v4 as uuid } from "uuid";

import { useHabitTracker } from "../../../core/contexts/HabitTrackerContext";
import "./Home.css";
import CustomModal from "../../shared/custom-modal-component/CustomModal";
import { useState } from "react";

const Home = () => {
  const {
    habitsData,
    addNewHabit,
    updateHabitDetails,
    deleteHabit,
    addArchivedHabit,
    archivedHabits,
  } = useHabitTracker();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditFormEnabled, setEditFormEnabled] = useState(false);

  const [currentHabitFormFields, setCurrentHabitFormFields] = useState({
    id: uuid(),
    name: "",
    img: "https://picsum.photos/208/320?random=",
    repeat: "",
    goal: "",
    timeOfDay: "",
    startDate: "",
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setEditFormEnabled(false);
    setCurrentHabitFormFields((prev) => ({
      ...prev,
      id: uuid(),
      name: "",
      img: "https://picsum.photos/208/320?random=",
      repeat: "",
      goal: "",
      timeOfDay: "",
      startDate: "",
    }));
  };

  const currentHabitsFormFieldsChangeHandler = (event) => {
    const { name, value } = event.target;
    setCurrentHabitFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const editButtonClickHandler = (habitId) => {
    setEditFormEnabled(true);
    const habitToBeUpdated = habitsData.find((habit) => habit.id === habitId);
    setCurrentHabitFormFields((prev) => ({ ...prev, ...habitToBeUpdated }));
    handleOpenModal();
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
    isEditFormEnabled
      ? updateHabitDetails(currentHabitFormFields)
      : addNewHabit(currentHabitFormFields);
    handleCloseModal();
  };

  // Generate goal options based on frequency
  const generateGoalOptions = () => {
    if (currentHabitFormFields.repeat === "Daily") {
      return (
        <>
          <option value="1 time Daily">1 time Daily</option>
          <option value="2 times Daily">2 times Daily</option>
          <option value="3 times Daily">3 times Daily</option>
        </>
      );
    } else if (currentHabitFormFields.repeat === "Weekly") {
      return (
        <>
          <option value="1 time Weekly">1 time Weekly</option>
          <option value="2 times Weekly">2 times Weekly</option>
          <option value="3 times Weekly">3 times Weekly</option>
        </>
      );
    } else if (currentHabitFormFields.repeat === "Monthly") {
      return (
        <>
          <option value="1 time Monthly">1 time Monthly</option>
          <option value="2 times Monthly">2 times Monthly</option>
          <option value="3 times Monthly">3 times Monthly</option>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      className={`${
        habitsData.length > 0
          ? "habits-container-flex"
          : "habits-container-column"
      }`}
    >
      <button onClick={handleOpenModal} className="habit-card">
        <FaPlus /> Create My Own
      </button>
      {habitsData.length > 0 &&
        habitsData.map((habit, index) => (
          <div className="habit-card" key={habit.id}>
            <img
              className="habit-image"
              src={habit.img + (index + 1)}
              alt={habit.name}
            />
            <h4>{habit.name}</h4>
            <div className="habit-configuration-btns">
              <button
                className="habit-action-btn"
                onClick={() => editButtonClickHandler(habit.id)}
              >
                Update
              </button>
              <button
                className="habit-action-btn"
                onClick={() => deleteHabit(habit.id)}
              >
                Remove
              </button>
              <button
                className="habit-action-btn"
                onClick={() => addArchivedHabit(habit)}
              >
                Archive
              </button>
            </div>
          </div>
        ))}
      {habitsData.length < 1 && <h2>Add some habits.</h2>}

      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{isEditFormEnabled ? "Edit Habit" : "Add a New Habit"}</h2>
        <form onSubmit={submitClickHandler} autoComplete="off">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name={"name"}
            value={currentHabitFormFields.name}
            placeholder="Excercise"
            onChange={currentHabitsFormFieldsChangeHandler}
            required
          />

          <label htmlFor="repeat">Repeat:</label>
          <select
            id="repeat"
            value={currentHabitFormFields.repeat}
            name="repeat"
            onChange={currentHabitsFormFieldsChangeHandler}
            required
          >
            <option value="" disabled>
              Select a value
            </option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>

          <label htmlFor="goal">Goal:</label>
          <select
            id="goal"
            value={currentHabitFormFields.goal}
            name="goal"
            onChange={currentHabitsFormFieldsChangeHandler}
            required
            disabled={!currentHabitFormFields.repeat}
          >
            <option value="" disabled>
              Select a goal
            </option>
            {generateGoalOptions()}
          </select>

          <label htmlFor="timeOfDay">Time of Day:</label>
          <select
            id="timeOfDay"
            name="timeOfDay"
            value={currentHabitFormFields.timeOfDay}
            onChange={currentHabitsFormFieldsChangeHandler}
            required
          >
            <option value="" disabled>
              Select a time of day
            </option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>

          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={currentHabitFormFields.startDate}
            onChange={currentHabitsFormFieldsChangeHandler}
            required
          />

          <button type="submit" className="form-btn-submit">
            {isEditFormEnabled ? "Update" : "Save"}
          </button>
        </form>
      </CustomModal>
    </div>
  );
};

export default Home;
