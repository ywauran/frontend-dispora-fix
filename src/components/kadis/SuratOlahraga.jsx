import React, { useState, useEffect, useRef } from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useReactToPrint } from "react-to-print";
import LogoPemkab from "../../assets/img/minsel_300x300.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SuratKadis = () => {
  const [suratolahraga, setSuratolahraga] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 10;
  let number = 10;
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const ComponentPDF = useRef();
  const [pendaftar, setPendaftar] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  const fetchDetailPendaftar = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/suratolahraga/${id}`
      );
      setPendaftar(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSuratOlahraga = async () => {
    const response = await axios.get(
      `http://localhost:4000/suratolahraga?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
    setSuratolahraga(response.data.result);
    console.log(response);
  };
  useEffect(() => {
    getSuratOlahraga();
  }, [page, keyword]);

  const deleteSuratOlahraga = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/suratolahraga/${id}`
      );
      if (response.status === 200) {
        fetchDetailPendaftar();
        window.location.reload();
      } else {
        console.log("Failed to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    const newNumber = 0 * page;
    number = newNumber;
    setMessage(
      selected === 9
        ? "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
        : ""
    );
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMessage("");
    setKeyword(query);
  };

  const generateRowNumber = (index) => {
    return index + 1 + page * limit; // Calculate the correct row number
  };

  const generatePDF = useReactToPrint({
    content: () => ComponentPDF.current,
    documentTitle: "Userdata",
  });

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
      {/* <!-- Content --> */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-center">
          Surat Masuk/Keluar Bidang Kerja Olahraga
        </h1>
      </div>
      <hr className="mx-20" />

      <div className="flex w-full justify-center items-start">
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={searchData}
            className="flex justify-center items-center mt-10"
          >
            <div className="flex">
              <div className="border">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="ketik nama peserta"
                  className="input input-bordered w-full max-w-xl"
                />
              </div>
              <button type="submit" className="btn btn-outline btn-accent">
                Cari
              </button>
            </div>
          </form>

          <div ref={ComponentPDF} className="">
            <div className="flex-col ">
              <div className="none pr-5 pl-5 pt-5 hidden pb-0 mb-1">
                <div className="headerprint p-3 flex border-b-2 border-b-black">
                  <img
                    src={LogoPemkab}
                    className="mr-3 w-[100px]"
                    alt="Logo Dinas"
                  />
                  <div
                    className="sub-print flex-col justify-center"
                    style={{ textAlign: "center" }}
                  >
                    <h1 className="text-lg font-bold">
                      Dinas Pemuda Dan Olahraga Kabupaten Minahasa Selatan
                    </h1>
                    <h2 className="text-sm">
                      JL.Bobara Kompleks TK Pembina Desa.Lopana Satu Kec.Amurang
                      Timur
                      <br />
                      Kabupaten Minasaha Selatan, Sulawesi Utara, Indonesia
                      <br />
                      <p>
                        Telp. (0432) 845215
                        <br />
                        Fax. (0432) 845220
                        <br />
                      </p>
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center mt-5 mb-10">
                  <h1 className="font-bold text-xl">
                    Surat Bidang Kerja Olahraga
                  </h1>
                </div>
              </div>

              <div className="overflow-x-auto my-11">
                <table className="table w-[700px] justify-center  border ml-11 border-black">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Surat</th>
                      <th>Tanggal Surat Masuk/Keluar</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {suratolahraga.map((item, index) => (
                      <tr key={item.uuid}>
                        <td className="p-4">{generateRowNumber(index)}</td>
                        <td className="p-4">{item.nama_surat_olahraga}</td>
                        <td className="p-4">{item.tanggal_surat_olahraga}</td>
                        <td className="p-4">
                          <button className="aksi px-2 bg-slate-500 rounded-xl">
                            <Link to={item.URL}>Details</Link>
                          </button>
                          <button
                            // onClick={(e) => deleteSuratolahraga(pendaftar.id)}
                            className="aksi px-2 bg-red-500 rounded-xl"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="">
            <button
              onClick={generatePDF}
              type="submit"
              className="btn btn-outline btn-accent mr-2 bg-red-500"
            >
              PDF
            </button>
            <Link
              to={"/form-surat-kerja-kadis"}
              type="submit"
              className="btn btn-outline btn-accent bg-green-500"
            >
              Tambah Surat Kerja Olahraga
            </Link>
          </div>

          <div className="flex justify-center mt-4 rounded-sm">
            <nav
              className=""
              key={rows}
              role="navigation"
              aria-label="pagination"
            >
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={Math.min(10, pages)}
                onPageChange={changePage}
                containerClassName={
                  "flex items-center h-8 -space-x-px text-sm "
                }
                pageLinkClassName={
                  "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }
                previousLinkClassName={
                  "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }
                nextLinkClassName={
                  "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                }
                activeLinkClassName={
                  "z-10 flex items-center justify-center h-8 px-3 leading-tight border text-primary-600 border-primary-300 bg-primary-50 hover:bg-primary-100 hover:text-primary-700 "
                }
                disabledLinkClassName={"pagination-link is-disabled"}
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuratKadis;
