"use client";

import React, { useState } from "react";

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
      completionDay: "Mon",
      completionDate: "5",
      Excercise: true,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      completionDay: "Tue",
      completionDate: "6",
      Excercise: false,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      completionDay: "Wed",
      completionDate: "7",
      Excercise: false,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      completionDay: "Thu",
      completionDate: "8",
      Excercise: true,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      completionDay: "Fri",
      completionDate: "9",
      Excercise: true,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      completionDay: "Sat",
      completionDate: "10",
      Excercise: true,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      completionDay: "Sun",
      completionDate: "11",
      Excercise: true,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      completionDay: "Mon",
      completionDate: "12",
      Excercise: true,
      LearnCoding: true,
      AvoidChocolate: true,
    },
    {
      completionDay: "Tue",
      completionDate: "13",
      Excercise: true,
      LearnCoding: true,
      AvoidChocolate: true,
    },
  ]);

  const showHabits = habits.map((habit) => (
    <div className="flex h-10 items-center" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  const showSquares = completed.map((item) => (
    <div className="flex flex-col gap-5" key={item.completionDate}>
      <div
        className="flex h-10 w-10 flex-col items-center"
        key={item.completionDate}
      >
        <div>{item.completionDay}</div>
        {item.completionDate}
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        {item.Excercise ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-100 text-black hover:bg-red-50"></div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-sm text-black hover:bg-green-50"></div>
        )}
        {item.LearnCoding ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-100 text-black hover:bg-red-50"></div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-sm text-black hover:bg-green-50"></div>
        )}
        {item.AvoidChocolate ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-100 text-black hover:bg-red-50"></div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-sm text-black hover:bg-green-50"></div>
        )}
      </div>
    </div>
  ));

  return (
    <div className="flex w-1/3 rounded-lg bg-purple-400 bg-opacity-50 bg-gradient-to-r from-blue-400 p-3 font-semibold text-white">
      <div className="flex flex-col justify-end gap-1">{showHabits}</div>

      <div className="flex gap-1 overflow-auto">{showSquares}</div>
    </div>
  );
};

export default Habits;
