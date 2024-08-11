"use client";

import React, { useEffect, useState } from "react";

const Habits = () => {
  const [habits, setHabits] = useState([
    {
      habitId: 1,
      habit: "Excercise",
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
  ]);

  const showHabits = habits.map((habit) => (
    <div className="flex h-10 items-center" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  const [items, setItems] = useState([
    { id: 0, data: "a" },
    { id: 1, data: "b" },
    { id: 2, data: "d" },
  ]);

  const toggleCompleted = ({ idToUpdate, newData }) => {
    setCompleted(
      completed.map(({ id, done, completionDate, completionDay }) =>
        id === idToUpdate
          ? { id, done: newData, completionDate, completionDay }
          : { id, done, completionDate, completionDay },
      ),
    );
  };

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
        {item.done ? (
          <div
            onClick={() =>
              toggleCompleted({ idToUpdate: item.id, newData: !item.done })
            }
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-200 text-black"
          ></div>
        ) : (
          <div
            onClick={() =>
              toggleCompleted({ idToUpdate: item.id, newData: !item.done })
            }
            className="flex h-10 w-10 items-center justify-center rounded-sm text-black"
          ></div>
        )}
      </div>
    </div>
  ));

  return (
    <div className="flex w-2/5 gap-5 rounded-lg bg-purple-400 bg-opacity-50 bg-gradient-to-r from-blue-400 p-3 font-semibold text-white">
      <div className="flex flex-col justify-end gap-1">{showHabits}</div>

      <div className="flex gap-1 overflow-auto">{showSquares}</div>
    </div>
  );
};

export default Habits;
