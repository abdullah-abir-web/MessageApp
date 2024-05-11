import React from "react";
import { useSelector } from "react-redux";
import { getDatabase, push, ref, set } from "firebase/database";
import { IoPersonAddSharp } from "react-icons/io5";

function People({ userData }) {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const handelRequest = (key, userName) => {
    set(push(ref(db, "friendRequest/")), {
      senderName: user.displayName,
      senderId: user.uid,
      reciverName: userName,
      reciverId: key,
    });
  };
  return (
    <div className="flex gap-1 items-center">
      <div className="w-12 h-12">
        <img
          src={userData.profile_picture}
          alt="user"
          className="w-full rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className=" font-medium text-white text-xl font-secondary">
          {userData.username}
        </h2>
      </div>
      <button
        onClick={() => handelRequest(userData.key, userData.username)}
        className="bg-blue-600 p-2 flex items-center gap-1  rounded ml-auto font-semibold text-white font-primary text-lg"
      >
        <IoPersonAddSharp />
        Add Friend
      </button>
    </div>
  );
}

export default People;
