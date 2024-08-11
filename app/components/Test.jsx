"use client";
import React, { useState } from "react";

const Test = () => {
  const [items, setItems] = useState([
    { id: 0, data: "a", completed: false },
    { id: 1, data: "b", completed: false },
    { id: 2, data: "d", completed: false },
  ]);

  const updateCompleted = ({ idToUpdate, newData }) => {
    setItems(
      items.map(({ id, completed }) =>
        id === idToUpdate ? { id, completed: newData } : { id, completed },
      ),
    );
  };
  //   updateData({ idToUpdate: 2, newData: "c" });

  return (
    <div>
      <div className="mt-10 flex gap-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex h-10 w-10"
            onClick={() =>
              updateCompleted({ idToUpdate: item.id, newData: !item.completed })
            }
          >
            {item.completed ? (
              <div
                className="flex h-10 w-10 bg-green-200"
                onClick={() =>
                  updateCompleted({
                    idToUpdate: item.id,
                    newData: !item.completed,
                  })
                }
              ></div>
            ) : (
              <div
                className="flex h-10 w-10 bg-red-200"
                onClick={() =>
                  updateCompleted({
                    idToUpdate: item.id,
                    newData: !item.completed,
                  })
                }
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
