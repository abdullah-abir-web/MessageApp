import React from "react";
import { IoMdMore } from "react-icons/io";
function Friends() {
  return (
    <div className="flex gap-4">
      <div>
        <img src="/user.png" alt="user" width={50} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold  text-xl font-secondary">Abdullah Abir</h2>
      </div>
      <button className=" ml-auto font-regular text-secondary font-secondary text-lg" >
        <IoMdMore />
      </button>
    </div>
  );
}

export default Friends;
