import React, { useState, useEffect } from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import Grup3 from "../../assets/img/Group 3.png";
import Back from "../../assets/img/<.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditBerita = () => {
  const [judul_berita, setJudulBerita] = useState([]);
  const [nama_pembuat_berita, setNamapembuatberita] = useState([]);
  const [isi_berita, setIsiBerita] = useState([]);
  const [tanggal_berita, setTanggalBerita] = useState([]);
  const [file, setFile] = useState([]);
  const [gambar_berita, setGambarberita] = useState([]);
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBeritaById(id);
  }, [id]);

  const getBeritaById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/berita/${id}`);
      setJudulBerita(response.data.judul_berita);
      setNamapembuatberita(response.data.nama_pembuat_berita);
      setIsiBerita(response.data.isi_berita);
      setTanggalBerita(response.data.tanggal_berita);
      setFile(response.data.gambar_berita);
      setPreview(response.data.URL);
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const UpdateBerita = async (e) => {
    e.preventDefault();

    if (!file) {
      setMsg("Pilih file terlebih dahulu");
      return;
    }

    const formData = new FormData();
    formData.append("judul_berita", judul_berita);
    formData.append("nama_pembuat_berita", nama_pembuat_berita);
    formData.append("isi_berita", isi_berita);
    formData.append("tanggal_berita", tanggal_berita);
    formData.append("file", file);
    try {
      await axios.patch(`http://localhost:4000/berita/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/add-berita-kadis");
    } catch (error) {
      console.log(error);
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
      {/* <!-- navbar end --> */}
      <div className="flex justify-between">
        <Link to={"/add-berita-kadis"}>
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
        <h1 className="text-4xl py-10">Berita dan Pengumuman</h1>
      </div>
      {/* from start */}
      <form onSubmit={UpdateBerita} className="flex flex-col mx-40">
        <label className="p-2 text-2xl" for="">
          Gambar Utama Berita
        </label>
        <input
          onChange={loadImage}
          className="mt-4"
          type="file"
          name=""
          id=""
        />
        {preview && (
          <figure>
            <img src={preview} alt="" />
          </figure>
        )}
        <label className="p-2 text-2xl" for="">
          Nama Pembuat Berita
        </label>
        <input
          value={nama_pembuat_berita}
          onChange={(e) => setNamapembuatberita(e.target.value)}
          className="border-2 border-black h-10 rounded-xl my-4"
          type="text"
          name=""
          id=""
        />
        <label className="p-2 text-2xl" for="">
          Tanggal Berita
        </label>
        <input
          value={tanggal_berita}
          onChange={(e) => setTanggalBerita(e.target.value)}
          className="border-2 border-black h-10 rounded-xl my-4"
          type="text"
          name=""
          id=""
        />
        <label className="mt-4 text-2xl" for="">
          Judul
        </label>
        <input
          value={judul_berita}
          onChange={(e) => setJudulBerita(e.target.value)}
          className="border-2 border-black h-12 rounded-xl my-4"
          type="text"
        />
        <label className="text-2xl" for="">
          Isi Berita
        </label>
        <textarea
          value={isi_berita}
          onChange={(e) => setIsiBerita(e.target.value)}
          className="border-2 border-black h-40 rounded-xl my-4"
          type="text"
        />

        <button
          type="submit"
          value=""
          className="flex justify-center bg-green-500 py-3 mx-96 rounded-xl my-10"
        >
          UBAH
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
                  Berita Berhasil Diupadate
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBerita;
