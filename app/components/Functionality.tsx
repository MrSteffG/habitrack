"use client";

import React, { useEffect, useState } from "react";
import supabaseClient from "../../config/supabaseClient";
import {
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
  UserButton,
  useSession,
} from "@clerk/nextjs";

const Functionality = () => {
  const [items, setItems] = useState<any | null>([]);

  const { getToken } = useAuth();

  const selectData = async () => {
    try {
      const supabaseAccessToken = await getToken({
        template: "supabase",
      });

      const supabase = await supabaseClient(supabaseAccessToken);
      const { data: items, error } = await supabase.from("habits").select("*");
      console.log(items);
      setItems(items);
    } catch (error) {
      console.log("Catch statement, something went wrong" + error);
    } finally {
      console.log("ho finito");
    }
  };

  const itemsList = items.map((item: any) => (
    <div key={item.id}>{item.item}</div>
  ));

  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <div className="flex w-2/3 flex-col items-center justify-center gap-10">
        <h3>This is where the functionality goes...</h3>
        <div className="flex gap-5">
          <button
            onClick={selectData}
            className="flex h-20 w-20 items-center justify-center bg-green-200 transition-all hover:scale-105"
          >
            SELECT
          </button>
        </div>
        {/* List of data */}
        <div className="flex w-2/3 border-2 border-black">
          <ul className="flex w-full flex-col">{itemsList}</ul>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
