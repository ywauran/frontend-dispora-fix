import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HeaderForum from "../../components/ComponentsForum/HeaderForum";
import DashboardForum from "../../components/ComponentsForum/DashboardForum";
import AllForumOlahraga from "../../components/ForumOlahraga/AllForumOlahraga";
import TampilanForumOlahraga from "../../components/ForumOlahraga/TampilanForumOlahraga";

import { useDispatch, useSelector } from "react-redux";
import AllForumPemuda from "../../components/ForumPemuda/AllForumPemuda";

const MainAdmin = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <HeaderForum />
      </div>
      <div className="flex">
        <div className="w-[20%] bg-red-800 flex justify-between py-10 flex-col items-center">
          <nav>
            <ul className="flex flex-col justify-center items-center space-y-4 text-white">
              <li className="py-6 px-32 w-full text-center text-[20px] hover:bg-red-500">
                <Link to="./dashboard">Dashboard</Link>
              </li>
              <li className="py-6 w-full text-center text-[20px] hover:bg-red-500">
                <Link to="./all-forum/pemuda">Forum Bidang Kepemudaan</Link>
              </li>
              <li className="py-6 w-full text-center text-[20px] hover:bg-red-500">
                <Link to="./all-forum/olahraga">Forum Bidang Olahraga</Link>
              </li>
            </ul>
          </nav>
          <Link
            to={"/"}
            // onClick={() => setOpenModal(true)}
            className="text-center text-white"
          >
            Keluar
          </Link>
        </div>
        <div className="w-[80%] bg-red-400">
          <div className="p-4">
            <Routes>
              {/* Dashboard */}
              <Route path="/dashboard" element={<DashboardForum />} />
              {/* Kategori Olahraga */}
              <Route path="/all-forum/:id" element={<AllForumOlahraga />} />
              <Route
                path="/tampilan-forum/kategori/olahraga/:id"
                element={<TampilanForumOlahraga />}
              />
              <Route path="/all-forum/:id" element={<AllForumPemuda />} />
              <Route
                path="/tampilan-forum/kategori/pemuda/:id"
                element={<TampilanForumOlahraga />}
              />
            </Routes>
          </div>
        </div>
      </div>

      <div>
        <div
          id="popup-modal"
          tabIndex="-1"
          className={`${
            openModal ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 z-50 justify-center items-center  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow p-8">
              <h3 className="text-center">Anda yakin ini keluar?</h3>
              <div className="flex items-center justify-center space-x-4">
                {/* <button onClick={() => logout()}>Ya</button>
                <button onClick={() => setOpenModal(false)}>Tidak</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainAdmin;
