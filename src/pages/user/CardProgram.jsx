import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

const CardProgram = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [uuidProgram, setUuidProgram] = useState(0);

  const getProgram = async () => {
    try {
      const response = await axios.get("http://localhost:4000/program");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  const setUuid = (id) => {
    setOpenModal(true);
    setUuidProgram(id);
    console.log(id);
  };

  useEffect(() => {
    getProgram();
  }, []);
  return (
    <>
      <div className="flex-col w-[1440px] max-h-full">
        {/* <!-- navbar --> */}
        <Navbar />
        {/* <!-- navbar end --> */}
        <br />
        <br />
        <br />
        {/* <!-- content --> */}
        <div className="flex justify-center items-center">
          <h1 className="text-4xl text-center">PROGRAM DINAS</h1>
        </div>
        <br />
        <br />
        <hr className="mx-20" />

        {/* <!-- content  --> */}
        <br />
        <br />
        <div className="grid grid-cols-2 gap-4 py-10">
          {data.map((item) => (
            <div className="card card-side bg-base-100 shadow-xl mx-14 h-60 w-[500px]">
              <figure>
                <img src={item.URL} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.nama_program}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <Link to={"/program-beasiswa"}>Watch</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <!-- content end --> */}
        <br />
        <br />
        <br />
        {/* <!-- footer --> */}
        <Footer />
        {/* <!-- footer end --> */}
      </div>
    </>
  );
};

export default CardProgram;
