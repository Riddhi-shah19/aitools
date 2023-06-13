import React from "react";

const AI_API = ({ data }) => {
  const apiComponents = data.map((apis) => (
    <div className="flex " key={apis.id}>
      <img
        className="h-[7rem] w-[10rem] hover:scale-105 cursor-pointer drop-shadow-2xl"
        src={apis.image}
      />
      <div className="text-white p-[10px] w-[12rem] ">
        <a
          className="hover:scale-105 hover:underline cursor-pointer text-center mt-2 text-xl"
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
    <div id="apitools">
      <div className="bg-gray-600 p-[1rem]">
        <div>
          <h1 className="text-center text-4xl font-bold text-white">AI API</h1>
        </div>
        <div className="grid grid-cols-5 gap-y-[40px] gap-x-1 mt-[35px] ">
          {apiComponents}
        </div>
      </div>
      </div>
    </>
  );
};

export default AI_API;
