import React, { useState } from "react";
import Header from "./Header";
import { listings } from "./Icons";

const ToolsPage = () => {
  const [search, setSearch] = useState("");
  const keys = ["title", "description"];
  // console.log(listings.filter(listing=>listing.description.toLowerCase().includes("ge")))
  
  const searchHandler = () => {
    return listings.filter((item) =>
      keys.some((keys) => item[keys].toLowerCase().includes(search))
    );
  };

  // const listingComponents =searchHandler()
  //---------- or-----------
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
      <div className="left-1/2 mt-24 flex w-full flex-col absolute -translate-x-1/2">
        <h1 className="text-center text-3xl font-bold mt-6 mb-8">AI TOOLS</h1>

        <input
          className="outline-none border-black border-2 rounded p-1 w-1/2 m-auto"
          type="text"
          placeholder="search here"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          <div className="grid grid-cols-none sm:grid-cols-3 mt-11 lg:grid-cols-5 justify-center mb-6 gap-y-7">
            {listingComponents}
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};

export default ToolsPage;
