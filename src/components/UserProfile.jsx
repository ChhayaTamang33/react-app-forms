import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDriveFolderUpload } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import profile from "../static/profile.png";

function ViewProfile() {
  return (
    <div className="flex flex-col m-3 bg-gray-100 border-2 border-gray-300">
      <div className="px-5 py-2 bg-orange-500">
        <p className="text-2xl font-bold text-center text-white">
          Update your KYC
        </p>
      </div>
      <div className="flex flex-col items-center justify-center md:items-start">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col items-center justify-center text-lg md:flex-row md:items-start md:ml-2 md:w-1/2">
            <div>
              <img
                className="p-3 border-2 border-gray-200 rounded-md"
                src={profile}
                alt="profile"
              ></img>
              <button className="p-2 mx-2 text-white bg-orange-500 rounded text-small focus:outline-none hover:bg-orange-600">
                <AiOutlineEdit />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-3 ml-3 text-lg md:items-start ">
              <h1 className="text-xl font-bold text-blue-500">
                Chetan Neupane{" "}
              </h1>
              <h1 className="mb-2 text-gray-500"> Individual</h1>
              <div className="flex">
                <h1 className="mb-2 text-gray-500">98578787 </h1>
                <p className="mb-2 text-gray-500">|</p>
                <h1 className="mb-2 text-gray-500"> cn@gmail.com</h1>
              </div>
              <h1 className="mb-2 text-gray-500">Member Since :- 2021/20/4</h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full m-2 border-gray-200 md:border-l-2 md:items-start md:px-5 md:w-1/2">
            <div className="">
              <h1 className="text-xl font-bold text-blue-500">Documents</h1>
              <h3 className="text-lg text-gray-500">CitizenShip</h3>
            </div>
            <div className="flex">
              <div className="container p-3 my-2 mr-2 border-2 border-gray-200">
                <MdDriveFolderUpload />
              </div>
              <div className="container p-3 m-2 border-2 border-gray-200">
                <MdDriveFolderUpload />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full p-5 mt-2 mb-16 border-gray-300 md:flex-row border-y-2 md:mx-5">
          <div className="flex flex-col items-center justify-center text-lg md:items-start md:w-1/2 md:ml-5">
            <h1 className="text-xl font-bold text-blue-500">Payment Account</h1>
            <div className="flex items-center">
              <p className="text-gray-500">eSewa: Chetan Neupane </p>
              <button className="p-2 mx-2 text-white bg-orange-500 rounded text-small focus:outline-none hover:bg-orange-600">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center m-2 text-lg border-gray-300 md:px-5 md:w-1/2 md:border-l-2 md:items-start">
            <div className="flex">
              <h1 className="text-xl font-bold text-blue-500">
                Your Digital Wallet
              </h1>
              <h3 className="text-xs text-gray-500">*Your remaining balance</h3>
            </div>
            <p className="text-black">Balance: 10,000/- </p>
          </div>
        </div>
      </div>
    </div>
  );
  {
  }
}
export default ViewProfile;
