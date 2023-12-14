import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import AddBerita from "./AddBerita";
import AddProgram from "./AddProgram";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Copyofdispora from "../../assets/img/Copy of Dispora (1) 1.png";
import { useSelector } from "react-redux";

const DashboardKadis = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      {/* content */}

      <div className="flex justify-start mt-11 ml-11 ">
        <button
          // onClick={(e) => deleteBerita(item.uuid)}
          className="py-2 px-4
                    bg-red-600 text-white rounded-xl font-bold"
        >
          <Link to={"/hak-akses-kadis"}>Hak Akses Admin</Link>
        </button>
      </div>

      <div
        className="grid grid-cols-3 place-items-center place-content-center gap-4
       py-30 mx-10"
      >
        <button className="px-20">
          <Link to={"/add-berita-kadis"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">
              Berita dan Pengumuman Pemuda
            </p>
          </Link>
        </button>

        <button className="px-20">
          <Link to={"/add-berita-olahraga-kadis"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">
              Berita dan Pengumuman Olahraga
            </p>
          </Link>
        </button>

        <button className="px-20">
          <Link to={"/add-program-kadis"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Program Pemuda</p>
          </Link>
        </button>

        <button className="px-20">
          <Link to={"/add-program-olahraga-kadis"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Program Olahraga</p>
          </Link>
        </button>

        <button className="px-20">
          <Link to={"/data-pendaftar-kadis"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Program Beasiswa</p>
          </Link>
        </button>
        <button className="px-20">
          <Link to={"/add-galeri-kadis"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Galeri Dinas</p>
          </Link>
        </button>
        <button className="px-20">
          <Link to={"/add-forum/olahraga"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Forum </p>
          </Link>
        </button>
        <button className="px-20">
          <Link to={"/surat-kerja-kadis"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">Surat Bidang Kerja Kadis </p>
          </Link>
        </button>
        <button className="px-20">
          <Link to={"/surat-kerja-sekretariat"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-xl font-semibold">
              Surat Bidang Kerja Sekretariat{" "}
            </p>
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

export default DashboardKadis;
