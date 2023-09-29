import { Space_Grotesk } from "next/font/google";
import React from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

function Searchbar({
  onSearchHandler,
}: {
  onSearchHandler: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      }}
      className={`outline-none mb-4 
          ${spaceGrotesk.className} w-full rounded-md px-2 py-1 text-xs
          dark:border dark:border-gray-700 dark:bg-black`}
      placeholder="Search readme"
      autoComplete="off"
      onChange={onSearchHandler}
    />
  );
}

export default Searchbar;
