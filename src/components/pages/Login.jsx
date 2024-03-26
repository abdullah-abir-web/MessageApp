import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-common">
      <div className='"w-full max-w-md bg-white rounded-lg shadow-md p-10'>
        <h2 className="font-primary font-bold text-3xl mb-4">Sign In</h2>
        <form action="" className="flex flex-col">
          <input
            className="bg-common text-black border-0 rounded-md p-2 mb-4 focus:outline-none"
            type="email"
            placeholder="Email address"
          />
          <input
            className="bg-common text-black border-0 rounded-md p-2 mb-4 focus:outline-none"
            type="password"
            placeholder="Password"
          />
          <div className=" flex items-center justify-between flex-wrap">
            <label
              htmlFor="remember-me"
              className=" text-sm text-black font-primary cursor-pointer font-semibold"
            >
              <input className="mr-2" id="remember-me" type="checkbox" />
              Remember me
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
            className="bg-primary text-white font-semibold text-xl font-primary py-2 px-5 rounded-full mt-4"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
