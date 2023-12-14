import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Renstra = () => {
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
        <h1 className="text-4xl text-center">Rencana Strategi</h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />

      <br />
      <br />
      {/* <!-- content -->
  <!-- link renstra --> */}
      <button className="mx-40">
        <Link className="text-xl text-[#203dff]" to={"/"}>
          Renstra Dispora 2021 - 2026
        </Link>
      </button>
      {/* <!-- content end --> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Renstra;
