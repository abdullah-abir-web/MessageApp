import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Login() {
  const auth = getAuth();
  let navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [showpass, setShowPass] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handelSubmit = () => {
    if (!loginData.email) {
      setEmailError("Email is Required!");
    } else if (!loginData.password) {
      setPasswordError("password is Required!");
    } else {
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((res) => {
          if (res.user.emailVerified == false) {
            toast.error("Email is not verified!", {
              position: "top-center",
              autoClose: 2000,
              closeOnClick: true,
              theme: "light",
            });
          } else {
            toast.success("Login Successful", {
              position: "top-center",
              autoClose: 2000,
              closeOnClick: true,
              theme: "light",
            });
            setTimeout(() => {
              navigate("/");
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err.code);
          if (err.code == "auth/invalid-email") {
            setEmailError("Invalid Email! Please input a valid email");
          }
          if (err.code == "auth/invalid-credential") {
            toast.error("Authorization faild!", {
              position: "top-center",
              autoClose: 2000,
              closeOnClick: true,
              theme: "light",
            });
          }
          if (err.code == "auth/too-many-requests") {
            toast.error(
              "Too many request! user temporarily block pleare try agail later or reset your password",
              {
                position: "top-center",
                autoClose: 2000,
                closeOnClick: true,
                theme: "light",
              }
            );
          }
        });
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-common">
      <ToastContainer />
      <div className='"w-full max-w-md bg-white rounded-lg shadow-md p-10'>
        <h2 className=" font-secondary  font-medium text-3xl mb-4">Sign In</h2>
        <div className="flex flex-col">
          <div className=" flex items-center  relative justify-end">
            <input
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value }),
                  setEmailError("");
              }}
              className="bg-common text-black font-normal font-secondary border-0 rounded-md p-2 mb-4 outline-none w-full"
              type="email"
              placeholder="Email"
            />
            <div className=" absolute right-4 -translate-y-1/2 text-lg  opacity-50">
              <MdEmail />
            </div>
          </div>
          {emailError && (
            <p className="text-primary text-sm text-start font-secondary font-medium">
              {emailError}
            </p>
          )}
          <div className="flex items-center justify-end relative">
            <input
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value }),
                  setPasswordError("");
              }}
              className="bg-common text-black font-normal font-secondary border-0 rounded-md  p-2 mb-4 outline-none w-full "
              type={showpass ? "text" : "password"}
              placeholder="Password"
            />
            <div
              onClick={() => setShowPass(!showpass)}
              className="absolute   right-4 -translate-y-1/2 cursor-pointer text-lg opacity-80"
            >
              {showpass ? <FaRegEye /> : <RiEyeCloseFill />}
            </div>
          </div>
          {passwordError && (
            <p className="text-primary text-sm text-start font-secondary font-medium">
              {passwordError}
            </p>
          )}

          <div className=" flex flex-wrap">
            <Link
              className="text-lg text-primary font-primary font-medium "
              to="/forgetpass"
            >
              Forget Password?
            </Link>
            <p className="text-black  text-lg  font-primary font-medium mt-4">
              Dont have an account?
              <Link
                className="text-lg text-primary font-primary font-normal "
                to="/registration"
              >
                Sing up
              </Link>
            </p>
          </div>
          <button
            onClick={handelSubmit}
            className="bg-primary text-white font-semibold text-xl font-secondary py-2 px-5 rounded-full mt-4"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
