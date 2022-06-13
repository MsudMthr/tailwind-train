import React from "react";
import profileImage from "../assets/images/profileImage.png";

const Menu = ({ isOpenMenu }) => {
  return (
    <div
      className={`absolute left-0 -z-10 flex w-full     flex-col bg-[#1A202C] text-white transition sm:static sm:z-50 sm:flex sm:items-center ${
        isOpenMenu ? "top-[71px]" : "-top-[1000%]"
      }`}
    >
      <div className={`items-center sm:flex sm:justify-end w-full`}>
        <ul className="py-4 pl-5 sm:flex sm:gap-5 ">
          <li className="menu-link">List your property</li>
          <li className="menu-link">Trips</li>
          <li className="menu-link">Messages</li>
        </ul>
        <span className="h-[1px] w-full bg-[#2D3748] sm:hidden"></span>
        <ul className="py-4 pl-5 sm:pl-0 ">
          <div className="mb-7 flex items-center sm:mb-0">
            <img src={profileImage} alt="profile" className="sm:ml-8"/>
            <p className="menu-link pl-5 font-medium text-[#edf2f7] sm:hidden">
              Isla Schoger
            </p>
          </div>
          <li className="menu-link sm:hidden">Account Settings</li>
          <li className="menu-link sm:hidden">Sign out</li>
          <li className="menu-link sm:hidden">Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
