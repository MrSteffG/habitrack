import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center bg-black text-white">
      <div className="flex w-2/3 items-center justify-between">
        <h1 className="text-lg font-semibold">Navbar title</h1>
        <div className="flex items-center justify-center gap-10 p-5">
          <h3>Item 1</h3>
          <h3>Item 2</h3>
          <h3>Item 3</h3>
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
