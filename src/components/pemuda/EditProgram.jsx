import React, { useEffect, useState } from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import Grup3 from "../../assets/img/Group 3.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useParams } from "react-router-dom";

const EditProgram = () => {
  const [title, setTitle] = useState([]);
  const [file, setFile] = useState([]);
  const [kontak, setKontak] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const [program, setProgram] = useState([]);

  useEffect(() => {
    getProgramById(id);
  }, [id]);

  const getProgramById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/program/${id}`);
      setProgram(response.data);
      setTitle(response.data.nama_program);
      setKontak(response.data.kontak_admin_program);
      setAdmin(response.data.nama_pembuat_program);
      setPreview(response.data.URL);
      setFile(response.data.gambar_program);
    } catch (error) {
      console.log(error);
    }
  };

  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();

  const loadImage = (e) => {
    const gambar_program = e.target.files[0];
    setFile(gambar_program);
    setPreview(URL.createObjectURL(gambar_program));
  };

  const updateProgram = async (e) => {
    e.preventDefault();

    if (!file) {
      setMsg("Pilih file terlebih dahulu");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("nama_program", title);
    formData.append("nama_pembuat_program", admin);
    formData.append("kontak_admin_program", kontak);
    try {
      await axios.patch(`http://localhost:4000/program/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTimeout(() => {
        setOpenModal(false);
      }, 1000);
      setOpenModal(true);
      navigate("/add-program-pemuda");
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
        <Link to={"/add-program-pemuda"}>
          <p
            className="py-4 px-6
           bg-red-600 rounded-tr-xl rounded-br-xl font-bold"
          >
            BACK
          </p>
        </Link>
        <Link to={"/home-admin-pemuda"}>
          <p
            className="py-4 px-6
           bg-red-600 rounded-tl-xl rounded-bl-xl font-bold"
          >
            HOME
          </p>
        </Link>
      </div>

      <div className="mx-40">
        <h1 className="text-4xl py-10">Program</h1>
      </div>

      {/* form prgram star */}
      <form onSubmit={updateProgram} className="flex flex-col mx-40">
        <label className="p-2 text-2xl" for="">
          Logo Program
        </label>
        <input
          onChange={loadImage}
          className="mt-4"
          type="file"
          name=""
          id=""
        />

        {preview ? (
          <figure className="img h-[128px] w-[128px]">
            <img src={preview} alt="Preview img" />
          </figure>
        ) : (
          ""
        )}

        <label className="mt-4 text-2xl" for="">
          Judul
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-black h-12 rounded-xl my-4"
          type="text"
        />

        <label className="p-2 text-2xl" for="">
          Nama Pembuat Berita Pemuda
        </label>
        <input
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
          className="border-2 border-black h-10 rounded-xl my-4"
          type="text"
          name=""
          id=""
        />

        <label className="p-2 text-2xl" for="">
          Kontak Admin (+62 082348135155)
        </label>
        <input
          value={kontak}
          onChange={(e) => setKontak(e.target.value)}
          className="border-2 border-black h-10 rounded-xl my-4"
          type="text"
          name=""
          id=""
          placeholder="Contoh: +62 082348135155"
        />
        <button
          type="submit"
          value=""
          className="flex justify-center bg-green-500 py-3 mx-96 rounded-xl my-10"
        >
          UPDATE
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

export default EditProgram;
