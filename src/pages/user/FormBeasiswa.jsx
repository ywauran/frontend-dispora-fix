import React, { useState, useParams } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Dispora1 from "../../assets/img/Dispora 1.png";
import axios from "axios";

const FormBeasiswa = () => {
  // const { id } = useParams();
  const [namareg, setNamareg] = useState("");
  const [umurreg, setUmur] = useState("");
  const [ktp, setKtp] = useState("");
  const [fkkhs, setFkkhs] = useState("");
  const [spbupati, setSpbupati] = useState("");
  const [biopemo, setBiopemo] = useState("");
  const [pasfoto, setPasfoto] = useState("");
  const [suratbelumbea, setSuratbelumbea] = useState("");
  const [suratbpp, setSuratBpp] = useState("");
  const [suratketpim, setSuratketpim] = useState("");
  const [fotokopimaha, setFotokopimaha] = useState("");
  const [fotokopikk, setFotokopikk] = useState("");
  const [fotokopipropo, setFotokopipropo] = useState("");

  const loadImage = (e, name) => {
    const selectedFile = e.target.files[0];
    if (name === "ktp") {
      setKtp(selectedFile);
    } else if (name === "fkkhs") {
      setFkkhs(selectedFile);
    } else if (name === "spbupati") {
      setSpbupati(selectedFile);
    } else if (name === "biopemo") {
      setBiopemo(selectedFile);
    } else if (name === "pasfoto") {
      setPasfoto(selectedFile);
    } else if (name === "suratbelumbea") {
      setSuratbelumbea(selectedFile);
    } else if (name === "suratbpp") {
      setSuratBpp(selectedFile);
    } else if (name === "suratketpim") {
      setSuratketpim(selectedFile);
    } else if (name === "fotokopimaha") {
      setFotokopimaha(selectedFile);
    } else if (name === "fotokopikk") {
      setFotokopikk(selectedFile);
    } else if (name === "fotokopipropo") {
      setFotokopipropo(selectedFile);
    }
  };

  const saveRegprogram = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama_reg", namareg);
    formData.append("umur_reg", umurreg);
    formData.append("gambar_ktp", ktp);
    formData.append("gambar_khs", fkkhs);
    formData.append("gambar_spbupati", spbupati);
    formData.append("gambar_biodatareg", biopemo);
    formData.append("gambar_pasfoto", pasfoto);
    formData.append("gambar_belumbea", suratbelumbea);
    formData.append("gambar_databpp", suratbpp);
    formData.append("gambar_ketpimpinan", suratketpim);
    formData.append("gambar_kartumahasiswa", fotokopimaha);
    formData.append("gambar_kk", fotokopikk);
    formData.append("gambar_proposalakhir", fotokopipropo);
    try {
      const response = await axios.post(
        "http://localhost:4000/regprogram",
        formData
      );
      //  navigate("/panduan");
      if (response) {
        console.log("Berhasil");
        window.location.reload();
      }
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
          <img className="h-20" src="./assets/img/Group 2.png" alt="" />
        </div>
      </div>
      {/* <!-- navbar end --> */}
      <br />
      <br />
      <br />
      {/* <!-- Content --> */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-center">Form Program Beasiswa</h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />

      <br />
      <br />
      <br />

      {/* <!-- Form --> */}
      <form onSubmit={saveRegprogram} className="grid grid-cols-2 mx-56 py-5">
        <div className="p-10">
          <h1 className="text-xl">
            Nama Lengkap <span className="text-red-600">*</span>
          </h1>
          <input
            value={namareg}
            onChange={(e) => setNamareg(e.target.value)}
            className="h-10 w-96 border-red-800 border-2 rounded-xl"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Umur <span className="text-red-600">*</span>
          </h1>
          <input
            value={umurreg}
            onChange={(e) => setUmur(e.target.value)}
            className="h-10 border-red-800 border-2 rounded-xl"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="p-10 flex flex-col">
          <label className="bg-red-600 py-2 px-4" htmlFor="">
            Pilih Semester Untuk S1
          </label>
          <select name="" id="">
            Semester S1
            <option value="">Semester 6</option>
            <option value=""> Semester 8</option>
            <option value="">Semester 10</option>
          </select>
        </div>
        <div className="p-10">
          <label htmlFor="">Pilih Semester Untuk S2</label>
          <select name="" id="">
            Semester S2
            <option value="">Semester 4</option>
            <option value=""> Semester 6</option>
          </select>
        </div>
        <div className="p-10">
          <label htmlFor="">Pilih Semester Untuk Diploma</label>
          <select name="" id="">
            Semester Diploma
            <option value="">Semester 4</option>
          </select>
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            KTP.pdf<span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            // value={ktp}
            onChange={(e) => loadImage(e, "ktp")}
            className="file-input w-full max-w-xs"
            type="file"
            name="ktp"
            id="ktp"
            placeholder="ktp.pdf"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Foto Kopi Kartu Hasil Studi <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "fkkhs")}
            // value={fkkhs}
            className="file-input w-full max-w-xs"
            type="file"
            name="khs"
            id="khs"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Surat Permohonan ke Bupati Minsel{" "}
            <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "spbupati")}
            // value={spbupati}
            className="file-input w-full max-w-xs"
            type="file"
            name="spbupati"
            id="spbupati"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Biodata Pemohon <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "biopemo")}
            // value={biopemo}
            className="file-input w-full max-w-xs"
            type="file"
            name="ktp"
            id="ktp"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Pas Foto Warna (3x4) 2 Lembar{" "}
            <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "pasfoto")}
            // value={pasfoto}
            className="file-input w-full max-w-xs"
            type="file"
            name="pasfoto"
            id="pasfoto"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Surat Pernyataan Belum Pernah Menerima Beasiswa
            <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "suratbelumbea")}
            // value={suratbelumbea}
            className="file-input w-full max-w-xs"
            type="file"
            name="suratbelumbea"
            id="suratbelumbea"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Surat Pernyataan Mutlak Penggunaan Data BPP “Minsel Maju”
            <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "suratbpp")}
            // value={suratbpp}
            className="file-input w-full max-w-xs"
            type="file"
            name="suratbpp"
            id="suratbpp"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan
            <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "suratketpim")}
            // value={suratketpim}
            className="file-input w-full max-w-xs"
            type="file"
            name="suratketpim"
            id="suratketpim"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Foto kopi kartu Mahasiswa <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "fotokopimaha")}
            // value={fotokopimaha}
            className="file-input w-full max-w-xs"
            type="file"
            name="fotokopimaha"
            id="fotokopimaha"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Foto kopi Kartu Keluarga <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "fotokopikk")}
            // value={fotokopikk}
            className="file-input w-full max-w-xs"
            type="file"
            name="fotokopikk"
            id="fotokopikk"
          />
        </div>
        <div className="p-10">
          <h1 className="text-xl">
            Foto kopi proposal penelitian/tugas akhir/skripsi/tesis disertai
            tanda tangan dosen pembimbing{" "}
            <span className="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input
            onChange={(e) => loadImage(e, "fotokopipropo")}
            // value={fotokopipropo}
            className="file-input w-full max-w-xs"
            type="file"
            name="fotokopipropo"
            id="fotokopipropo"
          />{" "}
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="flex items-center bg-red-600 h-12 w-56 border-2 border-red-900 rounded-xl justify-center"
          >
            SIMPAN
          </button>
        </div>
      </form>

      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default FormBeasiswa;
