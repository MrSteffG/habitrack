import React, { useState } from "react";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

const LeftSidePanel = () => {
  const [toggleOpen, setToggleOpen] = useState(true);

  return (
    <div
      className={`relative flex h-screen ${toggleOpen ? "w-1/5" : "w-16"} flex-col border-r border-slate-200`}
    >
      <div className="flex h-full w-full p-5">
        {toggleOpen ? (
          <TbLayoutSidebarLeftCollapse
            className="text-2xl opacity-50 hover:cursor-pointer"
            onClick={() => setToggleOpen(!toggleOpen)}
          />
        ) : (
          <TbLayoutSidebarRightCollapse
            className="text-2xl opacity-50 hover:cursor-pointer"
            onClick={() => setToggleOpen(!toggleOpen)}
          />
        )}
      </div>
    </div>
  );
};

export default LeftSidePanel;
