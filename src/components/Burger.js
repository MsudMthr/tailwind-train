import React from "react";

const Burger = ({ isOpenMenu, setIsOpenMenu, setIsOpenFilter }) => {
  return (
    <div
      className="flex h-[14px] w-[18px] flex-col justify-between sm:hidden"
      onClick={() => {
        setIsOpenMenu(!isOpenMenu);
        setIsOpenFilter(false);
      }}
    >
      <span
        className={`menu-burger-line transition ${isOpenMenu && "rotate-45"}`}
      ></span>
      <span
        className={`menu-burger-line transition ${
          isOpenMenu && "translate-x-full opacity-0"
        }`}
      ></span>
      <span
        className={`menu-burger-line transition ${isOpenMenu && "-rotate-45"}`}
      ></span>
    </div>
  );
};

export default Burger;
