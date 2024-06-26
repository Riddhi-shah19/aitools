import React from "react";
import { ApiData } from "./ApiData";
import { Scrollbars } from "react-custom-scrollbars";

function Sidebar() {
  return (
    <>
      <div className="fixed ">
        <nav className="h-[560px] w-[200px] flex">
          <Scrollbars style={{ width: 400, height: 450 }}>
            <ul className="h-auto p-0 w-full ">
              {ApiData.map((val, key) => {
                return (
                  <li
                    className="w-[100%] h-[35px] text-gray-600 justify-center text-left p-3 "
                    key={key}
                  >
                    {val.title}
                  </li>
                );
              })}
            </ul>
          </Scrollbars>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
