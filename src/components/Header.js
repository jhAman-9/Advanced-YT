import React, { useEffect, useState } from "react";
import { FaSearch, FaUser, FaVideo } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../store/userSlice";
import { YOUTUBE_SEARCH_SEGGESTION } from "../utils/constants";
import { cacheResults } from "../store/searchSlice";
import { json } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuerySuggestion, setSearhQuerySuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // Make a api call for every key press for search suggestion after a 200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearhQuerySuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    // stoping the function call for every key press, call one time after a specific given timeout
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const res = await fetch(YOUTUBE_SEARCH_SEGGESTION + searchQuery);
    const data = await res.json();
    setSearhQuerySuggestion(data[1]);
    
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

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

      <div className="my-3 col-span-10">
        <div className="flex">
          <input
            type="text"
            className="w-1/2 h-8 rounded-l-full bg-gray-100 p-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <FaSearch className="h-8 rounded-r-full w-6 shadow-sm bg-gray-100 p-1" />
        </div>

        {showSuggestion && (
          <div className="mt-1">
            <ul className="fixed w-[37rem] bg-white text-black rounded-lg shadow-lg">
              {searchQuerySuggestion?.map((suggestion, index) => (
                <li
                  className="p-2 rounded-lg hover:bg-gray-100 flex"
                  key={index}
                >
                  <FaSearch className="m-1" /> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex my-3 justify-center items-center">
        <FaVideo className="mx-10" />
        <FaUser />
      </div>
    </div>
  );
};

export default Header;
