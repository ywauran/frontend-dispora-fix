import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import Dispora1 from "../assets/img/Dispora 1.png";
import LoginAdmin from "../pages/admin/LoginAdmin";

const navbar = () => {
  return (
    <>
      {/* <!-- navbar --> */}
      <div className="flex w-[1440px] h-24 justify-between border-b-2 border-b-[#BE3144]">
        <div className="flex">
          <img className="w-72 h-20" src={Dispora1} alt="" />
        </div>
        <div className="flex max-w-7xl items-center font-semibold hover:">
          <button>
            <Link className="text-xl p-4 mr-1" to={"/"}>
              HOME
            </Link>
          </button>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn text-xl"
            >
              PROFIL DINAS
            </div>
            <ul className="menu dropdown-content z-[2] p-2 shadow bg-red-600 justify-center rounded-box w-52 mt-4">
              <li className="text-white hover:bg-red-500">
                <Link to={"/sejarah-dinas"}>SEJARAH DINAS</Link>
              </li>
              <li className="text-white hover:bg-red-500">
                <Link to={"/visi-misi"}>VISI MISI</Link>
              </li>
              <li className="text-white  hover:bg-red-500">
                <Link to={"/tupoksi"}>TUPOKSI</Link>
              </li>
              <li className="text-white  hover:bg-red-500">
                <Link to={"/struktur-dinas"}>STRUKTUR DINAS</Link>
              </li>
              <li className="text-white hover:bg-red-500">
                <Link to={"/renstra"}>RENSTRA</Link>
              </li>
              <li className="text-white hover:bg-red-500">
                <Link to={"/produk-hukum"}>PRODUK HUKUM</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn text-xl"
            >
              BERITA DAN PENGUMUMAN
            </div>
            <ul className="menu dropdown-content z-[2] p-2 shadow bg-red-600 justify-center rounded-box w-52 mt-4">
              <li className="text-white hover:bg-red-500">
                <Link to={"/all-berita"}>BIDANG KEPEMUDAAN</Link>
              </li>
              <li className="text-white hover:bg-red-500">
                <Link to={"/all-berita-olahraga"}>BIDANG OLAHRAGA</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn text-xl"
            >
              PROGRAM
            </div>
            <ul className="menu dropdown-content z-[2] p-2 shadow bg-red-600 justify-center rounded-box w-52 mt-4">
              <li className="text-white hover:bg-red-500">
                <Link to={"/all-program"}>BIDANG KEPEMUDAAN</Link>
              </li>
              <li className="text-white hover:bg-red-500">
                <Link to={"/all-program-olahraga"}>BIDANG OLAHRAGA</Link>
              </li>
            </ul>
          </div>
          <button>
            <Link className="text-xl p-4 mr-1" to={"/all-galeri"}>
              GALERI
            </Link>
          </button>
          <button>
            <Link className="text-xl p-4 mr-1" to={"/forum/dashboard"}>
              FORUM
            </Link>
          </button>
        </div>
        <div className="flex items-center">
          <button className="py-2 px-4 bg-red-600 font-semibold text-lg rounded-2xl mr-5 text-white">
            <Link to={"/login"}>Login Admin</Link>
          </button>
        </div>
      </div>
      {/* <!-- navbar end --> */}
    </>
  );
};

export default navbar;
