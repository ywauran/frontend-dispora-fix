import React from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
const HeaderForum = () => {
  return (
    <>
      <header className="header header-expand-md flex items-center justify-between top-0 z-50 fixed sticky px-4 py-2 ">
        <div>
          <img src={Dispora1} alt="" className="ml-24" />
        </div>
        <div className="flex  items-center space-x-4">
          <h2 className="text-black text-[35px] mr-10">USER FORUM</h2>
        </div>
      </header>
    </>
  );
};

export default HeaderForum;
