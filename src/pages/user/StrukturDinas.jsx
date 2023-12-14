import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const StrukturDinas = () => {
  return (
    <div className="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}
      <br />
      <br />
      <br />
      {/* <!-- content --> */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-center">Struktur Dinas</h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />

      <br />
      <br />
      <br />
      <div className="h-[900px] bg-[#D9D9D9] rounded-xl mx-56">
        <img src="" alt="" />
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

export default StrukturDinas;
