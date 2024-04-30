import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
// import { createRef,useState } from "react";
import { useSelector } from "react-redux";
const User = () => {
  const user = useSelector((state) => state.userSlice.user);

  // const [image, setImage] = useState("https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg");
  // const [CropData, setCropData] = useState("");
  // const cropperRef = createRef();
  // const onChange = (e) => {
  //   let files;
  //   if (e.dataTransfer) {
  //     files = e.dataTransfer.files;
  //   }
  //   else if (e.target) {
  //     files = e.target.files;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result);
  //   };
  //   reader.readAsDataURL(files[0]);
  // };

  // const getCropData = () => {
  //   if (typeof cropperRef.current?.cropper !== "undefined") {
  //     setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
  //   }
  // };

  // console.log(CropData);

  return (
    <div className="w-80  bg-white shadow-lg rounded-lg overflow-hidden my-4 m-auto h-fit">
      {/* <div class="file-upload">
  <div class="file-select">
    <div class="file-select-button" id="fileName">Choose File</div>
    <div class="file-select-name" id="noFile">No file chosen...</div> 
    <input type="file" name="chooseFile" id="chooseFile"/>
  </div>
</div> */}

      {/* <div className="my-20 ">
        <input type="file"  onChange={onChange}/ >
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
      </div> */}
      <img
        className="w-full h-60 object-cover object-center"
        src={user?.photoURL}
        alt="avatar"
      />
      <div className="flex items-center justify-between  px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-white font-semibold text-lg font-secondary">
          {user.displayName}
        </h1>
        <div>
          <div className="group relative w-fit">
            <MdMoreVert className="text-white text-2xl cursor-pointer" />
            <p className="text-white font-secondary hidden absolute bottom-full right-0 group-hover:block whitespace-nowrap">
              Edit Profile
            </p>
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
