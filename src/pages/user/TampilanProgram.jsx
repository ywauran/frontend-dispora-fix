import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const TampilanProgram = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [program, setProgram] = useState([]);

  const getProgram = async () => {
    try {
      const response = await axios.get("http://localhost:4000/program");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    getProgramById(id);
  }, [id]);

  const getProgramById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/program/${id}`);
      setProgram(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("program_pemuda", program);

  useEffect(() => {
    getProgram();
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
          {program && program.nama_program}
        </h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />
      <br />
      <br />
      <br />
      {/* <!-- poster --> */}
      <div className="flex mx-20">
        <p className="text-[#888888] px-3">
          by {program && program.nama_pembuat_program}{" "}
        </p>
      </div>

      <img
        className="w-[1000px] mt-11 rounded-2xl bg-[#D9D9D9] mx-56"
        src={program && program.URL}
        alt=""
      />

      <br />
      <br />

      <br />
      <br />
      <div className="flex mx-56">
        <div className="px-4">
          <Link to={"/form-beasiswa"} className="bg-[#D9D9D9] p-3 rounded-lg">
            Daftar Sekarang
          </Link>
        </div>
        <div className="px-4">
          <ReactWhatsapp
            number="+62 82348135155"
            className="bg-[#D9D9D9] p-3 rounded-lg"
          >
            Kontak Kami
          </ReactWhatsapp>
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

export default TampilanProgram;
