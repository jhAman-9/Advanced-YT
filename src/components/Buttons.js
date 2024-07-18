import React from "react";

const Buttons = ({name}) => {
  return (
      <div className="">
          <button className="m-2 bg-slate-100 px-2 py-1 rounded-t-md cursor-pointer hover:bg-slate-200">{name}</button>
    </div>
  );
};

export default Buttons;
