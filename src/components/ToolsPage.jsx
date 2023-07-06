import React, { useState } from "react";
import Header from "./Header";
import { listings } from "./Icons";
import Sidebar1, { data } from "./Sidebar1";
import { AiOutlineSearch } from "react-icons/ai";

const ToolsPage = () => {
  const [search, setSearch] = useState("");
  const keys = ["title", "description"];

  const searchHandler = () => {
    return listings.filter((item) =>
      keys.some((keys) => item[keys].toLowerCase().includes(search))
    );
  };
 
  const listingComponents = listings
    .filter((item) =>
      keys.some((keys) => item[keys].toLowerCase().includes(search))
    )
    .map((listing) => (
      <div className="flex flex-col gap-1" key={listing.id}>
        <img
          className=" m-auto w-36 border-solid border-[1px] border-black rounded-[50%]"
          src={listing.image}
        />
        <a
          className="hover:scale-105 hover:underline cursor-pointer text-center mt-2 text-xl"
          href={listing.link}
          target="_blank"
        >
          {listing.title}
        </a>
        <p className="text-center">{listing.description}</p>
      </div>
    ));

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-[7rem] ">
        Find best AI TOOLS
      </h1>
      <form className="w-1/2 mt-[1rem] flex justify-between border-black  items-center mx-auto  border p-1 rounded-md text-black bg-transparent ">
        <div>
          <input
            className=" focus:outline-none  w-[300px]  text-black"
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
      <Sidebar1 />
      <div className="flex flex-col w-full">
        <div className="pl-[14rem] px-4 grid grid-cols-none sm:grid-cols-2 lg:grid-cols-4 mt-11 justify-center mb-6 gap-y-7">
          {listingComponents}
        </div>
      </div>
      <Header />
      
    </>
  );
};

export default ToolsPage;
