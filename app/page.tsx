import Habits from "./components/Habits";

import HabitsTest from "./components/HabitsTest";
import Test from "./components/Test";

export default function Home() {
  return (
    <div className="mt-20 flex h-full w-full flex-col items-center justify-center gap-10">
      <Test />
      <HabitsTest />
    </div>
  );
}
