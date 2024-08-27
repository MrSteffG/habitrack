"use client";

import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="fixed z-10 flex h-16 w-full items-center justify-center border-b border-slate-100 bg-slate-50 bg-opacity-80 backdrop-blur-sm dark:border-zinc-500 dark:bg-zinc-900 dark:bg-opacity-60">
      <div className="flex w-2/3 items-center justify-between">
        <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-extrabold text-transparent max-sm:hidden">
          HABITRACK.
        </h1>
        <h1 className="hidden bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-extrabold text-transparent max-sm:block">
          H
        </h1>
        <div className="flex items-center justify-center gap-10 p-5">
          <button onClick={toggleTheme}>
            <CiLight />
          </button>
          <SignedOut>
            <SignInButton>
              <h3 className="text-lg font-semibold transition-all hover:scale-105 hover:cursor-pointer">
                LOG-IN
              </h3>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
