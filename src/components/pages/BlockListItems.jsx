import React from "react";
import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import BlockList from "./BlockList";
function BlockListItems() {
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg">
      <div className="flex justify-between pb-4">
        <h2 className="title font-secondary  text-2xl font-semibold">
          Block List
        </h2>
        <button>
          <IoMdMore className="text-2xl" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <BlockList />
        <BlockList />
        <BlockList />
        <BlockList />
        <BlockList />
      </div>
    </div>
  );
}

export default BlockListItems;
