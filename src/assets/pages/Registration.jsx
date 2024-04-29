import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
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
    // let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!name) {
      setUserError({ nameError: "Name is Required!" });
    } else if (!email) {
      setUserError({ emailError: "Email is Required!" });
    } else if (!password) {
      setUserError({ passwordError: "password is Required!" });
    }
    // else if (!re.test(password)) {
    //   setUserError({
    //     passwordError:
    //       "contains at least one number (0-9) or a symbol both lower (a-z) and upper case letters (A-Z)",
    //   });
    // }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser);
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "/profile.png",
          }).then((res) => {
            toast.success("Registration successful, please verify your email", {
              position: "top-center",
              autoClose: 2000,
              closeOnClick: true,
              theme: "light",
            });
            SetName("");
            SetEmail("");
            setPassword("");
            setUserError("");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          });
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
      <div className="container flex items-center justify-center ">
        <ToastContainer />
        <div>
          <div className=" mt-10 bg-white rounded-lg shadow-md p-6">
            <img src="/c.png" alt="" className="w-52  ml-11" />
            <h2 className="text-lg  font-semibold font-secondary uppercase text-black mb-4">
              Get started with easily Sign Up
            </h2>
            <div className="flex flex-col">
              <div className="flex space-x-4 mb-4">
                <input
                  value={name}
                  onChange={(e) => SetName(e.target.value)}
                  placeholder="Full Name"
                  className="bg-common text-black border-0 rounded-md p-2  font-normal font-secondary outline-none min-w-full"
                  type="text"
                />
                <p className="text-primary text-sm text-start font-secondary font-medium">
                  {userError.nameError}
                </p>
              </div>
              <input
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="E-mail"
                className="bg-common text-black border-0 font-normal font-secondary rounded-md p-2 mb-4 outline-none"
                type="email"
              />
              <p className="text-primary text-sm text-start font-secondary font-medium">
                {userError.emailError}
              </p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="bg-common text-black border-0 font-normal font-secondary rounded-md p-2 mb-4 outline-none"
                type="password"
              />
              <p className="text-primary text-sm text-start font-secondary font-medium">
                {userError.passwordError}
              </p>

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
                className="bg-primary text-white text-lg font-semibold font-secondary py-2 px-5 rounded-full mt-4"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
