import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Dispora from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailPendaftar = () => {
  const [pendaftar, setPendaftar] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  const fetchDetailPendaftar = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/regprogram/${id}`
      );
      setPendaftar(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Contoh penanganan status respons saat menghapus
  const deletePendaftar = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/regprogram/${id}`
      );
      if (response.status === 200) {
        fetchDetailPendaftar();
        navigate("/data-pendaftar-kadis");
      } else {
        console.log("Failed to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailPendaftar();
  }, [id]);

  return (
    <div className="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div className="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div className="flex">
          <img className="w-72 h-20" src={Dispora} alt="" />
        </div>

        <div className="flex items-center mr-6">
          <img className="h-20" src={Grup2} alt="" />
        </div>
      </div>
      {/* <!-- navbar end --> */}
      <div className="flex justify-between">
        <Link to={"/data-pendaftar-kadis"}>
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
      <br />
      <br />
      <br />
      {/* <!-- Content --> */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-center">
          Informasi Lengkap Pendaftar Program Beasiswa
        </h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />

      <br />
      <br />
      <br />

      {/* <!-- Form --> */}
      <div className="grid grid-cols-2 mx-56 py-5">
        <div className="p-10">
          <h1 className="text-xl">
            Nama <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-2xl"
            type="text"
            value={pendaftar?.nama_reg}
            disabled
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Umur <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-2xl"
            type="text"
            value={pendaftar?.umur_reg}
            disabled
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            KTP <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_ktp}>Lihat KTP</Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Foto Kopi Kartu Hasil Studi <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_khs}>
              Lihat Foto Kopi Kartu Hasil Studi
            </Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Surat Permohonan ke Bupati Minsel{" "}
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_spbupati}>
              Lihat Surat Permohonan ke Bupati Minsel
            </Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Biodata Pemohon <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_biodatareg}>Lihat Biodata Pemohon</Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Pas Foto Warna (3x4) 2 Lembar{" "}
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_pasfoto}>Lihat Pas Foto</Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Surat Pernyataan Belum Pernah Menerima Beasiswa
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_belumbea}>
              Lihat Surat Pernyataan Belum Pernah Menerima Beasiswa
            </Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Surat Pernyataan Mutlak Penggunaan Data BPP “Minsel Maju”
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_databpp}>
              Lihat Surat Pernyataan Mutlak Penggunaan Data BPP
            </Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_ketpimpinan}>
              Lihat Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan
            </Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Foto kopi kartu Mahasiswa <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_kartumahasiswa}>
              Lihat Foto kopi kartu Mahasiswa
            </Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Foto kopi Kartu Keluarga <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_kk}>Lihat Foto kopi Kartu Keluarga</Link>
          </button>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Foto kopi proposal penelitian/tugas akhir/skripsi/tesis disertai
            tanda tangan dosen pembimbing{" "}
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-2xl py-2 px-4 text-white">
            <Link to={pendaftar?.URL_proposalakhir}>
              Lihat Foto kopi proposal
            </Link>
          </button>
        </div>
      </div>
      <div className="p-10 flex justify-center">
        <button
          onClick={(e) => deletePendaftar(pendaftar.id)}
          className="px-8 py-4 bg-red-600 rounded-xl text-xl text-white"
        >
          Hapus
        </button>
      </div>
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default DetailPendaftar;
