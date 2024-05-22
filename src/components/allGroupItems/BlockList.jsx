import React from "react";
function BlockList() {
  return (
    <div className="flex gap-4">
      <div>
        <img src="/user.png" alt="user" width={50} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-lg font-secondary">Abdullah Abir</h2>
      </div>
      <div className="ml-auto flex flex-col justify-center">
        <button className=" px-2 rounded bg-[#2a9df4] text-white font-secondary text-lg font-normal">
          Unblock
        </button>
      </div>
    </div>
  );
}

export default BlockList;
