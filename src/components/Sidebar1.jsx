import React from 'react';
import { ToolData } from './ToolData';
import { Scrollbars } from 'react-custom-scrollbars';

function Sidebar1() {
  return (
    <>
     
    <div className="fixed ">
   
    <nav className="h-[560px] w-[250px] flex">
    <Scrollbars style={{ width: 400, height: 450 }}>
      <ul className="h-auto p-0 w-full ">
        {ToolData.map((val, key) => {
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
  )
}

export default Sidebar1
