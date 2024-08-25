"use client";

import React, { useEffect, useState } from "react";
import dateArr, { datesSinceAugust } from "./dateArr";
import { newCompletedArr } from "./data";

const Test = () => {
  const dates = datesSinceAugust();

  const [completed, setCompleted] = useState(newCompletedArr);

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

  //toggles done value in completed array item to the opposite boolean
  const toggleCompletedOff = ({ idToUpdate, newData }) => {
    setCompleted(
      completed.map(({ id, completionDay, habitId, done }) =>
        id === idToUpdate
          ? { id, done: newData, completionDay, habitId }
          : { id, done, completionDay, habitId },
      ),
    );
  };

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

  //Todo
  // Add toggle square functionality

  return (
    <div className="flex w-2/3 gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white">
      <div className="flex">
        <div className="flex flex-col gap-5">
          <div className="flex h-10 items-center">{/* Spacer */}</div>
          {showHabits}
        </div>
      </div>
      <div className="flex overflow-auto">
        <div className="flex flex-col gap-5">
          <div className="flex w-full gap-1">{showDates}</div>
          {showSquares}
        </div>
      </div>
    </div>
  );
};

export default Test;
