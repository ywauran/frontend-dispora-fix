import React from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Copyofdispora from "../../assets/img/Copy of Dispora (1) 1.png";

const HomeAdmin = () => {
  return (
    <>
      <div classname="flex-col w-[1440px] max-h-full">
        {/* <!-- content --> */}
        <div classname="flex justify-center py-48">
          <button classname="px-20">
            <img src={Copyofdispora} alt="" />
            <p classname="text-xl font-semibold">Berita dan Pengumuman</p>
          </button>
          <button classname="px-20">
            <img src={Copyofdispora} alt="" />
            <p classname="text-xl font-semibold">Program Dinas</p>
          </button>
        </div>
        {/* <!--content end --> */}
      </div>
    </>
  );
};

export default HomeAdmin;
