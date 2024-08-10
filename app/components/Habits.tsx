"use client";

import React, { useState } from "react";
import strongData from "./strongData.json";

const exampleDates = [
  { day: "Mon", date: 5 },
  { day: "Tue", date: 6 },
  { day: "Wed", date: 7 },
  { day: "Thu", date: 8 },
  { day: "Fri", date: 9 },
  { day: "Sat", date: 10 },
  { day: "Sun", date: 11 },
];

const exampleHabits = ["Excercise", "Learn coding", "avoid chocolate"];
const exampleSquares = [true, false, false, true, true, true, true];

const habitCompletion = {};

const showDates = exampleDates.map((dateObj) => (
  <div className="flex h-10 w-10 flex-col" key={dateObj.date}>
    <div>{dateObj.day}</div>
    {dateObj.date}
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
      habitID: 1,
      completionDay: "Mon",
      completionDate: "5",
      Excercise: true,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      habitID: 1,
      completionDay: "Tue",
      completionDate: "6",
      Excercise: false,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      habitID: 1,
      completionDay: "Wed",
      completionDate: "7",
      Excercise: false,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      habitID: 1,
      completionDay: "Thu",
      completionDate: "8",
      Excercise: false,
      LearnCoding: true,
      AvoidChocolate: true,
    },
  ]);

  const showSquares = completed.map((item) => (
    <div className="flex flex-col gap-5" key={item.completionDate}>
      <div className="flex h-10 w-10 flex-col" key={item.completionDate}>
        <div>{item.completionDay}</div>
        {item.completionDate}
      </div>

      <div className="flex items-center justify-center">
        {item.Excercise ? (
          <div className="h-10 w-10 items-center justify-center bg-green-100 text-black">
            {item.Excercise.toString()}
          </div>
        ) : (
          <div className="h-10 w-10 items-center justify-center bg-red-100 text-black">
            {item.Excercise.toString()}
          </div>
        )}
      </div>
    </div>
  ));

  const showHabits = habits.map((habit) => (
    <div className="" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  return (
    <div className="flex w-2/3 rounded-lg bg-purple-400 bg-opacity-50 bg-gradient-to-r from-blue-400 p-3 font-semibold text-white">
      <div className="to flex flex-col justify-evenly">{showHabits}</div>

      <div className="flex justify-evenly">{showSquares}</div>
    </div>
  );
};

export default Habits;
