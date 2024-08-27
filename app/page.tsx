import { SignedIn, SignedOut } from "@clerk/nextjs";
import Hero from "./components/Hero";
import Habits from "./components/Habits";

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
          <Habits />
        </div>
      </SignedIn>
    </div>
  );
}
