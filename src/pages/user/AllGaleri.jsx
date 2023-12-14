import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";

const AllGaleri = () => {
  const [galeri, setGaleri] = useState([]);

  const getGaleri = async () => {
    try {
      const response = await axios.get("http://localhost:4000/galeri");
      setGaleri(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.galeri);
    }
  };
  useEffect(() => {
    getGaleri();
  }, []);
  console.log(galeri);
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
        <div className="grid grid-cols-3 place-items-center">
          {galeri.map((galeri) => (
            <div className="avatar my-4">
              <div className="w-96 rounded">
                <img src={galeri.URL} />
              </div>
            </div>
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

export default AllGaleri;
