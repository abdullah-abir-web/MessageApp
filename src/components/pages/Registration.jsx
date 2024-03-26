import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Registration() {
  const auth = getAuth();
  const navigate = useNavigate();
  let [name, SetName] = useState("");
  let [email, SetEmail] = useState("");
  let [password, setPassword] = useState("");
  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const handelSubmit = () => {
    if (!name) {
      setUserError({ nameError: "Name is Required!" });
    } else if (!email) {
      setUserError({ emailError: "Email is Required!" });
    } else if (!password) {
      setUserError({ passwordError: "password is Required!" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser);
          toast.success("Registration successful, please verify your email", {
            position: "top-center",
            autoClose: 2000,
            closeOnClick: true,
            theme: "light",
          });
          SetName("");
          SetEmail("");
          setPassword("");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code.includes("auth/invalid-email")) {
            setUserError({ emailError: "Invalid Email!" });
          }
          if (error.code.includes("auth/email-already-in-use")) {
            setUserError({
              emailError: "Email already used,please try another email !",
            });
          }
          if (error.code.includes("auth/weak-password")) {
            setUserError({
              passwordError: "Password should be at least 6 characters",
            });
          }
        });
    }
  };
  return (
    <section className="bg-common h-screen">
      <div className="container p-20">
        <ToastContainer />
        <div className=" flex justify-between">
          <div className=" flex flex-col justify-center">
            <h1 className=" text-primary font-black text-6xl font-primary leading-loose">
              <img src="/c.png" alt="" className="w-64" />
            </h1>
            <h2 className=" font-bold text-3xl font-primary mb-2">
              Get started with easily register
            </h2>
            <h2 className=" font-normal text-xl text-black">
              Free register and you can enjoy it
            </h2>
          </div>
          <div>
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold font-primary text-black mb-4">
                Sign Up
              </h2>
              <div className="flex flex-col">
                <div className="flex space-x-4 mb-4">
                  <input
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    placeholder="First Name"
                    className="bg-common text-black border-0 rounded-md p-2 w-1/2  focus:outline-none  focus:ring-common transition ease-in-out duration-150"
                    type="text"
                  />
                  <p className="text-primary text-sm text-start font-secondary font-medium">
                    {userError.nameError}
                  </p>
                  <input
                    placeholder="Last Name"
                    className="bg-common text-black border-0 rounded-md p-2 w-1/2 focus:outline-none  focus:ring-common transition ease-in-out duration-150"
                    type="text"
                  />
                </div>
                <input
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="E-mail"
                  className="bg-common text-black border-0 rounded-md p-2 mb-4  focus:outline-none focus:ring-1 focus:ring-common transition ease-in-out duration-150"
                  type="email"
                />
                <p className="text-primary text-sm text-start font-secondary font-medium">
                  {userError.emailError}
                </p>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="bg-common text-black border-0 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-common transition ease-in-out duration-150"
                  type="password"
                />
                <p className="text-primary text-sm text-start font-secondary font-medium">
                  {userError.passwordError}
                </p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="bg-common text-black border-0 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-common transition ease-in-out duration-150"
                  type="password"
                />
                <p className="text-black mt-4 font-primary font-semibold text-lg">
                  Already have an account?
                  <Link
                    className=" text-primary -200  mt-4 text-lg font-primary"
                    to="/Login"
                  >
                    Sing In
                  </Link>
                </p>
                <button
                  onClick={handelSubmit}
                  className="bg-primary text-white font-semibold font-primary py-2 px-5 rounded-full mt-4"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
