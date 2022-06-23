import React from "react";
import { useState } from "react";

function CreateServer() {
  return (
    <form className="m-3 bg-gray-100 border-2 border-gray-300">
      <div className="flex flex-col justify-center ">
        <p className="text-2xl text-center">Create Server</p>
        <hr className=""></hr>
      </div>

      <div className="flex flex-col w-full md:flex-row ">
        <div className="flex flex-col m-2 border-r-2 border-gray-200 md:w-1/3">
          <h1 className="ml-3 font-black text-bold ">Server Details</h1>
          <div className="flex flex-col m-2">
            <label className="ml-2 text-sm text-gray-500" htmlFor="serverName">
              Server Name
            </label>
            <input
              className="p-2 border-2 border-gray-300 rounded-md"
              placeholder=" Server Name..."
              name="serverName"
            />
          </div>
          <div className="flex flex-col m-2">
            <label
              className="ml-2 text-sm text-gray-500"
              htmlFor="serverRegion"
            >
              Server Region
            </label>
            <input
              className="p-2 border-2 border-gray-300 rounded-md"
              name="serverRegion"
              placeholder="eg.Singapore"
            />
          </div>
        </div>

        <div className="flex flex-col m-2 border-r-2 border-gray-200 md:w-1/3">
          <h1 className="ml-3 font-black text-bold ">Image</h1>
          <div className="flex flex-col m-2">
            <label className="ml-2 text-sm text-gray-500" htmlFor="imageType">
              Images Types
            </label>
            <input
              className="p-2 border-2 border-gray-300 rounded-md"
              name="imageType"
              placeholder="eg. Linux/ Appliances"
            />
          </div>
          <div className="flex flex-col m-2">
            <label
              className="ml-2 text-sm text-gray-500"
              htmlFor="operatingSystem"
            >
              Operating System
            </label>
            <input
              className="p-2 border-2 border-gray-300 rounded-md"
              name="operatingSystem"
              placeholder="eg. centOS"
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="ml-2 text-sm text-gray-500" htmlFor="version">
              Version
            </label>
            <input
              className="p-2 border-2 border-gray-300 rounded-md"
              name="version"
              placeholder="eg. 13.08.14"
            />
          </div>
        </div>

        <div className="flex flex-col m-2 md:w-1/3">
          <h1 className="ml-3 font-black text-bold ">Flavor</h1>
          <div className="flex flex-col m-2">
            <label className="ml-2 text-sm text-gray-500" htmlFor="FlavorClass">
              Flavor Class
            </label>
            <input
              className="p-2 border-2 border-gray-300 rounded-md"
              name="flavorClass"
              placeholder="General Purpose"
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="ml-2 text-sm text-gray-500" htmlFor="Flavor">
              Flavor
            </label>
            <input
              className="p-2 border-2 border-gray-300 rounded-md"
              name="flavor"
              placeholder="eg. CentOS"
            />
          </div>
          <div className="flex flex-col m-2">
            <label className="ml-2 text-sm text-gray-500" htmlFor="description">
              Description
            </label>
            <input
              className="p-2 border-2 border-gray-300 rounded-md "
              placeholder="lorem ipsum is a simply dummy language"
              name="description"
            />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-center">
        <div className="m-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-2 m-1 text-sm leading-tight text-white bg-green-400 rounded-lg hover:bg-green-500 focus:outline-none"
          >
            Proceed To pay
          </button>
        </div>
        <div className="m-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-10 py-2 m-1 text-sm leading-tight text-white bg-green-400 rounded-lg hover:bg-green-500 focus:outline-none"
          >
            Cancle
          </button>
        </div>
      </div>
    </form>
  );
}
export default CreateServer;
