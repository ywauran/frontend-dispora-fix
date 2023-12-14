import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const TampilanBerita = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [beritas, setBerita] = useState([]);

  const getBerita = async () => {
    try {
      const response = await axios.get("http://localhost:4000/berita");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    getBeritaById(id);
  }, [id]);

  const getBeritaById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/berita/${id}`);
      setBerita(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("berita", beritas);

  useEffect(() => {
    getBerita();
  }, []);
  return (
    <div className="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}
      <br />
      <br />
      <br />
      {/* <!-- Content --> */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-center">
          {" "}
          {beritas && beritas.judul_berita}
        </h1>
      </div>
      ;
      <br />
      <br />
      <hr className="mx-20" />
      <div>
        <br />
        <div className="flex mx-20">
          <p className="text-[#888888] px-3">
            by {beritas && beritas.nama_pembuat_berita}{" "}
          </p>
          <p className="text-[#888888] px-3">
            {" "}
            {beritas && beritas.tanggal_berita}
          </p>
        </div>
        <br />
        <br />

        <img
          className="w-[1000px] rounded-xl mx-56"
          src={beritas && beritas.URL}
          alt=""
        />

        <br />
        <br />
        <div className="mx-56">
          <p className="text-justify">{beritas && beritas.isi_berita}</p>
        </div>
      </div>
      {/* <!-- content end --> */}
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default TampilanBerita;
