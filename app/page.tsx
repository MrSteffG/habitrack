import Functionality from "./components/Functionality";
import Navbar from "./components/Navbar";
import Habits from "./components/Habits";
import Test from "./components/Test";
import HabitsTest from "./components/HabitsTest";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-10">
      <Navbar />
      <Functionality />
      <HabitsTest />
      <Habits />
      <Test />
    </div>
  );
}
