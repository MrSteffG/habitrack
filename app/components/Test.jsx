"use client";

import React, { useEffect, useState } from "react";
import dateArr, { datesSinceAugust } from "./dateArr";
import completedArr from "./data";

const Test = () => {
  const dates = datesSinceAugust();

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

  //Shows the habits in Habits Array
  const showHabits = habits.map((habit) => (
    <div className="flex h-10 items-center" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  const showDates = dates.map((date) => (
    <div key={date} className="flex h-10 items-center">
      {date.substring(8, 10)}
    </div>
  ));

  //Todo
  //* Sort out spacing issue
  //* Print out the squares, map over the habits, for each habit map through the dates & display a square.
  //* To check completed map through the completed arr, if the dates match and then the habit id, and done is set to true, return a coloured square.
  return (
    <div className="flex w-2/3 gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white">
      <div className="flex">
        <div className="flex flex-col gap-5">
          <div className="flex h-10">spacer</div>
          {showHabits}
        </div>
      </div>
      <div className="flex gap-5 overflow-auto">{showDates}</div>
    </div>
  );
};

export default Test;
