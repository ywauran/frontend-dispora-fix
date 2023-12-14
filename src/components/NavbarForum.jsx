import React from "react";
import Dispora1 from "../assets/img/Dispora 1.png";
import Grup2 from "../assets/img/Group 2.png";
const NavbarForum = () => {
  return (
    <>
      <header>
        <div className="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
          <div className="flex">
            <img className="w-72 h-20" src={Dispora1} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-2xl text-red-900">User Forum</h1>
          </div>
          <div className="flex items-center mr-6">
            <img className="h-20" src={Grup2} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarForum;
