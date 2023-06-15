import { React } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 flex justify-between w-[100%]  items-center h-20 px-4 z-10 text-white bg-slate-900">
        <div>
          <Link to="/Hero">
            <img className="h-16" src="/assets/images/logo.jpg" alt="" />
          </Link>
        </div>

        <ul className="flex">
        <Link to="/Hero">
            <li className="px-4">
              <button className="cursor-pointer">Home</button>
            </li>
          </Link>
          <li>
            <Link to="/ToolsPage">
              {" "}
              <button className="cursor-pointer">AI TOOLS</button>
            </Link>
          </li>
          <Link to="/ApiList">
            <li className="px-4">
              <button className="cursor-pointer">AI API</button>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
