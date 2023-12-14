import React, { useEffect, useState } from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import Grup3 from "../../assets/img/Group 3.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormAddGaleri = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();

  const loadImage = async (e) => {
    const gambar = e.target.files[0];
    setFile(gambar);
    setPreview(URL.createObjectURL(gambar));
  };

  const sendData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:4000/galeri", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTimeout(() => {
        setOpenModal(false);
      }, 1000);
      setOpenModal(true);
      navigate("/add-galeri-kadis");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div className="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div className="flex">
          <img className="w-72 h-20" src={Dispora1} alt="" />
        </div>

        <div className="flex items-center mr-6">
          <img className="h-20" src={Grup2} alt="" />
        </div>
      </div>
      {/* <!-- navbar end -->  */}
      <div className="flex justify-between">
        <Link to={"/add-galeri-kadis"}>
          <p
            className="py-4 px-6
           bg-red-600 rounded-tr-xl rounded-br-xl font-bold"
          >
            BACK
          </p>
        </Link>
        <Link to={"/home-admin-kadis"}>
          <p
            className="py-4 px-6
           bg-red-600 rounded-tl-xl rounded-bl-xl font-bold"
          >
            HOME
          </p>
        </Link>
      </div>

      <div className="mx-40">
        <h1 className="text-4xl py-10">Galeri</h1>
      </div>

      {/* form prgram star */}
      <form onSubmit={sendData} className="flex flex-col mx-40">
        <label className="p-2 text-2xl" for="">
          Gambar Galeri Dinas
        </label>
        <input
          onChange={loadImage}
          className="mt-4"
          type="file"
          name=""
          id=""
        />

        {preview ? (
          <figure className="img h-[528px] w-[528px]">
            <img src={preview} alt="Preview img" />
          </figure>
        ) : (
          ""
        )}

        <button
          type="submit"
          value=""
          className="flex justify-center bg-green-500 py-3 mx-96 rounded-xl my-10"
        >
          SIMPAN
          <input type="submit" value="" />
        </button>
      </form>
      {/* Popup Massage */}
      <div>
        <div
          id="popup-modal"
          tabIndex="-1"
          className={`${
            openModal ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 z-50 justify-center items-center  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="p-6 text-center">
                <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Program Berhasil Ditambahkan
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddGaleri;
