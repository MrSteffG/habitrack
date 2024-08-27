import { SignedIn } from "@clerk/nextjs";
import Habits from "./components/Habits";
import HabitsSupabase from "./components/HabitsSupabase";

export default function Home() {
  return (
    <div className="mt-36 flex h-full w-full flex-col items-center justify-center gap-10">
      <SignedIn>
        <HabitsSupabase />
      </SignedIn>
      {/* <Habits /> */}
    </div>
  );
}
