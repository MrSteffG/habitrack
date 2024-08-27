import { SignedIn, SignedOut } from "@clerk/nextjs";

import HabitsSupabase from "./components/HabitsSupabase";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex">
      <SignedOut>
        <div className="flex min-h-screen w-screen">
          <Hero />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="mt-36 flex h-full w-full flex-col items-center justify-center gap-10">
          <HabitsSupabase />
        </div>
      </SignedIn>
    </div>
  );
}
