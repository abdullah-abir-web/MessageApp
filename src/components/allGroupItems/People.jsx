import React from "react";
function People({ userData }) {
  // console.log(userData);
  return (
    <div className="flex gap-1 items-center">
      <div className="w-12 h-12">
        <img src={userData.profile_picture} alt="user" className="w-full rounded-full" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className=" font-medium  text-xl font-secondary">
          {userData.username}
        </h2>
      </div>
      <button className="bg-primary p-2  rounded ml-auto font-bold text-white font-primary text-lg">
        Add Friend
      </button>
    </div>
  );
}

export default People;
