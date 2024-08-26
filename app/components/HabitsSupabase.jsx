"use client";

import React, { useState, useEffect } from "react";
import datesSinceAugust from "./dateArr";
import { completedArr } from "./data";
import supabaseClient from "../../config/supabaseClient";
import {
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
  UserButton,
  useSession,
} from "@clerk/nextjs";

const HabitsSupabase = () => {
  const { getToken } = useAuth();

  //Use State variables
  const { session } = useSession();
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

  useEffect(() => {
    const selectCompleted = async () => {
      try {
        const supabaseAccessToken = await getToken({
          template: "supabase",
        });

        const supabase = await supabaseClient(supabaseAccessToken);
        const { data: completed, error } = await supabase
          .from("completed")
          .select("*");
        console.log(completed);
        setCompleted(completed);
      } catch (error) {
        console.log("Catch statement, something went wrong" + error);
      } finally {
        console.log("Got completed");
      }
    };
    selectCompleted();
  }, []);

  useEffect(() => {
    const selectHabits = async () => {
      try {
        const supabaseAccessToken = await getToken({
          template: "supabase",
        });

        const supabase = await supabaseClient(supabaseAccessToken);
        const { data: habits, error } = await supabase
          .from("habits")
          .select("*");
        console.log(habits);
        setHabits(habits);
      } catch (error) {
        console.log("Catch statement, something went wrong" + error);
      } finally {
        console.log("ho finito");
      }
    };
    selectHabits();
  }, []);

  //Shows the habits in Habits Array
  const showHabits = habits.map((habit) => (
    <div className="flex h-10 items-center" key={habit.habitId}>
      {habit.habit}
    </div>
  ));

  //Shows the dates at the top from august to now
  const showDates = dates.map((date) => (
    <div
      key={date.dateMap}
      className="flex h-10 w-10 flex-col items-center justify-center text-sm"
    >
      <div>{date.dateMap.substring(0, 3)}</div>
      <div>{date.dateMap.substring(5, 7)}</div>
    </div>
  ));

  //For each habit, maps through the dates since august to display the squares and for each date that is the same as a completed item,
  //checks the done value to determine square properties.
  const showSquares = habits.map((habit) => (
    <div className="flex h-10 w-full items-center gap-1" key={habit.habitId}>
      {dates.map((date) => {
        for (let i = 0; i < completed.length; i++) {
          if (
            (completed[i].completionDay === date.dateStr) &
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
                key={date.dateStr}
              ></div>
            );
          }
        }
        return (
          <div
            key={date.dateStr}
            className="flex h-10 w-10 items-center justify-center rounded-sm bg-slate-100 bg-opacity-20"
            onClick={() =>
              toggleCompletedOn({
                idToUpdate: Date.now(),
                newData: true,
                day: date.dateStr,
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
  // const AddHabit = () => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === "Enter") {
  //       setHabits([...habits, { habitId: Date.now(), habit: e.target.value }]);
  //       console.log(completed);
  //       console.log(habits);
  //     }
  //   };

  //   return (
  //     <input
  //       type="text"
  //       className="flex h-10 rounded-md bg-slate-50 bg-opacity-20 p-2 text-sm placeholder:text-white placeholder:opacity-50"
  //       onKeyDown={handleKeyDown}
  //       placeholder="Add habits here"
  //     />
  //   );
  // };

  const AddHabit = () => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        newHabit(e.target.value);
      }
    };

    return (
      <input
        type="text"
        className="flex h-10 rounded-md bg-slate-50 bg-opacity-20 p-2 text-sm placeholder:text-white placeholder:opacity-50"
        onKeyDown={handleKeyDown}
        placeholder="Add habits here"
      />
    );
  };

  const newHabit = async (habit) => {
    const supabaseAccessToken = await session.getToken({
      template: "supabase",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data, error } = await supabase
      .from("habits")
      .insert({ habitId: Date.now(), habit: habit })
      .select();
    if (data) {
      setHabits([...habits, data[0]]);
    }
  };

  // TODO:
  // Delete habit
  // Rename habit
  // Improve responsivity
  // Dark mode
  // Add completed item Supabase
  // Add RLS
  // Habit Dashboard
  // Choose habit colour

  return (
    <div className="flex w-2/3 gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white">
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

export default HabitsSupabase;
