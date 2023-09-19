import React from "react";
import Readme from "../icons/Readme";
import Link from "next/link";
import useDeviceDetect from "@/hooks";
import Close from "../icons/Close";
import Menu from "../icons/Menu";

function Navbar({
  onMenuClick,
  isDrawerOpen,
}:{
  onMenuClick: () => void;
  isDrawerOpen: boolean,
}) {
  const { isMobile } = useDeviceDetect()

  return (
    <div className={`w-full flex align-center justify-between px-7 sm:px-12 navbar`} style={{ height: '10vh' }}>
      <span className="text-white pointer-events-none flex place-items-center 
        gap-2 py-8 lg:pointer-events-auto lg:p-0">
        <Link href="/" className="flex items-center">
          <Readme size={"40px"} dark={true} /> 
          <span className="logo ml-2">Readme</span>
        </Link>
      </span>

      <button
          className="focus:outline-none focus:ring-2 focus:ring-[#197FC4]"
          onClick={onMenuClick}
        >
          {isDrawerOpen ? (
            <Close className="w-10 h-10 sm:hidden fill-current text-[#197FC4]" />
          ) : (
            <Menu className="w-10 h-10 sm:hidden fill-current text-[#197FC4]" />
          )}
        </button>
    </div>
  );
}

export default Navbar;
