import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import AddBerita from "./AddBerita";
import AddProgram from "./AddProgram";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Copyofdispora from "../../assets/img/Copy of Dispora (1) 1.png";
import { useSelector } from "react-redux";

const MainAdmin = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      {/* content */}

      <div
        className="grid grid-cols-2 place-items-center place-content-center gap-4
       py-30 mx-10 mt-10"
      >
        <button className="px-20">
          <Link to={"/add-berita"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">
              Berita dan Pengumuman Pemuda
            </p>
          </Link>
        </button>

        <button className="px-20">
          <Link to={"/add-berita-olahraga"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">
              Berita dan Pengumuman Olahraga
            </p>
          </Link>
        </button>

        <button className="px-20">
          <Link to={"/add-program"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Program Pemuda</p>
          </Link>
        </button>

        <button className="px-20">
          <Link to={"/add-program-olahraga"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Program Olahraga</p>
          </Link>
        </button>

        <button className="px-20">
          <Link to={"/data-pendaftar"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Program Beasiswa</p>
          </Link>
        </button>
        <button className="px-20">
          <Link to={"/add-galeri"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Galeri Dinas</p>
          </Link>
        </button>
      </div>
      {/* content end */}
      {/* <!-- Logout --> */}
      <div className="flex justify-end mt-[-90px] mr-6">
        <Link to={"/login"}>
          <button className="bg-red-700 py-2 px-10 text-white rounded-lg">
            Logout
          </button>
        </Link>
      </div>
    </>
  );
};

export default MainAdmin;
