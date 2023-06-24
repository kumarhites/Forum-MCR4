import React from "react";
import { BiHome } from "react-icons/bi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsBookmark } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { useData } from "../contexts/DataContext";

const SideNav = () => {
  const { data } = useData();
  console.log(data);
  return (
    <section className="w-72 p-10">
      <div className="h-full flex flex-col space-y-10 items-start mx-auto">
        <div className="flex items-center justify-center gap-2 mt-5">
          <BiHome size={32} />
          <span className="text-2xl font-semibold">Home</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <HiOutlineRocketLaunch size={32} />
          <span className="text-2xl font-semibold">Explore</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <BsBookmark size={24} />
          <span className="text-2xl font-semibold">Bookmark</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <VscAccount size={24} />
          <span className="text-2xl font-semibold">Profile</span>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-12 h-12 overflow-hidden">
          <img src={data.picUrl} className="w-full" />
        </div>
        <div>
          <h1 className="font-bold text-lg">{data.name}</h1>
          <h2 className="text-blue-500 -mt-1">@{data.username}</h2>
        </div>
      </div>
    </section>
  );
};

export default SideNav;
