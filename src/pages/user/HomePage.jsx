import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Symbolnext from "../../assets/img/›.png";
import Symbolback from "../../assets/img/<.png";
import Gotongroyong from "../../assets/img/gotongroyong.jpeg";
import Toarlumimuut from "../../assets/img/toar-limimuut.jpeg";
import Dispora1 from "../../assets/img/Dispora 1.png";
import BgDispora from "../../assets/img/bg dispora 1.jpg";
import { current } from "@reduxjs/toolkit";
import VisiMisi from "./VisiMisi";
import axios from "axios";
import LogoPemkab from "../../assets/img/minsel_300x300.png";
import FDWPYR from "../../assets/img/FDW-PYR-1.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import NavbarHome from "../../components/ComponenRespon/NavbarHome";
const HomePage = () => {
  const [data, setData] = useState([]);
  const [dataOlahraga, setDataOlahraga] = useState([]);
  const [program, setProgram] = useState([]);
  const [programOlahraga, setProgramOlahraga] = useState([]);
  const [galeris, setGaleri] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [uuidBerita, setUuidBerita] = useState(0);
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const [isHovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(28);
  const [currentTime, setCurrentTime] = useState("");

  const getCurrentTime = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setCurrentTime(formattedTime);
  };

  // Fungsi untuk mengupdate nilai countdown
  const updateCountdown = () => {
    // Get the current date and time
    const now = new Date().getTime();

    // Set the date and time of the countdown
    const countdownDate = new Date("2023-12-31T23:59:59").getTime();

    // Calculate the time remaining
    const timeRemaining = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const newDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const newHours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const newMinutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const newSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the state with the new values
    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galeris.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galeris.length) % galeris.length
    );
  };

  const getBerita = async () => {
    try {
      const response = await axios.get("http://localhost:4000/berita");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  const getBeritaOlahraga = async () => {
    try {
      const response = await axios.get("http://localhost:4000/beritaolahraga");
      setDataOlahraga(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  const getProgram = async () => {
    try {
      const response = await axios.get("http://localhost:4000/program");
      setProgram(response.data);
      console.log(response.program);
    } catch (error) {
      console.log(error.program);
    }
  };

  const getProgramOlahraga = async () => {
    try {
      const response = await axios.get("http://localhost:4000/programolahraga");
      setProgramOlahraga(response.data);
      console.log(response.program);
    } catch (error) {
      console.log(error.program);
    }
  };

  const getGaleri = async () => {
    try {
      const response = await axios.get("http://localhost:4000/galeri");
      setGaleri(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.galeri);
    }
  };

  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  // fitur chating
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const bottomMsgRef = useRef(null);

  const kirimPesan = useCallback(() => {
    if (messages !== "") {
      setMessages((current) => [...current, `[me] ${messages}`]);
      setMessage("");
    }
  }, [messages]);

  const handleChange = (event) => {
    setMessages(event.target.value);
  };

  const setUuid = (id) => {
    setOpenModal(true);
    setUuidBerita(id);
    console.log(id);
  };

  useEffect(() => {
    getBerita();
    getProgram();
    getGaleri();
    getBeritaOlahraga();
    getProgramOlahraga();
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Membersihkan interval setelah komponen di-unmount
    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    // Panggil getCurrentTime saat komponen pertama kali dimuat
    getCurrentTime();
    // Atur interval untuk memperbarui waktu setiap detik
    const intervalId = setInterval(getCurrentTime, 1000);
    // Bersihkan interval saat komponen akan dibongkar
    return () => clearInterval(intervalId);
  }, []); // Penambahan dependensi kosong agar useEffect hanya dipanggil sekali

  return (
    <div className="container flex-col sm:max-w-screen-2xl  bg-red-600">
      {/* <!-- navbar --> */}
      <NavbarHome />

      {/* <!-- navbar end --> */}
      {/* <!-- content --> */}
      <div className="bg-red-500 ">
        <div className="flex justify-center py-11 ">
          {/* <img
            className="w-[450px] h-[250px] rounded-2xl ml-[-100px]"
            src={FDWPYR}
            alt=""
          /> */}
          <h1 className="xl:text-4xl  font-serif text-center">
            DINAS PEMUDA DAN OLAHRAGA <br />{" "}
            <span className="flex mt-3">KABUPATEN MINAHASA SELATAN</span>
          </h1>
          {/* <img
            className="w-[450px] h-[250px] mr-[-100px]"
            src={FDWPYR}
            alt=""
          /> */}
        </div>
        <div ref={section1} className=" font-semibold font-mono mr-11">
          <p className="text-end text-white">Rabu, 6 Desember 2023</p>
          <div className="grid grid-flow-col gap-1 text-center auto-cols-max justify-end mr-5 mt-5">
            <div
              className="flex flex-col text-lg font-mono font-semibold mb-10 rounded-xl py-2 px-4 text-white"
              px-4
            >
              {currentTime}
            </div>
          </div>
        </div>
        {/* Hero */}
        <div className="flex flex-row item-center justify-center ml-3 ">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%]"
          >
            {data.map((item) => (
              <SwiperSlide key={item.judul_berita}>
                <Link to={"/all-berita"}>
                  <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.URL})` }}
                    />
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    <div className="relative flex flex-col gap-3">
                      <h1 className="text-xl lg:text-2xl">
                        {item.judul_berita}{" "}
                      </h1>
                      <p className="lg:text-[18px]">{item.tanggal_berita} </p>
                      {/* <p className="lg:text-[18px]">{item.isi_berita} </p> */}
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="bg-gradient-to-l from-[rgb(249,123,123)] to-red-600 mt-20 h-[700px] pt-20">
        <div className="carousel-container flex justify-center items-center">
          <div className="carousel"></div>
          <button
            onClick={goToPrevSlide}
            className="arrow-button prev mr-10 bg-red-500 h-12 w-12  text-2xl rounded-full flex items-center justify-center"
          >
            ❮
          </button>
          <Link to={"/all-galeri"} className="slide">
            <img
              className="rounded-2xl h-[500px] w-[800px] cover-center"
              src={galeris && galeris[currentIndex]?.URL}
              alt={`slide-${currentIndex}`}
            />
          </Link>
          <button
            onClick={goToNextSlide}
            className="arrow-button next ml-10 bg-red-500 h-12 w-12  text-2xl rounded-full flex items-center justify-center"
          >
            ❯
          </button>
        </div>
        <div className="flex justify-center items-center mr-10 mt-11">
          <button className=" rounded-xl text-white bg-red-500 py-2 px-4">
            <Link to={"/all-galeri"}>See More..</Link>
          </button>
        </div>
      </div>
      {/* Hero end */}
      <br />
      <br />
      <br />
      <br />
      {/* <!-- Berita & Pengumuman Kepemudaan --> */}
      <div className="xl:h-[900px] sm:h-[2000px]  bg-gradient-to-r from-red-500 to-red-500/50">
        <div className="ml-28 pt-7" ref={section2}>
          <p className="font-semibold text-xl text-white mt-11">
            Berita & Pengumuman Bidang Kepemudaan
          </p>
        </div>
        <br />
        <hr className="mx-28 shadow-xl 2xl:hidden" />
        <div className="grid xl:grid-cols-3 place-items-center my-10">
          {data.slice(0, 3).map((item) => (
            <Link
              to={`/tampilan-berita/${item.id}`}
              className="card  w-96 h-[520px] bg-base-100 shadow-xl my-4"
            >
              <figure>
                <img className="" src={item.URL} alt="Shoes" />
              </figure>
              <div className="card-body bg-white rounded-b-2xl">
                <h2 className="card-title flex flex-col">
                  {item.judul_berita}
                  <div className="badge badge-secondary">
                    {item.tanggal_berita}
                  </div>
                </h2>
                <p>{item.isi_berita.slice(0, 30)}....</p>
                <div className="card-actions justify-end"></div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center mr-10">
          <button className=" rounded-xl text-white border py-2 px-4">
            <Link to={"/all-berita"}>See More..</Link>
          </button>
        </div>
      </div>
      {/* <!-- Berita & Pengumuman Kepemudaan end --> */}
      {/* <!-- Berita & Pengumuman Olahraga --> */}
      <div className="xl:h-[900px] sm:h-[2000px]  bg-gradient-to-r from-red-500 to-red-500/50">
        <div className="ml-28 pt-7" ref={section2}>
          <p className="font-semibold text-xl text-white mt-11">
            Berita & Pengumuman Bidang Olahraga
          </p>
        </div>
        <br />
        <hr className="mx-28 shadow-xl" />
        <div className="grid xl:grid-cols-3 place-items-center my-10">
          {dataOlahraga &&
            dataOlahraga.slice(0, 3).map((item) => (
              <Link
                to={`/tampilan-berita-olahraga/${item.id}`}
                className="card w-96 h-[520px] bg-base-100 shadow-xl my-4"
              >
                <figure>
                  <img className="" src={item.URL} alt="Shoes" />
                </figure>
                <div className="card-body bg-white rounded-b-2xl">
                  <h2 className="card-title flex flex-col">
                    {item.judul_berita_olahraga}
                    <div className="badge badge-secondary">
                      {item.tanggal_berita_olahraga}
                    </div>
                  </h2>
                  <p>{item.isi_berita_olahraga.slice(0, 30)}....</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </Link>
            ))}
        </div>
        <div className="flex justify-center items-center mr-10">
          <button className=" rounded-xl text-white border py-2 px-4">
            <Link to={"/all-berita-olahraga"}>See More..</Link>
          </button>
        </div>
      </div>
      {/* <!-- Berita & Pengumuman Olahraga end --> */}
      <br />
      <br />
      <br />
      <br />
      {/* <!-- Program --> */}
      <div className="flex justify-center">
        <p className="text-3xl text-white font-bold">PROGRAM DINAS</p>
      </div>
      <div ref={section3} className="flex mt-20">
        <div className="">
          <div>
            <h1 className="text-2xl ml-28 font-semibold text-white">
              Program Kepemudaan
            </h1>
          </div>
          <div className="flex-col justify-start h-80 w-[600px] mt-11 ml-12">
            {program &&
              program.slice(0, 3).map((programs) => (
                <div className="card lg:card-side 2xl:w-lg bg-white mt-11 shadow-xl">
                  <figure>
                    <img src={programs.URL} alt="Album" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{programs.nama_program}</h2>
                    <p>{programs.nama_pembuat_program}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Listen</button>
                    </div>
                  </div>
                </div>
              ))}
            <div className="flex justify-center items-center mt-12">
              <button className=" rounded-xl text-white border py-2 px-4">
                <Link to={"/all-program"}>See More..</Link>
              </button>
            </div>
          </div>
        </div>
        <hr className="shadow-xl border h-[1200px] justify-center ml-20" />
        {/* Program Olahraga */}
        <div className="ml-10">
          <div>
            <h1 className="text-2xl ml-28 text-white font-semibold">
              Program Olahraga
            </h1>
          </div>
          <div className="flex-col justify-start h-80 w-[600px] mt-11 ml-10">
            {programOlahraga &&
              programOlahraga.slice(0, 3).map((programs) => (
                <div className="card lg:card-side 2xl:w-lg bg-white mt-11 shadow-xl">
                  <figure>
                    <img src={programs.URL} alt="Album" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {programs.nama_program_olahraga}
                    </h2>
                    <p>{programs.nama_pembuat_program_olahraga}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Listen</button>
                    </div>
                  </div>
                </div>
              ))}
            <div className="flex justify-center items-center mt-12">
              <button className=" rounded-xl text-white border py-2 px-4">
                <Link to={"/all-program-olahraga"}>See More..</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Program end --> */}
      <br />
      <br />
      <br />
      {/* <!-- Galeri start --> */}
      <div ref={section4}>
        <h1 className="mt-20 text-2xl ml-28 font-semibold text-white">
          Galeri
        </h1>
      </div>
      <br />
      <br />
      <div className="flex item-center justify-center ml-4">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {galeris.map((galeri) => (
            <SwiperSlide key={galeri.URL}>
              <div>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${galeri.URL})` }}
                  />

                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center mr-10">
          <button className=" rounded-xl text-white bg-red-500 py-2 px-4">
            <Link to={"/all-galeri"}>See More..</Link>
          </button>
        </div>
      </div>
      {/* <!-- Geleri End --> */}
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

export default HomePage;
