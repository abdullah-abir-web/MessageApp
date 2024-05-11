import React from "react";
import ChatList from "./ChatList";
import ChatMessage from "./ChatMessage";
// import { FaSearch } from "react-icons/fa";
const Chatbox = () => {
  return (
    <div className="flex   w-full">
      <div className="h-full w-96 bg-[#222831] flex flex-col gap-4 p-5">
        <h2 className="text-2xl font-semibold text-white  font-secondary pb-4">
          Chat
        </h2>

        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
      </div>
      <ChatMessage />
    </div>
  );
};

export default Chatbox;
