import React from "react";
import Readme from "../icons/Readme";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full py-2.5 px-4 navbar" style={{ height: '10vh' }}>
      <span className="text-white pointer-events-none flex place-items-center 
        gap-2 p-8 lg:pointer-events-auto lg:p-0">
        <Link href="/" className="flex items-center">
          <Readme size={"40px"} dark={true} /> 
          <span className="logo ml-2">Readme</span>
        </Link>
      </span>
    </div>
  );
}

export default Navbar;
