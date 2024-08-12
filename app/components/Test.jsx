"use client";
import React, { useState } from "react";

const Test = () => {
  const [habits, sethabits] = useState([
    {
      habitId: 0,
      habit: "habit1",
    },
    {
      habitId: 1,
      habit: "habit2",
    },
    {
      habitId: 2,
      habit: "habit3",
    },
  ]);

  const [completedHabits, setCompletedHabits] = useState([
    { id: 0, habitId: 0, completed: false },
    { id: 1, habitId: 0, completed: true },
    { id: 2, habitId: 1, completed: false },
    { id: 3, habitId: 2, completed: true },
  ]);

  const [items, setItems] = useState([
    { id: 0, data: "a", completed: false },
    { id: 1, data: "b", completed: false },
    { id: 2, data: "d", completed: false },
  ]);

  const updateCompleted = ({ idToUpdate, newData }) => {
    setItems(
      items.map(({ id, completed }) =>
        id === idToUpdate ? { id, completed: newData } : { id, completed },
      ),
    );
  };

  const showCompletedHabits = (habitId) =>
    completedHabits.map((completed) => {
      if (habitId === completed.habitId) {
        if (completed.completed === true) {
          return (
            <div
              className="flex h-10 w-10 bg-green-100"
              key={completed.id}
            ></div>
          );
        } else if (completed.completed === false) {
          return (
            <div className="flex h-10 w-10 bg-red-100" key={completed.id}></div>
          );
        }
      } else {
        return;
      }
    });

  const showFullHabits = habits.map((habit) => (
    <div key={habit.id} className="flex items-center justify-center gap-5">
      {habit.habit}
      {showCompletedHabits(habit.habitId)}
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="mt-10 flex items-center gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex h-10 w-10"
            onClick={() =>
              updateCompleted({ idToUpdate: item.id, newData: !item.completed })
            }
          >
            {item.completed ? (
              <div
                className="flex h-10 w-10 bg-green-200"
                onClick={() =>
                  updateCompleted({
                    idToUpdate: item.id,
                    newData: !item.completed,
                  })
                }
              ></div>
            ) : (
              <div
                className="flex h-10 w-10 bg-red-200"
                onClick={() =>
                  updateCompleted({
                    idToUpdate: item.id,
                    newData: !item.completed,
                  })
                }
              ></div>
            )}
          </div>
        ))}
      </div>
      <div>New function goes here</div>
      {showFullHabits}
    </div>
  );
};

export default Test;
