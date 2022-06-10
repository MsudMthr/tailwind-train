import React from "react";

import logo from "../assets/images/lightLogo.png";
import workWomen from "../assets/images/workWomen.png";

const Work = () => {
  return (
    <section className="container mx-auto h-screen px-11 pt-[51px] pb-[83px] md:px-24 lg:relative lg:pr-0 lg:pl-12 lg:pt-0">
      <div className=" flex  h-screen flex-col items-center justify-center lg:flex-row-reverse ">
        <img
          src={logo}
          alt="logo"
          className="top-[115px] left-12 mb-9 h-9 w-[218px] self-start lg:absolute"
        />
        <div className="path lg:w-[1200px] xl:w-[1500px]">
          {" "}
          <img src={workWomen} alt="work in anywhere" className="women-work" />
        </div>
        <div className="h-60">
          <h1 className="mt-9 text-3xl font-semibold sm:text-4xl sm:leading-[43.2px] xl:text-5xl">
            You can work from anywhere.
            <span className="text-indigo-500  "> Take advantage of it</span>.
          </h1>
          <p className="mt-4 text-xl text-[#718096] sm:leading-[30px]">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you’re not on
            vacation.
          </p>
          <button className="mt-8 self-start rounded-lg bg-indigo-500 p-3 text-base font-medium uppercase tracking-[1px] text-white">
            Book your escape
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
