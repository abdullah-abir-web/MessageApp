import React from "react";
import { MdEmail } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";
import { useSelector } from "react-redux";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { createRef, useState } from "react";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { updateProfile, onAuthStateChanged, getAuth } from "firebase/auth";
const User = () => {
  const auth = getAuth();
  const storage = getStorage();
  const user = useSelector((state) => state.userSlice.user);
  const [enableEdit, setEnableEdit] = useState(false);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
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
  const handelUpload = () => {
    if (cropData) {
      const storageRef = ref(storage, user?.uid);
      uploadString(storageRef, cropData, "data_url").then(() => {
        getDownloadURL(storageRef).then((downloadURL) => {
          onAuthStateChanged(auth, () => {
            updateProfile(auth.currentUser, {
              profile_picture: downloadURL,
            }).then(() => {
              setEnableEdit(false);
              setCropData("");
              setImage("");
            });
          });
        });
      });
    }
  };
  return (
    <div className="w-80  shadow-lg rounded overflow-hidden my-4 m-auto h-fit ">
      {enableEdit && (
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] border p-5  flex justify-center items-center">
          <div className=" bg-common p-5 rounded w-1/4 ">
            <div className="flex justify-between my-2 ">
              {cropData ? (
                <button
                  onClick={handelUpload}
                  className="bg-[#008000] text-white font-secondary font-semibold p-2 rounded"
                >
                  save
                </button>
              ) : (
                ""
              )}

              <button
                onClick={handelClose}
                className="bg-primary text-white font-secondary font-semibold p-2 rounded"
              >
                Close
              </button>
            </div>
            <div className="flex gap-1 items-center ">
              <label
                htmlFor="profile"
                className=" bg-white font-secondary py-2 px-2 rounded cursor-pointer"
              >
                Choose profile picture
                <input
                  id="profile"
                  type="file"
                  className="hidden "
                  onChange={onChange}
                />
              </label>
              <button
                onClick={getCropData}
                className="crop-btn my-2 font-secondary "
              >
                Crop Image
              </button>
            </div>
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

            <img src={cropData} alt="" className="w-20" />
          </div>
        </div>
      )}

      <img
        className="w-full h-60 object-cover object-center"
        src={user?.photoURL}
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
          <h1 className="px-2 text-sm font-secondary">{user?.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
