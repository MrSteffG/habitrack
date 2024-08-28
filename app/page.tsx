import { SignedIn, SignedOut } from "@clerk/nextjs";
import Hero from "./components/Hero";
import Habits from "./components/Habits";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="flex w-full">
      <SignedOut>
        <div className="flex min-h-screen w-screen">
          <Hero />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="mt-36 flex h-full w-full flex-col items-center justify-center gap-10">
          <Dashboard />
          <Habits />
        </div>
      </SignedIn>
    </div>
  );
}
