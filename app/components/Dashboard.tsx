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
    console.log(habits);
    const counterArr = [];
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
      console.log(counterArr);
    }
    return "Add return here";
  };

  const counterArr: any = [];

  const calculateTotals = () => {
    console.log(habits);

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
      console.log(counterArr);
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
      <div className="flex flex-col items-start justify-around gap-5">
        <TbLayoutSidebarLeftCollapse
          className="text-2xl opacity-50 hover:cursor-pointer"
          onClick={() => setToggleOpen(!toggleOpen)}
        />
      </div>
    );
  };

  const Open = () => {
    return (
      <div className="flex flex-col items-start justify-around gap-5">
        <TbLayoutSidebarRightCollapse
          className="text-2xl opacity-50 hover:cursor-pointer"
          onClick={() => setToggleOpen(!toggleOpen)}
        />
        <h2 className="flex w-full items-center justify-center text-xl font-semibold">
          DASHBOARD
        </h2>
        <div className="flex w-full items-center justify-between">
          <h3>Total Completed: </h3>
          <h3>{countCompleted()}</h3>
        </div>
        <div className="flex w-full items-center justify-between">
          <h3>Best streak: </h3>

          {calculateBestStreak()}
        </div>
        <div className="flex flex-col items-center justify-center">
          Completion Rate
        </div>
        <h2 className="flex self-center font-semibold">Totals</h2>

        {showTotals}
      </div>
    );
  };

  return (
    <div
      className={`relative flex h-screen ${toggleOpen ? "w-1/5" : "w-16"} flex-col gap-5 border-l border-slate-200 bg-slate-100 p-5 text-black`}
    >
      {toggleOpen ? <Open /> : <Closed />}
    </div>
  );
};

export default Dashboard;
