import Functionality from "./components/Functionality";
import Habits from "./components/Habits";
import HabitsSupabase from "./components/HabitsSupabase";

export default function Home() {
  return (
    <div className="mt-20 flex h-full w-full flex-col items-center justify-center gap-10">
      <Functionality />
      <HabitsSupabase />
      {/* <Habits /> */}
    </div>
  );
}
