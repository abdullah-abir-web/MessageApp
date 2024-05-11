import React from "react";

import { getDatabase, ref, set } from "firebase/database";

function FriendRequests() {
  const db = getDatabase();

  //  useEffect(()=>{
  //   const starCountRef = ref(db, 'friendRequest/' );
  //    onValue(starCountRef, (snapshot) => {

  // })
  //  },[])

  return (
    <div className="flex gap-4">
      <div>
        <img src="/user.png" alt="user" width={50} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-lg font-secondary">Abdullah Abir</h2>
      </div>
      <div className="ml-auto flex gap-10  ">
        <button className="bg-[#356cdb] p-2 rounded text-white font-primary text-lg font-semibold">
          Confirm
        </button>
        <button className="font-primary p-2 rounded  text-lg font-medium bg-[#3D3B40] ">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default FriendRequests;
