import React from "react";
import Github from "../icons/Github";
import { Noto_Sans } from "next/font/google";
import { stringToColor } from "@/utils";
import Copy from "../icons/Copy";
// import Eye from "../icons/Eye";

const natoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

function Profile({
  name,
  category,
  onClick,
  selected,
}: {
  name: string;
  category: string;
  onClick: () => void;
  selected: string | null | undefined;
}) {
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      }}
      className={`rounded-md mb-4 border-box
        px-3 py-1 cursor-pointer border-solid border-2 ${
          selected === name ? "border-[#07C5CE]" : "border-white"
        }`}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <h3 className={`font-semibold text-sm ${natoSans.className}`}>
          {name}
        </h3>

        <button className="mr-2">
          <Github dark={true} />
        </button>
      </div>
      <div className="flex items-center w-full">
        {/* <button className="flex items-center">
          <Eye/> 
          <span className="text-gray-300 text-sm">1223</span>
        </button> */}
        <button className="flex items-center font-normal text-xs mr-2">
           <Copy/> 
           <span className="ml-1">Cloned 99</span>
        </button>
        {/* <span style={ { background: stringToColor(category)}} 
          className={`self-end font-thin text-sm border px-2 rounded-md text-white ${natoSans.className}`}>
          {category}
        </span> */}
      </div>
    </div>
  );
}

export default Profile;
