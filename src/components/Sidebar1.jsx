import React, { useState } from "react";
import { ToolData } from "./ToolData";
import { Scrollbars } from "react-custom-scrollbars";
import { listings } from "./Icons";

const Sidebar1 = () => {
  // const [data, setData] = useState(listings);

  const filterResult = (item) => {
    const result = listings.filter((curData) => {
      return curData.category === item;
    });
    setData(result);
    console.log(result);
  };
  
  return (
    <>
      <div className="fixed">
        <nav className="h-[560px] w-[250px] flex">
          <Scrollbars style={{ width: 400, height: 450 }}>
            <ul className="h-auto p-0 w-full ">
              {ToolData.map((val, key) => {
                return (
                  <li
                    className="w-[100%] h-[35px] text-gray-600 justify-center text-left p-3 "
                    key={key}
                  >
                    <button onClick={() => filterResult(val.title)}>
                      {val.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Scrollbars>
        </nav>
      </div>

      <div className="pl-[14rem] px-4 grid grid-cols-none sm:grid-cols-2 lg:grid-cols-4 mt-11 justify-center mb-6 gap-y-7">
        {/* this data is of use state */}
        {data.map((listing) => {
          return (
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
          );
        })}
      </div>
    </>
  );
};

export default Sidebar1;
