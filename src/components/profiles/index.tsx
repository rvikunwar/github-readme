import React from "react";
import Github from "../icons/Github";
import { Space_Grotesk } from "next/font/google";
import { stringToColor } from "@/utils";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

function Profile({
  name,
  category,
  onClick,
  github,
  selected,
}: {
  name: string;
  category: string;
  github?: string;
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
        <h3 className={`font-semibold text-sm ${spaceGrotesk.className}`}>
          {name}
        </h3>
      </div>
      <p className={`${spaceGrotesk.className} text-xs`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic rem quae, quia nostrum reprehenderit
      </p>
      <div className="flex items-center w-full">
        { github && <button className="mr-2">
          <Link href={github} target="_blank">
            <Github dark={true} />
          </Link>
        </button> }
        <span style={ { background: stringToColor(category)}} 
          className={`font-thin text-xs px-2 text-gray-100
          rounded-md ${spaceGrotesk.className} outline-none`}>
          {category}
        </span>
      </div>
    </div>
  );
}

export default Profile;
