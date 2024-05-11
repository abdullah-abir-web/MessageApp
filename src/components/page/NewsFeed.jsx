import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

const NewsFeed = () => {
  return (
    <div className=" w-full text-white  bg-[#222831] ">
      <div className=" flex items-center   justify-around  gap-1 p-4 fixed w-full bg-[#3D3B40] ">
        <IoMdHome className="text-white text-2xl" />
        <MdOutlineOndemandVideo className="text-2xl" />
        <IoMdNotifications className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default NewsFeed;
