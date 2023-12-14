import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ProdukHukum = () => {
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
        <h1 className="text-4xl text-center">Produk Hukum</h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />

      {/* <!-- content  --> */}
      <br />
      <br />
      {/* <!-- content end --> */}
      <button className="mx-40">
        <Link className="text-xl text-[#203dff]" to={"/"}>
          Produk Hukum Dispora 2021 - 2026
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

export default ProdukHukum;
