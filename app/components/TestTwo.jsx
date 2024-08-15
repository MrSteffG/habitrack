"use client";

import React, { useState } from "react";
import newDateArr from "./helperFunctions";

const TestTwo = () => {
  const [newHabitArr, setNewHabitArr] = useState([
    {
      id: 1,
      name: "Test1",
      dates: [{ date: 14, done: true }],
    },
  ]);

  const getDates = () => {
    console.log(newDateArr());
    setNewHabitArr({ date: newDateArr() });
    console.log(newHabitArr);
  };

  const showStuff = async () => {
    const newHabitArr = await getDates();
    newHabitArr.map((habit) => {
      return (
        <div key={habit.id} className="flex flex-col gap-5">
          {habit.name}
          {habit.dates.map((date) => (
            <div key={date.date}>{date.date} </div>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col">
      TestTwo
      {showStuff}
      <button onClick={() => getDates()}>Log new date arr</button>
    </div>
  );
};

export default TestTwo;
