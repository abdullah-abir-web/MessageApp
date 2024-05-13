import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { getDatabase, ref, onValue } from "firebase/database";
import PeopleItems from "/src/components/allGroupItems/PeopleItems";
import People from "../allGroupItems/People";
import { useSelector } from "react-redux";
function PeopleList() {
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
    <div className="w-full p-4  bg-[#222831] shadow-lg">
      <div className="flex justify-between pb-4">
        <h2 className="title font-secondary text-white  text-xl font-semibold">
          People you may know
        </h2>
      </div>
      <div className=" py-2 px-3 border-2 border-[#31363F] bg-[#31363F]  rounded-lg w-full flex items-center gap-2">
        <IoSearchOutline className="text-2xl text-white" />
        <input
          type="text"
          className="w-full outline-none bg-[#31363F] text-white  text-lg font-primary"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {loading ? (
          <div class="loader">
            <div class="scanner">
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          userList.map((item) => <People userData={item} key={item.key} />)
        )}
      </div>
    </div>
  );
}

export default PeopleList;
