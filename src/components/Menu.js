import React from "react";
import profileImage from "../assets/images/profileImage.png";

const Menu = ({ isOpen }) => {
  return (
    <div
      className={`absolute top-[71px] left-0 flex w-full flex-col bg-[#1A202C] text-white transition ${
        !isOpen && "-top-[1000%]"
      }`}
    >
      <ul className="py-4 pl-5">
        <li className="menu-link">List your property</li>
        <li className="menu-link">Trips</li>
        <li className="menu-link">Messages</li>
      </ul>
      <span className="h-[1px] w-full bg-[#2D3748]"></span>
      <ul className="py-4 pl-5">
        <div className="mb-7 flex items-center">
          <img src={profileImage} alt="profile" />
          <p className="menu-link pl-5 font-medium text-[#edf2f7]">
            Isla Schoger
          </p>
        </div>
        <li className="menu-link">Account Settings</li>
        <li className="menu-link">Sign out</li>
        <li className="menu-link">Support</li>
      </ul>
    </div>
  );
};

export default Menu;
