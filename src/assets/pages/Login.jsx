import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { loggeduser } from "../../slice/userSlice";

function Login() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const db = getDatabase();
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
            set(ref(db, "user/" + res.user.uid), {
              username: res.user.displayName,
              email: res.user.email,
              profile_picture: res.user?.photoURL,
            });
            toast.success("Login Successful", {
              position: "top-center",
              autoClose: 2000,
              closeOnClick: true,
              theme: "light",
            });
            localStorage.setItem("user", JSON.stringify(res.user));
            dispatch(loggeduser(res.user));
            console.log(res.user);
            setTimeout(() => {
              navigate("/");
            }, 1500);
          }
        })
        .catch((err) => {
          // console.log(err.code);
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
  const handelGoogle = () => {
    console.log("click");
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
              className="absolute   right-4 -translate-y-1/2 cursor-pointer text-lg opacity-100"
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
          <div className="separator">
            <hr className="line" />
            <span className="text-black font-primary">OR</span>
            <hr className="line" />
          </div>
          <button onClick={handelGoogle} className="button-google">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              />
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
