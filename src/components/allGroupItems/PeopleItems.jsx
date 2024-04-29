import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { getDatabase, ref, onValue } from "firebase/database";
import People from "./People";
import { useSelector } from "react-redux";
function PeopleItems() {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const starCountRef = ref(db, "user/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key !== user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
        setUserList(arr);
        setLoading(false);
      });
    });
  }, []);
  // console.log("my_id", user.uid);
  // console.log("my_id", userList);
  return (
    <div className="w-1/3 p-4 rounded-2xl bg-white shadow-lg">
      <div className="flex justify-between pb-4">
        <h2 className="title font-secondary  text-2xl font-semibold">People</h2>
      </div>
      <div className=" py-2 px-3 border-2 border-common rounded-lg w-full flex items-center gap-2">
        <IoSearchOutline className="text-2xl " />
        <input 
          type="text" 
          className="w-full outline-none text-lg font-secondary"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {loading ? (
          <div className="relative flex justify-center items-center mt-16">
            <div className="absolute animate-spin rounded-full h-32  w-32 border-t-4 border-b-4 border-primary"></div>
          </div>
        ) : (
          userList.map((item) => <People userData={item} key={item.key} />)
        )}
      </div>
    </div>
  );
}

export default PeopleItems;
