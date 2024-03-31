import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const auth = getAuth();
  const [emailError, setEmailError] = useState("");
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
          console.log("login Succes", res);
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
        <h2 className="font-primary font-bold text-3xl mb-4">Sign In</h2>
        <div className="flex flex-col">
          <input
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value }),
                setEmailError("");
            }}
            className="bg-common text-black border-0 rounded-md p-2 mb-4 outline-none"
            type="email"
            placeholder="Email"
          />
          {emailError && (
            <p className="text-primary text-sm text-start font-secondary font-medium">
              {emailError}
            </p>
          )}
          <input
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value }),
                setPasswordError("");
            }}
            className="bg-common text-black border-0 rounded-md p-2 mb-4 outline-none"
            type="password"
            placeholder="Password"
          />
          {passwordError && (
            <p className="text-primary text-sm text-start font-secondary font-medium">
              {passwordError}
            </p>
          )}

          <div className=" flex items-center justify-between flex-wrap">
            <label
              htmlFor="remember-me"
              className=" text-lg text-black font-primary cursor-pointer font-semibold mt-2"
            >
              <input className="mr-2" type="checkbox" />
              Remember Me
            </label>
            <Link
              className="text-sm text-primary font-primary font-medium  mb-.5 "
              to="/forgetpass"
            >
              Forget Password?
            </Link>
            <p className="text-black font-primary text-lg font-medium mt-4">
              Dont have an account?
              <Link
                className="text-lg text-primary font-primary font-semibold mt-5"
                to="/registration"
              >
                Sing up
              </Link>
            </p>
          </div>
          <button
            onClick={handelSubmit}
            className="bg-primary text-white font-semibold text-xl font-primary py-2 px-5 rounded-full mt-4"
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
