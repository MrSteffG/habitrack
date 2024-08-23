import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="fixed z-10 flex w-full items-center justify-center border-b border-slate-100 bg-slate-50 bg-opacity-25 backdrop-blur-sm">
      <div className="flex w-2/3 items-center justify-between">
        <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent">
          Habitrack
        </h1>
        <div className="flex items-center justify-center gap-10 p-5">
          <SignedOut>
            <SignInButton>
              <h3 className="text-lg font-semibold transition-all hover:scale-105">
                Log in
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
