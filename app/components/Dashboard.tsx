import React from "react";

const Dashboard = ({ habits, completed }: { habits: any; completed: any }) => {
  const countCompleted = () => {
    let counter = 0;
    for (let i = 0; i < completed.length; i++) {
      if (completed[i].done === true) {
        counter++;
      }
    }
    return counter;
  };

  return (
    <div className="flex w-2/3 flex-col gap-5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-300 p-3 font-semibold text-white dark:from-blue-900 dark:to-purple-900 max-md:w-11/12 max-md:gap-1">
      <div className="flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <h3>Total Completed</h3>
          <h3>{countCompleted()}</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          Best Streak
        </div>
        <div className="flex flex-col items-center justify-center">
          Completion Rate
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
