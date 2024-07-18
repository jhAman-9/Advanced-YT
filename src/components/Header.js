import React from "react";
import { FaSearch, FaUser, FaVideo } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="grid grid-flow-col shadow cursor-pointer">
      <div className="col-span-1 flex ml-3 my-3">
        <IoReorderThreeOutline
          className="w-10 h-10 mr-2"
          onClick={handleClick}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
          alt="yt-logo"
          className="w-28 p-2"
        />
      </div>

      <div className="col-span-9 my-3 flex justify-center items-center">
        <input type="text" className="w-1/2 h-8 rounded-l-full bg-gray-100" />
        <FaSearch className="h-8 rounded-r-full w-6 shadow-sm bg-gray-100 p-1" />
      </div>
      <div className="col-span-2 flex my-3 justify-center items-center">
        <FaVideo className="mx-10" />
        <FaUser />
      </div>
    </div>
  );
};

export default Header;
