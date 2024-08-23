"use client";

import React, { useState } from "react";

const NewHabits = () => {
  const [habitsArr, setHabitsArr] = useState([
    {
      id: 0,
      name: "Code every day",
    },
    {
      id: 1,
      name: "Then code some more",
    },
  ]);

  const [dates, setDates] = useState([
    {
      id: 0,
      date: "Fri 23",
      done: true,
    },
    {
      id: 1,
      date: "Fri 23",
      done: false,
    },
  ]);

  return (
    <div className="flex w-1/3 flex-col justify-center rounded-md bg-gradient-to-tr from-blue-400 to-purple-400 p-5 text-white">
      <h3>Hello</h3>
      <div className="flex flex-col">
        {habitsArr.map((habit) => (
          <div key={habit.id} className="flex">
            {habit.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewHabits;
