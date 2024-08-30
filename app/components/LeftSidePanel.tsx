import React, { useState } from "react";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const LeftSidePanel = () => {
  const [toggleOpen, setToggleOpen] = useState(true);

  const Open = () => {
    return (
      <div className="flex h-full w-full justify-end p-5">
        <TbLayoutSidebarLeftCollapse
          className="text-2xl opacity-50 hover:cursor-pointer"
          onClick={() => setToggleOpen(!toggleOpen)}
        />
      </div>
    );
  };

  const Closed = () => {
    return (
      <div className="flex h-full w-full justify-end p-5">
        <TbLayoutSidebarRightCollapse
          className="text-2xl opacity-50 hover:cursor-pointer"
          onClick={() => setToggleOpen(!toggleOpen)}
        />
      </div>
    );
  };

  return (
    <div
      className={`relative flex h-screen ${toggleOpen ? "w-1/5" : "w-16"} flex-col border-r border-slate-200 bg-slate-100`}
    >
      {toggleOpen ? <Open /> : <Closed />}
    </div>
  );
};

export default LeftSidePanel;
