import react from "react";
import Person from "../Person";
import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function MyGroup() {
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg">
      <div className="flex justify-between pb-4">
        <h2 className="title font-secondary text-2xl font-semibold">
          My Groups
        </h2>
        <button>
          <IoMdMore className="text-2xl" />
        </button>
      </div>
      <div className=" py-2 px-3 border-2 border-common rounded-lg w-full flex items-center gap-2">
        <FaSearch className="text-lg" />
        <input
          type="text"
          className="w-full outline-none text-lg"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    </div>
  );
}

export default MyGroup;
