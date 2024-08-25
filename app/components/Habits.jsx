"use client";

import React, { useState } from "react";
import datesSinceAugust from "./dateArr";
import { completedArr } from "./data";

const Habits = () => {
  //Use State variables
  const dates = datesSinceAugust();
  const [completed, setCompleted] = useState(completedArr);
  const [habits, setHabits] = useState([
    {
      habitId: 0,
      habit: "Test1",
    },
    {
      habitId: 1,
      habit: "test2",
    },
    {
      habitId: 2,
      habit: "test3",
    },
  ]);

  //Shows the habits in Habits Array
  const showHabits = habits.map((habit) => (
    <div className="flex h-10 items-center" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  //Shows the dates at the top from august to now
  const showDates = dates.map((date) => (
    <div
      key={date}
      className="flex h-10 w-10 flex-col items-center justify-center text-sm"
    >
      <div>{date.substring(0, 3)}</div>
      <div>{date.substring(8, 10)}</div>
    </div>
  ));

  //For each habit, maps through the dates since august to display the squares and for each date that is the same as a completed item,
  //checks the done value to determine square properties.
  const showSquares = habits.map((habit) => (
    <div className="flex h-10 w-full items-center gap-1" key={habit.habitId}>
      {dates.map((date) => {
        for (let i = 0; i < completed.length; i++) {
          if (
            (completed[i].completionDay === date) &
            (completed[i].habitId === habit.habitId) &
            completed[i].done
          ) {
            return (
              <div
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-200"
                onClick={() =>
                  toggleCompletedOff({
                    idToUpdate: completed[i].id,
                    newData: !completed[i].done,
                  })
                }
                key={date}
              ></div>
            );
          }
        }
        return (
          <div
            key={date}
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-100 bg-opacity-20"
            onClick={() =>
              toggleCompletedOn({
                idToUpdate: Date.now(),
                newData: true,
                day: date,
                habit: habit.habitId,
              })
            }
          ></div>
        );
      })}
    </div>
  ));

  //toggles done values in completed array item to the opposite boolean
  const toggleCompletedOff = ({ idToUpdate, newData }) => {
    setCompleted(
      completed.map(({ id, completionDay, habitId, done }) =>
        id === idToUpdate
          ? { id, done: newData, completionDay, habitId }
          : { id, done, completionDay, habitId },
      ),
    );
  };

  // Adds a new completed array object with new values & done as true
  const toggleCompletedOn = ({ idToUpdate, newData, day, habit }) => {
    setCompleted([
      ...completed,
      {
        id: idToUpdate,
        done: newData,
        completionDay: day,
        habitId: habit,
      },
    ]);
  };

  //Adds new habit item to habits array
  const AddHabit = () => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        setHabits([...habits, { id: Date.now(), habit: e.target.value }]);
      }
    };

    return (
      <input
        type="text"
        className="flex h-10 bg-slate-50 bg-opacity-20 p-2 text-sm placeholder:text-white placeholder:opacity-50"
        onKeyDown={handleKeyDown}
        placeholder="Add habits here"
      />
    );
  };

  //Todo
  //Add habit function
  //Delete habit

  return (
    <div className="flex w-1/3 gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white">
      <div className="flex">
        <div className="flex flex-col gap-5">
          <div className="flex h-10 items-center">{/* Spacer */}</div>
          {showHabits}
          <AddHabit />
        </div>
      </div>
      <div className="flex flex-row-reverse overflow-auto">
        <div className="flex flex-col gap-5">
          <div className="flex w-full gap-1">{showDates}</div>
          {showSquares}
        </div>
      </div>
    </div>
  );
};

export default Habits;
