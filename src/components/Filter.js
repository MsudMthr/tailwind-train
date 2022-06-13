import React, { useState } from "react";

import chevron from "../assets/SVG/chevron.svg";

const Filter = ({ isOpenFilter, isOpenMenu }) => {
  const [property, setProperty] = useState("House");

  const changeHandler = (event) => {
    setProperty(event.target.id);
  };

  return (
    <section
      className={`absolute z-10  container  bg-[#2d3748] transition   ${
        isOpenFilter ? " top-[130px] " : "-top-[1000%]"
      } ${isOpenMenu && "translate-y-[338px]"} `}
    >
      <div className={`px-2`}>
        {/* set bed and bath and price */}
        <div className="center  flex-wrap gap-x-4 gap-y-8 py-5 sm:flex-nowrap">
          <div>
            <p className="head-title-filter ">Bedrooms</p>
            <button className="btn-filter w-40">
              <span>4</span>{" "}
              <img src={chevron} alt="bedroom" className="w-4 invert " />
            </button>
          </div>
          <div>
            <p className="head-title-filter ">Bathroom</p>
            <button className="btn-filter w-40">
              <span>2</span>{" "}
              <img src={chevron} alt="bathroom" className="w-4 invert" />
            </button>
          </div>
          <div>
            <p className="head-title-filter">Price Range</p>
            <button className="btn-filter  w-[334px] sm:w-[244px]">
              <span>Up to $2,000 /wk</span>{" "}
              <img src={chevron} alt="price" className="w-4 invert" />
            </button>
          </div>
        </div>
        <span className="block h-[1px] w-full bg-[#1a202c]"></span>

        {/* set property for place */}
        <div className="center  mx-5 flex-col py-4 ">
          <p className="head-title-filter mb-4 self-start">Property Type</p>
          {/* radio buttons */}
          <div className="flex w-full sm:justify-start flex-col gap-4 self-start sm:flex-row">
            <label htmlFor="House" className="flex ">
              <input
                type="radio"
                onChange={changeHandler}
                className="hidden"
                name="property"
                id="House"
              />
              <span
                className={` mr-3 h-[26px] w-[26px] rounded-full bg-[#1a202c] transition ${
                  property === "House" &&
                  "border-[8px] border-[#667eea] bg-white "
                } `}
              ></span>
              <span className="text-filter-option">House</span>
            </label>
            <label htmlFor="Apartment" className="flex sm:ml-14">
              <input
                type="radio"
                onChange={changeHandler}
                className="hidden"
                name="property"
                id="Apartment"
              />
              <span
                className={` mr-3 h-[26px] w-[26px] rounded-full  bg-[#1a202c]  transition ${
                  property === "Apartment" &&
                  "border-[8px] border-[#667eea] bg-white"
                } `}
              ></span>
              <span className="text-filter-option">Apartment</span>
            </label>
            <label htmlFor="Loft" className="flex sm:ml-14">
              <input
                type="radio"
                onChange={changeHandler}
                className="hidden"
                name="property"
                id="Loft"
              />
              <span
                className={` mr-3 h-[26px] w-[26px] rounded-full  bg-[#1a202c]  transition ${
                  property === "Loft" &&
                  "border-[8px] border-[#667eea] bg-white "
                } `}
              ></span>
              <span className="text-filter-option">Loft</span>
            </label>
            <label htmlFor="Townhouse" className="flex sm:ml-14">
              <input
                type="radio"
                onChange={changeHandler}
                className="hidden"
                name="property"
                id="Townhouse"
              />
              <span
                className={` mr-3 h-[26px] w-[26px] rounded-full  bg-[#1a202c]  transition ${
                  property === "Townhouse" &&
                  "border-[8px] border-[#667eea] bg-white"
                } `}
              ></span>
              <span className="text-filter-option">Townhouse</span>
            </label>
          </div>
        </div>

        <span className="block h-[1px] w-full bg-[#1a202c]"></span>

        {/* set Amenities checkbox */}
        <div className="mx-5 py-7">
          <p className="head-title-filter">Amenities</p>
          <div className="flex flex-col gap-y-4 sm:flex-row  flex-wrap ">
            <label htmlFor="Balcony" className="">
              <input
                type="checkbox"
                name=""
                className="checkbox-filter transition "
                id="Balcony"
              />
              <span className="text-filter-option ml-3">Balcony</span>
            </label>
            <label htmlFor="Air conditioning" className="sm:ml-10">
              <input
                type="checkbox"
                name=""
                className="checkbox-filter transition "
                id="Air conditioning"
              />
              <span className="text-filter-option ml-3">Air conditioning</span>
            </label>
            <label htmlFor="Pool" className="sm:ml-10">
              <input
                type="checkbox"
                name=""
                className="checkbox-filter transition "
                id="Pool"
              />
              <span className="text-filter-option ml-3">Pool</span>
            </label>
            <label htmlFor="Beach" className="sm:ml-10">
              <input
                type="checkbox"
                name=""
                className="checkbox-filter transition "
                id="Beach"
              />
              <span className="text-filter-option ml-3">Beach</span>
            </label>
            <label htmlFor="Pet friendly" className="sm:ml-10">
              <input
                type="checkbox"
                name=""
                className="checkbox-filter transition "
                id="Pet friendly"
              />
              <span className="text-filter-option ml-3">Pet friendly</span>
            </label>
            <label htmlFor="Kid friendly" className="sm:ml-10">
              <input
                type="checkbox"
                name=""
                className="checkbox-filter transition "
                id="Kid friendly"
              />
              <span className="text-filter-option ml-3">Kid friendly</span>
            </label>
            <label htmlFor="Parking" className="sm:ml-10">
              <input
                type="checkbox"
                name=""
                className="checkbox-filter transition "
                id="Parking"
              />
              <span className="text-filter-option ml-3">Parking</span>
            </label>
          </div>
        </div>

        {/* update result button */}
      </div>
      <div className=" center sm:justify-start h-20 w-full bg-[#1a202c] ">
        <button className="h-10 w-[338px] sm:w-36 sm:ml-5  rounded-lg bg-[#667eea] font-medium text-white">
          Update results
        </button>
      </div>
    </section>
  );
};

export default Filter;
