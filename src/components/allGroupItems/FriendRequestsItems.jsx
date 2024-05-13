import React from "react";
import FriendRequests from "./FriendRequests";
import { IoMdMore } from "react-icons/io";
function FriendRequestsItems() {
  return (
    <div className="w-full p-3  bg-[#222831]  ">
      <div className="flex justify-between pb-4">
        <h2 className="title font-secondary  text-2xl font-semibold">
          Friend Request
        </h2>
        <button>
          <IoMdMore className="text-2xl" />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <FriendRequests />
        <FriendRequests />
      </div>
    </div>
  );
}

export default FriendRequestsItems;
