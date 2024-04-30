import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";
import { useSelector } from "react-redux";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { createRef, useState } from "react";
import { GiCrossMark } from "react-icons/gi";

const User = () => {
  const user = useSelector((state) => state.userSlice.user);
  const [enableEdit, setEnableEdit] = useState(false);
  const [image, setImage] = useState();
  const [CropData, setCropData] = useState("");
  const cropperRef = createRef();
  const onChange = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  const handelClose = () => {
    setEnableEdit(false);
    setCropData("");
    setImage("");
  };
  return (
    <div className="w-80  bg-white shadow-lg rounded overflow-hidden my-4 m-auto h-fit ">
      {enableEdit && (
        
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] border p-5 rounded flex justify-center items-center">
        <div className=" p-5 rounded  w-1/4 ">
        <div onClick={handelClose} className="flex justify-between my-2 ">
            <button  className="bg-primary text-white font-secondary font-semibold p-2 rounded">
              Close
            </button>
            <button className="bg-[#008000] text-white font-secondary font-semibold p-2 rounded">
              save
            </button>
          </div>
        <input
            className="p-2 bg-gray-900 text-white  w-full font-secondary"
            type="file"
            onChange={onChange}
          />
          {image && (
            <Cropper
              ref={cropperRef}
              style={{ height: 400, width: "100%" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              guides={true}
            />
          )}
          <button
            onClick={getCropData}
            className="crop-btn my-2 font-secondary "
          >
            Crop Image
          </button>
          <img src={CropData} alt="" className="w-20" />
        </div>
        </div>
      )}

      <img
        className="w-full h-60 object-cover object-center"
        src={ user?.photoURL}
        alt=""
      />
      <div className="flex items-center justify-between  px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-white font-semibold text-lg font-secondary">
          {user.displayName}
        </h1>
        <div>
          <div className="group relative w-fit">
            <MdMoreVert className="text-white text-2xl cursor-pointer" />
            <button
              onClick={() => setEnableEdit(true)}
              className=" text-white font-secondary hidden absolute bottom-full right-0 group-hover:block whitespace-nowrap"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 px-6">
        <div className="flex items-center mt-4 text-gray-700">
          <BiSolidEditAlt />
          <h1 className="px-2 text-sm font-secondary">Bio</h1>
        </div>
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
