import React from "react";

const Ai_tools = ({ data }) => {
  const listingComponents = data.map((listing) => (
    <div className="flex flex-col gap-3" key={listing.id}>
      <img
        className=" m-auto w-2/4 border-[1px] border-solid border-black rounded-[50%] "
        src={listing.image}
      />
      <a
        className="hover:scale-105 hover:underline cursor-pointer text-center mt-2 text-xl font-bold"
        href={listing.link}
        target="_blank"
      >
        {listing.title}
      </a>
      <p className="text-center text-xl">{listing.description}</p>
    </div>
  ));
  return (
    <div id="aitools">
      <h1 className="text-center text-3xl font-bold mt-6 mb-8">AI TOOLS</h1>
      <div className="grid grid-cols-none sm:grid-cols-3  lg:grid-cols-5  justify-center mb-6 gap-y-7">
        {listingComponents}
      </div>
    </div>
  );
};

export default Ai_tools;
