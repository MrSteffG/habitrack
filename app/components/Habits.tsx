"use client";

import React, { useState } from "react";
import strongData from "./strongData.json";

const exampleDates = [0, 1, 2, 3, 4, 5, 6, 7];

const exampleHabits = ["Excercise", "Learn coding", "avoid chocolate"];
const exampleSquares = [true, false, false, true, true, true, true];

const habitCompletion = {};

const showDates = exampleDates.map((date) => (
  <div className="flex h-10 w-10 items-center justify-center" key={date}>
    {date}
  </div>
));

const showSquares = exampleSquares.map((square) => (
  <div
    key={null}
    className="flex h-10 w-10 items-center justify-center bg-green-100"
  >
    {square.toString()}
  </div>
));

const Habits = () => {
  const [habits, setHabits] = useState([
    {
      habitId: 0,
      habit: "Excercise",
    },
    {
      habitId: 1,
      habit: "Learn coding",
    },
    {
      habitId: 2,
      habit: "Avoid Chocolate",
    },
  ]);

  const [completed, setCompleted] = useState([
    {
      completionID: 1,
      habitID: 1,
      completionDate: "9 August 2024",
    },
  ]);

  const showHabits = habits.map((habit) => (
    <div className="" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  return (
    <div className="flex">
      <div className="flex flex-col justify-evenly border">{showHabits}</div>
      <div className="flex flex-col border">
        <div className="flex justify-evenly border text-center">
          {showDates}
        </div>
        <div className="flex justify-evenly border">{showSquares}</div>
        <div className="flex justify-evenly border">{showSquares}</div>
      </div>
    </div>
  );
};

export default Habits;
