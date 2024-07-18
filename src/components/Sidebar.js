import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSideBarOpen } = useSelector((store) => store.user);

  if (!isSideBarOpen) return null;

  return (
    <div className="w-48 shadow-lg p-5 cursor-pointer ">
      <ul>
        <Link to={"/"}>
          <li className="hover:bg-slate-100">Home</li>
        </Link>
        <li className="hover:bg-slate-100">Shorts</li>
        <li className="hover:bg-slate-100">Subscription</li>
        <li className="hover:bg-slate-100">Movies</li>
      </ul>
      <hr className="h-[1px] my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li className="hover:bg-slate-100">Music</li>
        <li className="hover:bg-slate-100">Sports</li>
        <li className="hover:bg-slate-100">Gaming</li>
        <li className="hover:bg-slate-100">Movies</li>
      </ul>

      <hr className="h-[1px] my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li className="hover:bg-slate-100">Music</li>
        <li className="hover:bg-slate-100">Sports</li>
        <li className="hover:bg-slate-100">Gaming</li>
        <li className="hover:bg-slate-100">Movies</li>
      </ul>

      <hr className="h-[1px] my-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li className="hover:bg-slate-100 ">Music</li>
        <li className="hover:bg-slate-100">Sports</li>
        <li className="hover:bg-slate-100">Gaming</li>
        <li className="hover:bg-slate-100">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
