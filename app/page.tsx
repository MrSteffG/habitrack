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

  return (
    <div className="flex w-full">
      <SignedOut>
        <div className="flex min-h-screen w-screen">
          <Hero />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="mt-36 flex h-full w-full flex-col items-center justify-center gap-10">
          <Dashboard habits={habits} completed={completed} />
          <Habits
            habits={habits}
            setHabits={setHabits}
            completed={completed}
            setCompleted={setCompleted}
          />
        </div>
      </SignedIn>
    </div>
  );
}
