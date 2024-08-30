"use client";

import Hero from "./components/Hero";
import Habits from "./components/Habits";
import Dashboard from "./components/Dashboard";

import supabaseClient from "../config/supabaseClient";
import {
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import { useEffect, useState } from "react";
import DashboardPanel from "./components/LeftSidePanel";
import LeftSidePanel from "./components/LeftSidePanel";

export default function Home() {
  const { getToken } = useAuth();
  const { session } = useSession();
  const [completed, setCompleted] = useState<any[]>([]);
  const [habits, setHabits] = useState<any[]>([]);

  const selectCompleted = async () => {
    try {
      const supabaseAccessToken = await getToken({
        template: "supabase",
      });

      const supabase = await supabaseClient(supabaseAccessToken);
      const { data: completed, error } = await supabase
        .from("completed")
        .select("*");
      // console.log(completed);
      setCompleted(completed!);
    } catch (error) {
      console.log("Catch statement, something went wrong" + error);
    }
  };

  const selectHabits = async () => {
    try {
      const supabaseAccessToken = await getToken({
        template: "supabase",
      });

      const supabase = await supabaseClient(supabaseAccessToken);
      const { data: habits, error } = await supabase.from("habits").select("*");
      const newHabits: any = habits;
      setHabits(newHabits);
    } catch (error) {
      console.log("Catch statement, something went wrong" + error);
    }
  };

  useEffect(() => {
    selectHabits();
    selectCompleted();
  }, []);

  // TODO:
  // Loading icon
  // Main Dashboard right (Calendar view) (Stats)
  // Dashboard left
  // Re add responsivity
  // Clear old completed logs
  // Choose habit colour
  // Calendar View
  // New favicon

  return (
    <div className="flex h-full w-full">
      <SignedOut>
        <div className="flex min-h-screen w-screen">
          <Hero />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="mt-16 flex h-full w-full items-center justify-between gap-10">
          <LeftSidePanel />
          <Habits
            habits={habits}
            setHabits={setHabits}
            completed={completed}
            setCompleted={setCompleted}
          />
          <Dashboard habits={habits} completed={completed} />
        </div>
      </SignedIn>
    </div>
  );
}
