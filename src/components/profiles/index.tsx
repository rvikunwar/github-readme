import React from "react";
import Github from "../icons/Github";

function Profile({
  name,
  category,
  onClick,
}: {
  name: string;
  category: string;
  onClick: () => void;
}) {
  return (
    <div
      className="border rounded-md mb-4 px-4 py-2 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="font-mono">{name}</h3>
      <div className="flex">
        <button className="mr-2">
          <Github dark={true} />
        </button>
        <button className="text-gray-500 font-thin text-sm mr-2">
          Cloned 99
        </button>
        <button className="font-thin text-sm border px-2 bg-green-500 rounded-md text-white">
          {category}
        </button>
      </div>
    </div>
  );
}

export default Profile;
