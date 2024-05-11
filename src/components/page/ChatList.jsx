import React from "react";

const ChatList = () => {
  return (
    <div className="flex gap-4  cursor-pointer">
      <div>
        <img src="/user.png" alt="user" className="w-12 h12" />
      </div>
      <div>
        <h2 className="font-semibold text-white  text-lg font-secondary">
          Abdullah Abir
        </h2>
        <p className=" font-regular text-[#eeeeee69] text-sm font-secondary">
          Need Money.....
        </p>
      </div>
      <p className=" ml-auto font-regular text-[#eeeeee69] font-secondary text-sm items-center">
        10:30 PM
      </p>
    </div>
  );
};

export default ChatList;
