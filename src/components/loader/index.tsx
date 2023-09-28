import { links } from "@/constant";
import { Russo_One, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import React from "react";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
});

export default function Loader({ onClickHandler }: { onClickHandler :() => void }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-hidden bg-black opacity-90 fixed z-50 h-full">
      <nav className="my-8 animate-fade-in">
        <ul className={`flex items-center justify-center gap-4 ${spaceGrotesk.className}`}>
          <Link
            target="_blank"
            href={links.githubRepo}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 cursor-pointer"
          >
            Github
          </Link>
          <span
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 cursor-pointer"
            onClick={onClickHandler}>
            Get started
          </span>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1
        className={`z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display 
        sm:text-6xl md:text-8xl font-semibold whitespace-nowrap bg-clip-text ${russoOne.className}`}
      >
        Github readme
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 text-center animate-fade-in">
        <h2 className={`text-sm font-normal text-zinc-500 ${spaceGrotesk.className}`}>
          The perfect place for creating your readme&apos;s with the help of provided examples <br/>and templates of each category.  
        </h2>
      </div>
    </div>
  );
}
