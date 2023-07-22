import React from "react";
import { FiHome } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdFormatListBulleted } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bottom-0 sm:top-0 sm:w-1/12  bg-white w-[100vw] fixed sm:relative sm:pt-10    z-10 p-4 flex sm:flex-col items-center justify-between sm:justify-normal">
      <a className="p-3  sm:py-6 sm:px-4 h-auto aspect-square rounded-lg text-xl text-gray-500 hover:text-white hover:bg-blue-800">
        <FiHome className="" />
      </a>
      <a className="p-3 sm:py-6 sm:px-4 h-auto aspect-square rounded-lg text-xl text-gray-500 hover:text-white hover:bg-blue-800">
        <FaRegNewspaper />
      </a>
      <a className="p-3 sm:py-6 sm:px-4 h-auto aspect-square rounded-lg text-xl text-gray-500 hover:text-white hover:bg-blue-800">
        <MdFormatListBulleted />
      </a>
      <a className="p-3 sm:py-6 sm:px-4 h-auto aspect-square rounded-lg text-xl text-gray-500 hover:text-white hover:bg-blue-800">
        <CgProfile />
      </a>
      <a className="p-3 sm:py-6 sm:px-4 h-auto aspect-square rounded-lg text-xl text-gray-500 hover:text-white hover:bg-blue-800">
        <BiSearchAlt2 />
      </a>
    </nav>
  );
};

export default Navbar;
