import React from "react";
<<<<<<< HEAD

const Ai_tools = ({ data }) => {
  const listingComponents = data.map((listing) => (
    <div className="flex flex-col gap-3" key={listing.id}>
      <img
        className=" m-auto w-2/4 border-[1px] border-solid border-black rounded-[50%] "
        src={listing.image}
      />
      <a
        className="hover:scale-105 hover:underline cursor-pointer text-center mt-2 text-xl font-bold"
=======
import { Link } from "react-router-dom";

const Ai_tools = ({ data }) => {
  const listingComponents = data.slice(0, 14).map((listing) => (
    <div className="flex flex-col gap-1" key={listing.id}>
      <img
        className=" m-auto w-36 border-solid border-[1px] border-black rounded-[50%]"
        src={listing.image}
      />
      <a
        className="hover:scale-105 hover:underline cursor-pointer text-center mt-2 text-xl"
>>>>>>> 2f8f936c91a5b7cfaf2f3024c58da9dc23debfac
        href={listing.link}
        target="_blank"
      >
        {listing.title}
      </a>
<<<<<<< HEAD
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
=======
      <p className="text-center">{listing.description}</p>
    </div> 
      
  ));
  return (
    <>
      <div id="aitools" className="w-full">
        <h1 className="text-center text-3xl font-bold mt-6 mb-8">AI TOOLS</h1>
        <div className="grid grid-cols-none sm:grid-cols-3 lg:grid-cols-5  justify-center mb-6 gap-y-7">
          {listingComponents}
         <Link to='/ToolsPage' className="m-auto text-blue-700"> <button>See More </button></Link>
        </div>
      </div>
    </>
>>>>>>> 2f8f936c91a5b7cfaf2f3024c58da9dc23debfac
  );
};

export default Ai_tools;
