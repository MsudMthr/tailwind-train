import React from "react";

import filterIcon from "../assets/SVG/filterIcon.svg";

const Filter = () => {
  return (
    <div>
      <button className="center mr-3 h-10 w-[104px] rounded-lg bg-[#4a5568]">
        <img src={filterIcon} alt="filter" />
        <span className="ml-2 font-medium text-white ">Filters</span>
      </button>
    </div>
  );
};

export default Filter;
