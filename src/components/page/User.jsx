import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const User = () => {
  return (
    <div className="w-80  bg-white shadow-lg rounded-lg overflow-hidden my-4 m-auto h-fit">
      <img
        className="w-full h-60 object-cover object-center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-white font-semibold text-lg font-secondary">
          User Name
        </h1>
      </div>
      <div className="py-4 px-6">
        <p className="py-2 text-lg text-gray-700 font-secondary">Bio</p>
        <div className="flex items-center mt-4 text-gray-700">
          <MdEmail />
          <h1 className="px-2 text-sm font-secondary">Email</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaPhone />
          <h1 className="px-2 text-sm font-secondary">Phone</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaLocationDot />
          <h1 className="px-2 text-sm">Address</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
