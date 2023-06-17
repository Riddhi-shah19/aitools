import React from "react";
import Header from "./Header";
import { AiOutlineSearch } from "react-icons/ai";
import { apis } from "./Api";
import { useState } from "react";
import Sidebar from "./Sidebar";

function ApiList() {
  const [search, setSearch] = useState("");
  const keys = ["title", "description"];

  const searchHandler = () => {
    return listings.filter((item) =>
      keys.some((keys) => item[keys].toLowerCase().includes(search))
    );
  };

  const apiComponents = apis
    .filter((item) =>
      keys.some((keys) => item[keys].toLowerCase().includes(search))
    )
    .map((apis) => (
      <div className="flex " key={apis.id}>
        <img
          className="h-4/6 w-2/6 hover:scale-105 cursor-pointer border-[1px] border-black drop-shadow-xl"
          src={apis.image}
        />
        <div className=" pl-2 w-[10rem] ">
          <a
            className="hover:scale-105 hover:underline cursor-pointer text-center font-bold text-lg"
            href={apis.link}
            target="_blank"
          >
            {apis.title}
          </a>
          <p className="text-sm">{apis.description}</p>
        </div>
      </div>
    ));

  return (
    <>
      <Header />
      <h1 className="text-3xl text-center font-bold mt-[7rem]">
        Find best AI API
      </h1>
      <form className="w-1/2 mt-[1rem] flex justify-between border-black  items-center mx-auto  border p-1 rounded-md text-black bg-transparent ">
        <div>
          <input
            className=" focus:outline-none  w-[300px]   text-black"
            id="searchInput"
            type="text"
            placeholder="search Anything"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <button className="items-center text-black py-[0.2rem]">
            <AiOutlineSearch size={20} className="icon" />
          </button>
        </div>
      </form>

      <Sidebar />

      <div className="flex flex-col  w-full ">
        <div className="pl-[14rem] px-4 grid grid-cols-none sm:grid-cols-2   lg:grid-cols-4   mt-11  justify-center mb-6 gap-y-7">
          {apiComponents}
        </div>
      </div>
    </>
  );
}

export default ApiList;
