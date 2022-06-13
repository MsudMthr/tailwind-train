import React, { useState, useEffect } from "react";
import HomeCard from "../shared/HomeCard";

import darkLogo from "../assets/images/darkLogo.png";
import search from "../assets/SVG/search.svg";
import filterIcon from "../assets/SVG/filterIcon.svg";

import Menu from "../components/Menu";
import Burger from "../components/Burger";
import Filter from "../components/Filter";

const HomePage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="relative z-30 flex items-center justify-between bg-gray-900 px-4 py-5 sm:static sm:bg-[#1A202C]">
        <img src={darkLogo} alt="Workcation" />
        <Burger
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          setIsOpenFilter={setIsOpenFilter}
        />
        <Menu isOpenMenu={isOpenMenu} />
      </div>
      <div
        className={`relative z-30 flex h-[60px] items-center justify-between bg-[#2d3748] transition ${
          isOpenMenu && "translate-y-[338px]"
        }`}
      >
        <label htmlFor="search" className="relative ml-2 flex items-center">
          <img src={search} alt="search" className="absolute pl-3 " />
          <input
            type={"text"}
            id="search"
            className={`h-10 w-[217px] rounded-lg bg-[#1a202c] pl-11 text-[#A0AEC0] outline-none placeholder:text-[#A0AEC0] `}
            placeholder="Search by keywords"
          />
        </label>
        <button
          className="center mr-2 h-10 w-[104px] rounded-lg bg-[#4a5568]"
          onClick={() => {
            setIsOpenFilter(!isOpenFilter);
            setIsOpenMenu(false);
          }}
        >
          <img src={filterIcon} alt="filter" />
          <span className="ml-2 font-medium text-white ">Filters</span>
        </button>
      </div>
      <Filter isOpenFilter={isOpenFilter} isOpenMenu={isOpenMenu} />
      <main
        className={`mt-8 px-4 transition ${isOpenMenu && "translate-y-[338px]"}
        
        ${isOpenFilter && "translate-y-[850px] sm:translate-y-[450px]"}`}
      >
        <h5 className="text-xl text-[#1a202c]">Los Angeles</h5>
        <p className="mb-5 text-[#718096]">
          Live like the stars in these luxurious Southern California estates.
        </p>
        <div className="center flex-wrap gap-y-14 gap-x-5  ">
          <HomeCard plus={true} />
          <HomeCard plus={true} />
          <HomeCard plus={false} />
          <HomeCard plus={true} />
          <HomeCard plus={false} />
          <HomeCard plus={true} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
