import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  const btnLists = [
    "All",
    "Movies",
    "Funny",
    "Cricket",
    "Songs",
    "Horror",
    "Live",
    "Bajan",
    "Geet",
    "Football",
  ];
  return (
    <div className="flex gap-5">
      {btnLists.map((btn, index) => (
        <Buttons key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
