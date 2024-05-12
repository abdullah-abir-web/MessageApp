import React from "react";
import { IoMdMore } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import Friends from "../Friends";
import FriendRequestsItems from "../allGroupItems/FriendRequestsItems";
function FriendList() {
  return (
    <div className="w-full text-white p-4  bg-[#222831] ">
      <div>
        <FriendRequestsItems />
      </div>
      {/* <hr /> */}
      <div className="flex justify-between pb-4">
        <h2 className="title font-secondary  text-2xl font-semibold">
          Friends
        </h2>
        <button>
          <IoMdMore className="text-2xl" />
        </button>
      </div>
      <div className=" py-2 px-3 border-2  border-[#31363F]  bg-[#31363F] rounded-lg w-full flex items-center gap-2">
        <IoSearchOutline className="text-2xl" />
        <input
          type="text"
          className="w-full outline-none text-white font-primary rounded-xl text-lg bg-[#31363F] "
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <Friends />
        <Friends />
        <Friends />
        <Friends />
      </div>
    </div>
  );
}

export default FriendList;
