import React from "react";

const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="flex h-[14px] w-[18px] flex-col justify-between sm:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`menu-burger-line transition ${isOpen && "rotate-45"}`}
      ></span>
      <span
        className={`menu-burger-line transition ${
          isOpen && "translate-x-full opacity-0"
        }`}
      ></span>
      <span
        className={`menu-burger-line transition ${isOpen && "-rotate-45"}`}
      ></span>
    </div>
  );
};

export default Burger;
