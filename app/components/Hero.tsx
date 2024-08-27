import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-16 flex h-4/5 w-full flex-col items-center justify-center gap-5 bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-8xl font-extrabold text-white max-md:text-6xl max-sm:text-4xl">
        HABITRACK.
      </h1>

      <SignInButton>
        <button className="flex items-center justify-center rounded-md border-2 border-white p-3 font-bold text-white transition-all duration-200 hover:scale-110">
          Sign in to get started
        </button>
      </SignInButton>
    </div>
  );
};

export default Hero;
