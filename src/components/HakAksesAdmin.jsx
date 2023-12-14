import React, { useState, useEffect } from "react";
import Dispora1 from "../assets/img/Dispora 1.png";
import Grup2 from "../assets/img/Group 2.png";
import { Link } from "react-router-dom";
import Toggle from "./ToggleAdmin";
import axios from "axios";
import ReactPaginate from "react-paginate";

const HakAksesAdmin = () => {
  const [user, setUser] = useState([]);

  const [message, setMessage] = useState("");

  const getUser = async () => {
    const response = await axios.get("http://localhost:4000/users");
    setUser(response.data);
    console.log(response);
  };
  useEffect(() => {
    getUser();
  }, []);

  // const deletePendaftar = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:4000/regprogram/${id}`
  //     );
  //     getPendaftar();
  //     window.location.reload();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const changePage = ({ selected }) => {
  //   setPage(selected);
  //   setMessage(
  //     selected === 9
  //       ? "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
  //       : ""
  //   );
  // };

  // const searchData = (e) => {
  //   e.preventDefault();
  //   setPage(0);
  //   setMessage("");
  //   setKeyword(query);
  // };

  return (
    <div className="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div className="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div className="flex">
          <img className="w-72 h-20" src={Dispora1} alt="" />
        </div>

        <div className="flex items-center mr-6">
          <img className="h-20" src={Grup2} alt="" />
        </div>
      </div>
      {/* <!-- navbar end --> */}
      <div className="flex justify-start">
        <Link to={"/home-admin-kadis"}>
          <p
            className="py-4 px-6
           bg-red-600  rounded-br-xl font-bold"
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
        <h1 className="text-4xl text-center">Hak akses Admin</h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="flex w-full justify-center items-start">
        <div className="flex flex-col items-center justify-center">
          <table className="w-full mx-60 border-collapse border border-black">
            <thead>
              <tr>
                <td className="p-4">No</td>
                <td className="p-4">Nama Bidang</td>
                <td className="p-4"></td>
              </tr>
            </thead>
            {user.map((item) => (
              <tbody className="items-center">
                <tr>
                  <td className="p-4">{item.role}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">
                    <Toggle />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="flex justify-center mt-4 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default HakAksesAdmin;
