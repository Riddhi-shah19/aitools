import React from "react";
import Header from "./Header";
import { AiOutlineSearch } from "react-icons/ai";
import { ApiData } from "./ApiData";

function ApiList() {
  return (
    <>
      <Header />

      <div className="flex mt-[5rem] ">
        <div className="h-[560px] w-[200px] bg-gray-600">
          <ul className="h-auto p-0 w-[100%] ">
            {ApiData.map((val, key) => {
              return (
                <li
                  className="w-[100%] h-[40px] border-[1px] border-solid border-black justify-center text-center text-white"
                  key={key}
                >
                  {val.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col w-sull">
          <h1 className="text-3xl ml-[30rem] font-bold mt-4">
            Find best AI API
          </h1>
          <form className="ml-[18rem] mt-[1rem] flex justify-between border-black  items-center max-w-[250px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[600px] mx-auto w-full border p-1 rounded-md text-black bg-transparent ">
            <div>
              <input
                className=" focus:outline-none  w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]  text-black"
                id="searchInput"
                type="text"
                placeholder="search Anything"
              />
            </div>
            <div>
              <button className="items-center text-black py-[0.2rem]">
                <AiOutlineSearch size={20} className="icon" />
              </button>
            </div>
          </form>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="flex  ">
              <img src="/assets/images/tts.png" />
              <div className=" mt-4">
                <h2 className="font-bold text-2xl">TEXT TO SPEECH</h2>
                <p className="text-sm"> Text to speech</p>
              </div>
            </div>
            <div className="flex  ">
              <img src="/assets/images/tts.png" />
              <div className=" mt-4">
                <h2 className="font-bold text-2xl">TEXT TO SPEECH</h2>
                <p className="text-sm"> Text to speech</p>
              </div>
            </div>
            <div className="flex  ">
              <img src="/assets/images/tts.png" />
              <div className=" mt-4">
                <h2 className="font-bold text-2xl">TEXT TO SPEECH</h2>
                <p className="text-sm"> Text to speech</p>
              </div>
            </div>
            <div className="flex  ">
              <img src="/assets/images/tts.png" />
              <div className=" mt-4">
                <h2 className="font-bold text-2xl">TEXT TO SPEECH</h2>
                <p className="text-sm"> Text to speech</p>
              </div>
            </div>
            <div className="flex  ">
              <img src="/assets/images/tts.png" />
              <div className=" mt-4">
                <h2 className="font-bold text-2xl">TEXT TO SPEECH</h2>
                <p className="text-sm"> Text to speech</p>
              </div>
            </div>
            <div className="flex  ">
              <img src="/assets/images/tts.png" />
              <div className=" mt-4">
                <h2 className="font-bold text-2xl">TEXT TO SPEECH</h2>
                <p className="text-sm"> Text to speech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiList;
