import React, { useState } from "react";
import datesSinceAugust from "./dateArr";

const Dashboard = ({ habits, completed }: { habits: any; completed: any }) => {
  const [dateArr, setDateArr] = useState<any[]>(datesSinceAugust);

  const countCompleted = () => {
    let counter = 0;
    for (let i = 0; i < completed.length; i++) {
      if (completed[i].done === true) {
        counter++;
      }
    }
    return counter;
  };

  //   const calculateBestStreak = () => {
  //     console.log(habits);
  //     const counterArr = [];
  //     for (let i = 0; i < habits.length; i++) {
  //       let counter = 0;
  //       for (let j = 0; j < dateArr.length; j++) {
  //         for (let c = 0; c < completed.length; c++) {
  //           if (
  //             completed[c].completionDay === dateArr[j].dateStr &&
  //             completed[c].habitId === habits[i].habitId &&
  //             completed[c].done === true
  //           ) {
  //             counter++;
  //           }
  //         }
  //       }

  //       counterArr.push({ habit: habits[i].habit, count: counter });
  //       console.log(counterArr);
  //     }
  //     return "Add return here";
  //   };

  return (
    <div className="flex w-2/3 flex-col gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white dark:from-blue-900 dark:to-purple-900 max-md:w-11/12 max-md:gap-1">
      <div className="flex items-start justify-around">
        <div className="flex flex-col items-center justify-center">
          <h3>Total Completed</h3>
          <h3>{countCompleted()}</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>Best streak</h3>

          {/* {calculateBestStreak()} */}
        </div>
        <div className="flex flex-col items-center justify-center">
          Completion Rate
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
