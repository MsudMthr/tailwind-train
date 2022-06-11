import React, { useState } from "react";
import HomeCard from "../shared/HomeCard";

import darkLogo from "../assets/images/darkLogo.png";
import search from "../assets/SVG/search.svg";

import Menu from "../components/Menu";
import Burger from "../components/Burger";
import Filter from "../components/Filter";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="relative flex items-center justify-between bg-gray-900 px-4 py-5 sm:static">
        <img src={darkLogo} alt="Workcation" />
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} />
      </div>
      <div
        className={`flex h-[60px] items-center justify-between bg-[#2d3748] transition ${
          isOpen && "translate-y-[338px]"
        }`}
      >
        <label htmlFor="search" className="relative ml-4 flex items-center">
          <img src={search} alt="search" className="absolute pl-3 " />
          <input
            type={"text"}
            id="search"
            className={`h-10 w-[217px] rounded-lg bg-[#1a202c] pl-11 text-[#A0AEC0] outline-none placeholder:text-[#A0AEC0] `}
            placeholder="Search by keywords"
          />
        </label>
        <Filter />
      </div>
    </div>
  );
};

export default HomePage;
