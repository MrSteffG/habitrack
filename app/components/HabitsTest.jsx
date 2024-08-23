"use client";

import React, { useEffect, useState } from "react";
import dateArr from "./dateArr";
import { completedArr } from "./data";

const HabitsTest = () => {
  const [habits, setHabits] = useState([
    {
      habitId: 1,
      habit: "Test1",
    },
    {
      habitId: 2,
      habit: "test2",
    },
    {
      habitId: 3,
      habit: "test3",
    },
  ]);

  const [completed, setCompleted] = useState(completedArr);

  const buildHabitArr = (habitId, id) => {
    console.log(dateArr(habitId, id));
    console.log(completed);
    setNewCompletedArr(dateArr(habitId, id));
  };

  //toggles done value in completed array item to the opposite boolean
  const toggleCompleted = ({ idToUpdate, newData }) => {
    setCompleted(
      completed.map(({ id, completionDay, completionDate, habitId, done }) =>
        id === idToUpdate
          ? { id, done: newData, completionDate, completionDay, habitId }
          : { id, done, completionDate, completionDay, habitId },
      ),
    );
  };

  //Shows the habits in Habits Array
  const showHabits = habits.map((habit) => (
    <div className="flex h-10 items-center" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  //Displays dates and squares section
  const DatesAndSquares = () => {
    const singleHabitDates = () => {
      const dateSet = new Set();
      for (let i = 0; i < completed.length; i++) {
        if (dateSet.has(completed[i].completionDate)) {
          return Array.from(dateSet);
        }
        dateSet.add(completed[i].completionDate);
      }
    };

    //Display each individual date in completedArr
    const showHabitDates = singleHabitDates().map((date) => {
      return (
        <div className="flex h-10 w-10 items-center justify-center" key={date}>
          <div>{date}</div>
        </div>
      );
    });

    //
    const showSquares = (habit) =>
      completed.map((item) => {
        if (habit.habitId === item.habitId) {
          return (
            <div
              onClick={() =>
                toggleCompleted({ idToUpdate: item.id, newData: !item.done })
              }
              className={`flex h-10 w-10 items-center justify-center rounded-sm ${item.done ? "bg-green-200" : "bg-slate-100 bg-opacity-20"}`}
              key={item.id}
            ></div>
          );
        } else {
          return;
        }
      });

    //For each item in the habits array, display the squares.
    const showHabitSquares = habits.map((habit) => (
      <div className="flex items-start justify-start gap-5" key={habit.habitId}>
        <div className="flex gap-1">{showSquares(habit)}</div>
      </div>
    ));

    return (
      <div className="flex flex-col gap-5">
        <div className="flex gap-1">{showHabitDates}</div>
        <div className="h-full flex-col space-y-5">{showHabitSquares}</div>
      </div>
    );
  };

  const AddHabit = () => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        setHabits([...habits, { habitId: 69, habit: e.target.value }]);
        buildHabitArr(42, 420);
      }
    };

    return (
      <input
        type="text"
        className="flex h-10 bg-slate-50 bg-opacity-20"
        onKeyDown={handleKeyDown}
      />
    );
  };

  return (
    <div className="flex w-2/3 gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white">
      <div className="flex">
        <div className="flex flex-col gap-5">
          <div className="flex h-10">{/* Blank area */}</div>
          {showHabits}
          <AddHabit />
          <button onClick={() => buildHabitArr(31, 56)}>
            Build Habbit Arr
          </button>
        </div>
      </div>

      <DatesAndSquares />
    </div>
  );
};

export default HabitsTest;
