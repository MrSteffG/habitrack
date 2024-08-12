import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center border-b-2 border-slate-100">
      <div className="flex w-2/3 items-center justify-between">
        <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent">
          Habitrack
        </h1>
        <div className="flex items-center justify-center gap-10 p-5">
          {/* <h3>Item 1</h3>
          <h3>Item 2</h3>
          <h3>Item 3</h3> */}
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
