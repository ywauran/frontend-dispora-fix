import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import HomePage from "../pages/user/HomePage";
// import Dispora1 from "../assets/img/Dispora 1.png";
// import LoginAdmin from "../pages/admin/LoginAdmin";
import LogoPemkab from "../../assets/img/minsel_300x300.png";

const navbarHome = () => {
  return (
    <>
      {/* <!-- navbar --> */}
      <div className="navbar bg-white px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <button>PROFIL DINAS</button>
                <ul className="p-2">
                  <li className="hover:bg-white rounded-md">
                    <a>SEJARAH DINAS</a>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <a>VISI MISI</a>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <a>TUPOKSI</a>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <a>STRUKTUR DINAS</a>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <a>RENSTRA</a>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <a>PRODUK HUKUM</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <img
            className="xl:w-22 lg:w-20 md:w-20 sm:w-16 min-[320px]:w-14"
            src={LogoPemkab}
            alt=""
          />
        </div>
        <div className="navbar-center mx-3 hidden xl:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl font-semibold">
              <Link to={"/"}>HOME </Link>
            </li>
            <li className="text-xl font-semibold">
              <details>
                <summary>PROFIL DINAS</summary>
                <ul className="p-2 bg-red-500 text-sm">
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/sejarah-dinas"}>SEJARAH DINAS</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/visi-misi"}>VISI MISI</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/tupoksi"}>TUPOKSI</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/struktur-dinas"}>STRUKTUR DINAS</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/renstra"}>RENSTRA</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/produk-hukum"}>PRODUK HUKUM</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-xl font-semibold">
              <details>
                <summary>BERITA DAN PENGUMUMAN</summary>
                <ul className="p-2 bg-red-500 text-sm">
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/all-berita-olahraga"}>BIDANG OLAHRAGA</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/all-berita"}>BIDANG KEPEMUDAAN</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-xl font-semibold">
              <details>
                <summary>PROGRAM</summary>
                <ul className="p-2 bg-red-500 text-sm">
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/all-program-olahraga"}>BIDANG OLAHRAGA</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/all-program"}>BIDANG KEPEMUDAAN</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-xl font-semibold">
              <Link to={"/galeri"}>GALERI </Link>
            </li>
            <li className="text-xl font-semibold">
              <Link to={"/forum/dashboard"}>FORUM </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="btn bg-red-600 ">
            Login Admin
          </Link>
        </div>
      </div>
      {/* <!-- navbar end --> */}
    </>
  );
};

export default navbarHome;
