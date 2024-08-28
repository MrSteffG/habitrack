"use client";

import React, { useState, useEffect } from "react";
import datesSinceAugust from "./dateArr";

import supabaseClient from "../../config/supabaseClient";
import {
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import { MdDeleteOutline } from "react-icons/md";

const Habits = ({
  habits,
  setHabits,
  completed,
  setCompleted,
}: {
  habits: any;
  setHabits: any;
  completed: any;
  setCompleted: any;
}) => {
  //Use State variables
  const { session } = useSession();
  const dates = datesSinceAugust();

  //Shows the habits in Habits Array
  const ShowHabits = () => {
    return habits.map(({ habit, habitId }: { habit: any; habitId: any }) => (
      <div
        id="habit"
        className="group flex h-10 items-center justify-between font-light max-md:text-sm"
        key={habitId}
      >
        {habit}

        <MdDeleteOutline
          className="hidden text-lg opacity-80 transition-all duration-200 hover:scale-125 hover:cursor-pointer hover:opacity-100 group-hover:block max-md:text-sm"
          onClick={() => deleteHabit(habitId)}
        />
      </div>
    ));
  };

  const newHabit = async (habit: any) => {
    const supabaseAccessToken = await session!.getToken({
      template: "supabase",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data, error } = await supabase
      .from("habits")
      .insert({ habitId: Date.now(), habit: habit, user_id: session!.user.id })
      .select();
    if (data) {
      const newHabits: any = [...habits, data[0]];
      setHabits(newHabits);
    }
  };

  const deleteHabit = async (habitId: any) => {
    const supabaseAccessToken = await session!.getToken({
      template: "supabase",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data, error } = await supabase
      .from("habits")
      .delete()
      .eq("habitId", habitId);
    if (error) {
      console.log(error);
    } else {
      setHabits(habits.filter((habit: any) => habit.habitId !== habitId));
    }
  };

  //Shows the dates at the top from august to now
  const ShowDates = () => {
    return dates.map((date) => (
      <div
        key={date.dateMap}
        className="flex h-10 w-10 flex-col items-center justify-center text-sm"
      >
        <div>{date.dateMap.substring(0, 3)}</div>
        <div>{date.dateMap.substring(5, 7)}</div>
      </div>
    ));
  };

  //For each habit, maps through the dates since august to display the squares and for each date that is the same as a completed item,
  //checks the done value to determine square properties.
  const ShowSquares = () => {
    return habits.map(({ habitId }: { habitId: string }) => (
      <div className="flex h-10 w-full items-center gap-1" key={habitId}>
        {dates.map((date) => {
          for (let i = 0; i < completed.length; i++) {
            if (
              completed[i].completionDay === date.dateStr &&
              completed[i].habitId === habitId &&
              completed[i].done
            ) {
              return (
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-green-200 dark:bg-green-400"
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
                  habit: habitId,
                })
              }
            ></div>
          );
        })}
      </div>
    ));
  };

  const toggleCompletedOff = async ({
    idToUpdate,
    newData,
  }: {
    idToUpdate: number;
    newData: boolean;
  }) => {
    const supabaseAccessToken = await session!.getToken({
      template: "supabase",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data, error } = await supabase
      .from("completed")
      .update({ done: newData })
      .eq("id", idToUpdate)
      .select();
    if (data) {
      setCompleted(
        completed.map(
          ({
            id,
            completionDay,
            habitId,
            done,
          }: {
            id: number;
            completionDay: string;
            habitId: number;
            done: boolean;
          }) =>
            id === idToUpdate
              ? { id, done: newData, completionDay, habitId }
              : { id, done, completionDay, habitId },
        ),
      );
    }
  };

  const toggleCompletedOn = async ({
    idToUpdate,
    newData,
    day,
    habit,
  }: {
    idToUpdate: number;
    newData: boolean;
    day: string;
    habit: string;
  }) => {
    const supabaseAccessToken = await session!.getToken({
      template: "supabase",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data, error } = await supabase
      .from("completed")
      .insert({
        id: idToUpdate,
        completionDay: day,
        habitId: habit,
        done: newData,
        user_id: session!.user.id,
      })
      .select();
    if (data) {
      setCompleted([...completed, data[0]]);
    }
  };

  const AddHabit = () => {
    const handleKeyDown = (e: any) => {
      if (e.key === "Enter") {
        newHabit(e.target.value);
      }
    };

    return (
      <input
        type="text"
        className="flex h-10 rounded-md bg-slate-50 bg-opacity-20 p-1 text-sm font-light placeholder:text-white placeholder:opacity-50 max-md:text-xs"
        onKeyDown={handleKeyDown}
        placeholder="Add habits here"
      />
    );
  };

  // TODO:
  // Loading icon
  // Habit Dashboard
  // Choose habit colour
  // Calendar View
  // New favicon

  return (
    <div className="flex w-2/3 gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white dark:from-blue-900 dark:to-purple-900 max-md:w-11/12 max-md:gap-1">
      <div className="flex">
        <div className="flex flex-col gap-5">
          <div className="flex h-10 items-center">{/* Spacer */}</div>
          <ShowHabits />
          <AddHabit />
        </div>
      </div>
      <div className="flex flex-row-reverse overflow-auto">
        <div className="flex flex-col gap-5">
          <div className="flex w-full gap-1">
            <ShowDates />
          </div>
          <ShowSquares />
        </div>
      </div>
    </div>
  );
};

export default Habits;
