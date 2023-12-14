import React from "react";
import { Link } from "react-router-dom";
import Visimisi from "../pages/user/VisiMisi";
import Tupoksi from "../pages/user/Tupoksi";
import Strukturdinas from "../pages/user/StrukturDinas";
import Disporabgd9 from "../assets/img/dispora bgD9.png";
const footer = () => {
  return (
    <>
      {/* <!-- footer --> */}
      <div className="h-56 bg-[#D9D9D9]">
        <div className="flex justify-between mx-10 items-center mt-4">
          <div className="h-36">
            <img src={Disporabgd9} alt="" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-2xl py-1 pt-5">Tentang Kami</h1>
            <button className="text-xl py-1">
              <Link to={"/visi-misi"}>Visi Misi</Link>
            </button>
            <button className="text-xl py-1">
              <Link to={"/tupoksi"}>Tupoksi</Link>
            </button>
            <button className="text-xl py-1">
              <Link to={"/struktur-dinas"}>Struktur Dinas</Link>
            </button>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-2xl py-1 pt-5">Kontak</h1>
            <button className="text-xl py-1">
              <p>(012) 12345678</p>
            </button>
            <button className="text-xl py-1">
              <p>Jln. Trans Sulawesi, Amurang</p>
            </button>
            <button className="text-xl py-1">
              <p>disporaminsel@gmail.com</p>
            </button>
          </div>
          <div className="flex">
            <button>
              <Link
                to={
                  "https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1"
                }
              >
                <img
                  className="h-10 px-2"
                  src="./assets/img/🦆 icon _instagram_.png"
                  alt=""
                />
              </Link>
            </button>
            <button>
              <Link
                to={
                  "https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1"
                }
              >
                <img
                  className="h-10 px-2"
                  src="./assets/img/🦆 icon _facebook_.png"
                  alt=""
                />
              </Link>
            </button>
            <Link
              to={
                "https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1"
              }
            >
              <img
                className="h-10 px-2"
                src="./assets/img/🦆 icon _whatsapp_.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- footer end --> */}
    </>
  );
};

export default footer;
