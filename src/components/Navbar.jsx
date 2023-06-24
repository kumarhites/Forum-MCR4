import React from "react";
import { HiOutlineMegaphone } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="w-full shadow-sm bg-white">
      <div className="max-w-[1280px] mx-auto h-20 flex items-center px-10">
        <div className="text-xl font-semibold flex gap-2 items-center">
          <HiOutlineMegaphone size={24} className="text-red-500"/>
          <span className="font-bold">MyForum</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
