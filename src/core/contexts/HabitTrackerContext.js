/* eslint-disable */

import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

import { habitsTrackerReducer } from "../reducers/HabitTrackerReducer";
import { habitsTrackerReducerInitialState } from "../reducers/HabitTrackerReducerInitialState";

export const HabitTrackerContext = createContext();

export const HabitTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    habitsTrackerReducer,
    habitsTrackerReducerInitialState
  );

  const addNewHabit = (habit) => {
    dispatch({ type: "ADD_NEW_HABIT", payload: habit });
    toast.success("New habit added.");
  };

  const updateHabitDetails = (updatedHabit) => {
    const newHabitDetails = state.habitsData.map((habit) =>
      habit.id === updatedHabit.id ? { ...habit, ...updatedHabit } : habit
    );
    dispatch({
      type: "UPDATE_HABIT_DETAILS",
      payload: newHabitDetails,
    });
    toast.success("Habit updated!");
  };

  const deleteHabit = (habitID) => {
    const newHabitDetails = state.habitsData.filter(
      (habit) => habit.id !== habitID
    );
    dispatch({
      type: "UPDATE_HABIT_DETAILS",
      payload: newHabitDetails,
    });
    toast.success("Habit deleted!");
  };

  const addArchivedHabit = (archivedHabit) => {
    dispatch({
      type: "ADD_NEW_ARCHIVED_HABIT",
      payload: archivedHabit,
    });
    deleteHabit(archivedHabit.id);
  };

  const deleteArchivedHabit = (habitID) => {
    const newHabitDetails = state.archivedHabits.filter(
      (habit) => habit.id !== habitID
    );
    dispatch({
      type: "UPDATE_ARCHIVED_HABIT_DETAILS",
      payload: newHabitDetails,
    });
    toast.success("Archived Habit deleted!");
  };

  return (
    <HabitTrackerContext.Provider
      value={{
        ...state,
        dispatch,
        addNewHabit,
        updateHabitDetails,
        deleteHabit,
        addArchivedHabit,
        deleteArchivedHabit,
      }}
    >
      {children}
    </HabitTrackerContext.Provider>
  );
};

export const useHabitTracker = () => useContext(HabitTrackerContext);
