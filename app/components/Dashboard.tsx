import React, { useState } from "react";
import datesSinceAugust from "./dateArr";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";

const Dashboard = ({ habits, completed }: { habits: any; completed: any }) => {
  const [dateArr, setDateArr] = useState<any[]>(datesSinceAugust);
  const [toggleOpen, setToggleOpen] = useState(true);

  const countCompleted = () => {
    let counter = 0;
    for (let i = 0; i < completed.length; i++) {
      if (completed[i].done === true) {
        counter++;
      }
    }
    return counter;
  };

  const calculateBestStreak = () => {
    const streakArr = [];
    const dateArrLength = dateArr.length - 1;
    for (let i = 0; i < habits.length; i++) {
      let counter = 0;
      dateArr: for (let j = dateArrLength; j > 0; j--) {
        completed: for (let c = 0; c < completed.length; c++) {
          if (
            completed[c].completionDay === dateArr[j].dateStr &&
            completed[c].habitId === habits[i].habitId &&
            completed[c].done === true
          ) {
            counter++;
          } else if (
            completed[c].completionDay === dateArr[j].dateStr &&
            completed[c].habitId === habits[i].habitId &&
            completed[c].done === false
          ) {
            break dateArr;
          }
        }
      }
      streakArr.push(counter);
    }
    console.log(streakArr);
    return "soon";
  };

  const counterArr: any = [];

  const calculateTotals = () => {
    for (let i = 0; i < habits.length; i++) {
      let counter = 0;
      for (let j = 0; j < dateArr.length; j++) {
        for (let c = 0; c < completed.length; c++) {
          if (
            completed[c].completionDay === dateArr[j].dateStr &&
            completed[c].habitId === habits[i].habitId &&
            completed[c].done === true
          ) {
            counter++;
          }
        }
      }

      counterArr.push({ habit: habits[i].habit, count: counter });
    }
  };
  calculateTotals();

  const showTotals = counterArr.map(
    ({ habit, count }: { habit: string; count: number }) => (
      <div key={habit} className="flex w-full items-center justify-between">
        <h3>{habit}:</h3>
        <h3>{count}</h3>
      </div>
    ),
  );

  const Closed = () => {
    return (
      <div className="flex flex-col items-start justify-around gap-5 dark:text-stone-100">
        <TbLayoutSidebarLeftCollapse
          className="text-2xl opacity-50 hover:cursor-pointer"
          onClick={() => setToggleOpen(!toggleOpen)}
        />
      </div>
    );
  };

  const Open = () => {
    return (
      <div className="flex flex-col items-start justify-around gap-5 dark:text-stone-100">
        <div className="flex w-full items-center justify-between text-xl font-semibold">
          <h2>DASHBOARD</h2>
          <TbLayoutSidebarRightCollapse
            className="text-2xl opacity-75 hover:cursor-pointer"
            onClick={() => setToggleOpen(!toggleOpen)}
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <h3>Total Completed: </h3>
          <h3>{countCompleted()}</h3>
        </div>
        <div className="flex w-full items-center justify-between">
          <h3>Best streak: </h3>

          {calculateBestStreak()}
        </div>
        <h2 className="flex self-center font-semibold">Totals</h2>

        {showTotals}
      </div>
    );
  };

  return (
    <div
      className={`relative flex h-screen ${toggleOpen ? "w-1/5" : "w-16"} flex-col gap-5 border-l border-slate-200 bg-slate-50 p-5 text-black dark:border-zinc-500 dark:bg-zinc-900`}
    >
      {toggleOpen ? <Open /> : <Closed />}
    </div>
  );
};

export default Dashboard;
