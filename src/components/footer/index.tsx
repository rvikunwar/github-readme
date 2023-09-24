import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import Github from "../icons/Github";
import { links } from "@/constant";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

function Footer() {
  return (
    <div className="footer py-4 w-full flex justify-center font-mono">
      <span className={`${poppins.className} flex text-sm items-center`}>
        Created by
        <Link href={links.github} className="hover:text-[#197FC4] flex items-center mx-2">
          <Github /> 
          <span className="mx-2">ravikunwar</span>
        </Link>
      </span>
    </div>
  );
}

export default Footer;
