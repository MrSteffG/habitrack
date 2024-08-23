import Functionality from "./components/Functionality";
import Navbar from "./components/Navbar";
import Habits from "./components/Habits";
import Test from "./components/Test";
import HabitsTest from "./components/HabitsTest";
import TestTwo from "./components/TestTwo";
import NewHabits from "./components/NewHabits";

export default function Home() {
  return (
    <div className="mt-20 flex h-full w-full flex-col items-center justify-center gap-10">
      <HabitsTest />
      {/* <Habits /> */}
      {/* <Test /> */}
    </div>
  );
}
