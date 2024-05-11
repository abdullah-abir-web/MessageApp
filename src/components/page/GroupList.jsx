import { IoMdMore } from "react-icons/io";
import Person from "../Person";
import { IoSearchOutline } from "react-icons/io5";

import MyGroup from "../../components/allGroupItems/MyGroup";

function GroupList() {
  return (
    <div className="w-full p-4  bg-[#222831]  text-white items-center">
      <div className="flex justify-between pb-4">
        <h2 className="title font-secondary  text-2xl font-semibold">Group</h2>
        <button>
          <IoMdMore className="text-2xl" />
        </button>
      </div>
      <div className=" py-2 px-3  border-[#31363F] bg-[#31363F] rounded-lg  w-full flex items-center gap-2">
        <IoSearchOutline className="text-2xl font-primary " />
        <input
          type="text"
          className="w-full outline-none  bg-[#31363F] text-lg"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
      <div>{/* <MyGroup /> */}</div>
    </div>
  );
}

export default GroupList;
