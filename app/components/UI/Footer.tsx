import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-screen items-center justify-center border-t border-slate-100 bg-slate-50 bg-opacity-10 p-10 text-black backdrop-blur-sm dark:border-zinc-500 dark:bg-zinc-900 dark:bg-opacity-60 dark:text-white">
      <div className="flex w-2/3">
        <a
          className="flex flex-row items-center justify-center gap-4"
          href="https://github.com/MrSteffG/habitrack"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
