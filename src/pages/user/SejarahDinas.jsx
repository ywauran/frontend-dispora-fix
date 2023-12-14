import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SejarahDinas = () => {
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
          Sejarah Terbentuknya Dinas Pemuda dan <br />
          Olahraga Kabupaten Minahasa Selatan
        </h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />
      <br />
      <br />
      <div className="mx-56">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2003</time>
              <div className="text-lg font-black">
                Terbentuk Dinas Pendidikan Pemuda Dan Olahraga
              </div>
              <p>
                Dinas Pendidikan Pemuda dan Olahraga terbentuk melalui UU No 10
                tahun 2003 dan Perda No 6 Tahun 2016 Susunan Perangkat Daerah.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2016</time>
              <div className="text-lg font-black">
                Dinas Pemuda dan Olahraga
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              velit neque quis quae accusantium omnis odit facilis, corporis
              nulla ratione et maiores fuga cum quia recusandae alias minus
              magni fugit?
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">
                Dinas Pemuda dan Olahraga
              </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
              temporibus repellat maiores ab autem commodi unde nostrum
              excepturi fuga provident cupiditate eaque quos aliquam sed maxime
              nam tempora dolore natus.
            </div>
            <hr />
          </li>
        </ul>
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

export default SejarahDinas;
