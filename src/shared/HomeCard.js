import React from "react";

import modernHome from "../assets/images/modernHome.png";
import star from "../assets/SVG/star.svg";

const HomeCard = () => {


  return (
    <section className="center relative flex-col">
      <img
        src={modernHome}
        alt="home"
        className="h-[280px] w-[340px] rounded-xl  shadow-xl"
      />
      <div className="absolute -bottom-16 flex h-[144px] w-[320px]  flex-col rounded-lg bg-white p-5 shadow-xl">
        <div className="flex w-full items-center">
          <p className=" detail-home-card rounded-full bg-[#B2F5EA] py-1 px-2  text-[#285e61]  ">
            PLUS
          </p>
          <p className="detail-home-card text-[#718096]">3 BEDS •</p>
          <p className="detail-home-card text-[#718096]">2 BATH</p>
        </div>
        <h5 className="text-lg font-medium my-1">Modern home in city center</h5>
        <p className="">
          $1,400 <span className="text-[#718096] text-sm ">/wk</span>
        </p> 
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={star} alt="star" className="star-home-card"/>
            <img src={star} alt="star" className="star-home-card"/>
            <img src={star} alt="star" className="star-home-card"/>
            <img src={star} alt="star" className="star-home-card"/>
            <img src={star} alt="star" className="star-home-card"/>
          </div>
          <p className="text-[#718096] text-sm ml-2">34 Reviews</p>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
