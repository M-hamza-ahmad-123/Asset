import React from "react";
import { useState } from "react";
import { Loader } from "../utils/loader";
import { GoogleSignUpButton } from "../utils/GoogleSignUpButton";
import { useNavigate } from "react-router-dom";
import LeftSideMenu from "../main/leftSideMenu";

export const Signup = () => {
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setIsLoading(!isloading);
    setTimeout(() => {
      navigate("/mainpage");
    }, 300);
  };
  const gotoLogin = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-orange-900 via-gray-800 to-teal-900 flex justify-center items-center">
      <div className="bg-opacity-40 bg-black backdrop-blur-lg w-3/12 h-2/3 p-8 rounded-lg shadow-lg flex flex-col justify-start items-center">
        <h1 className="text-white text-3xl font-semibold mb-10 mt-1 relative">
          SIGN UP
        </h1>{" "}
        <div className="flex flex-col justify-start items-center w-full">
          <div className=" mt-5 w-10/12">
            {" "}
            {/* Increased input width */}
            <input
              className="shadow appearance-none border-2 border-teal-400 rounded-full w-full py-4 px-4 text-white bg-black focus:outline-none  focus:border-orange-300"
              id="username"
              type="text"
              placeholder="             Enter your Email"
            />
          </div>
          <div className="mt-5 w-10/12">
            {" "}
            {/* Increased input width */}
            <input
              className="shadow appearance-none border-2 border-teal-400 rounded-full w-full py-4 px-4 text-white bg-black focus:outline-none  focus:border-orange-300"
              id="password"
              type="password"
              placeholder="             Enter your password"
            />
          </div>
          <div className="mt-2 w-10/12 text-right">
            <span href="" className="text-teal-300 hover:text-teal-400">
              Forgot Password?
            </span>
          </div>
          <div className=" mt-7  mb-4"></div> {/* Space between inputs */}
          {!isloading ? (
            <button
              className="bg-black-600 border-2 hover:border-orange-400 wl text-white font-bold py-4 px-4 rounded-full w-44     "
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          ) : (
            <Loader></Loader>
          )}
        </div>
        <div className="mt-14">
          <GoogleSignUpButton></GoogleSignUpButton>
        </div>
        <button
          onClick={gotoLogin}
          className="text-gray-500 text-sm hover:underline"
        >
          Already have an Account? Login
        </button>
      </div>
    </div>
  );
};
