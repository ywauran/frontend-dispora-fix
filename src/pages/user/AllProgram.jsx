import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";

const AllProgram = () => {
  const [data, setData] = useState([]);
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
        {/* <!-- Content --> */}
        <div className="grid grid-cols-3 place-items-center my-10">
          {data.map((item) => (
            <Link
              to={`/tampilan-program/${item.id}`}
              className="card w-96 h-[520px] bg-base-100 shadow-xl my-4"
            >
              <figure>
                <img className="" src={item.URL} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex flex-col">
                  {item.nama_program}
                </h2>
                {/* <p>{item.isi_berita.slice(0, 100)}....</p> */}
              </div>
            </Link>
          ))}
        </div>
        <br />
        <br />
        <br />
        {/* <!-- footer --> */}
        <Footer />
        {/* <!-- footer end --> */}
      </div>
    </>

    //
  );
};

export default AllProgram;
