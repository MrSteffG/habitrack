"use client";

import React, { useEffect, useState } from "react";

const HabitsTest = () => {
  const [habits, setHabits] = useState([
    {
      habitId: 1,
      habit: "Excercise",
    },
    {
      habitId: 2,
      habit: "Excercise Harder",
    },
  ]);

  const [completed, setCompleted] = useState([
    {
      id: 0,
      completionDay: "Mon",
      completionDate: "5",
      habitId: 1,
      done: false,
    },
    {
      id: 1,
      completionDay: "Tue",
      completionDate: "6",
      habitId: 1,
      done: true,
    },
    {
      id: 2,
      completionDay: "Wed",
      completionDate: "7",
      habitId: 1,
      done: false,
    },
    {
      id: 3,
      completionDay: "Thu",
      completionDate: "8",
      habitId: 1,
      done: true,
    },
    {
      id: 4,
      completionDay: "Fri",
      completionDate: "9",
      habitId: 1,
      done: true,
    },
    {
      id: 5,
      completionDay: "Sat",
      completionDate: "10",
      habitId: 1,
      done: false,
    },
    {
      id: 6,
      completionDay: "Sun",
      completionDate: "11",
      habitId: 1,
      done: true,
    },
    {
      id: 7,
      completionDay: "Mon",
      completionDate: "12",
      habitId: 1,
      done: false,
    },
    {
      id: 8,
      completionDay: "Tue",
      completionDate: "13",
      habitId: 1,
      done: true,
    },
    {
      id: 9,
      completionDay: "Tue",
      completionDate: "13",
      habitId: 2,
      done: true,
    },
  ]);

  const showSquares = (habit) =>
    completed.map((item) => {
      if (habit.habitId === item.habitId) {
        if (item.done === true) {
          return (
            <div
              onClick={() =>
                toggleCompleted({ idToUpdate: item.id, newData: !item.done })
              }
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-200"
              key={item.id}
            ></div>
          );
        } else if (item.done === false) {
          return (
            <div
              onClick={() =>
                toggleCompleted({ idToUpdate: item.id, newData: !item.done })
              }
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-100 bg-opacity-20"
              key={item.id}
            ></div>
          );
        }
      } else {
        return;
      }
    });

  const showHabits = habits.map((habit) => (
    <div className="flex h-10 items-center" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  const showHabitDates = completed.map((item) => (
    <div className="flex h-10 w-10 items-center justify-center" key={item.id}>
      {item.completionDay}
    </div>
  ));

  const showHabitSquares = habits.map((habit) => (
    <div className="flex h-10 items-center" key={habit.habitId}>
      <div className="flex gap-1">{showSquares(habit)}</div>
    </div>
  ));

  return (
    <div className="flex w-1/3 gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white">
      <div className="flex">
        <div className="flex flex-col gap-5">
          <div className="flex h-10">{/* Blank area */}</div>
          {showHabits}
        </div>
      </div>
      <div className="flex overflow-auto">
        <div className="flex flex-col gap-5">
          <div className="flex gap-1">{showHabitDates}</div>
          <div className="flex">{showHabitSquares}</div>
        </div>
      </div>
    </div>
  );
};

export default HabitsTest;
