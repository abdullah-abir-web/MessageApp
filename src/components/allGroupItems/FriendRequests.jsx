import React from "react";
function FriendRequests() {
  return (
    <div className="flex gap-4">
      <div>
        <img src="/user.png" alt="user" width={50} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-lg font-secondary">Abdullah Abir</h2>
      </div>
      <div className="ml-auto flex flex-col">
        <button className="px-3 rounded bg-[#2a9df4] text-white font-secondary text-lg font-normal">
          Confirm
        </button>
        <button className="font-secondary text-lg font-normal ">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default FriendRequests;
