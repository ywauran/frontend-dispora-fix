import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Tupoksi = () => {
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
        <h1 className="text-4xl text-center">Tugas Pokok dan Fungsi Dinas</h1>
      </div>
      <br />
      <br />
      <hr className="mx-20" />
      <br />
      <br />
      <br />
      {/* <!-- Visi misi --> */}
      <div className="mx-20">
        <div>
          <h1 className="text-2xl text-justify font-semibold">TUGAS POKOK:</h1>
          <p className="text-xl text-justify mt-5">
            Berdasarkan Peraturan Gubernur No. 57 Tahun 2022, Dinas Pemuda dan
            Olahraga mempunyai tugas menyelenggarakan urusan pemerintahan bidang
            kepemudaan dan olahraga yang menjadi kewenangan daerah.
          </p>
        </div>
        <br />
        <br />
        <div>
          <h1 className="text-2xl text-justify font-semibold">FUNGSI:</h1>
          <br />
          <p className="text-xl text-justify">
            <ol className="list-disc">
              <li className="mt-10px">
                penyusunan Rencana Strategis, Rencana Kerja, dan Rencana Kerja
                dan Anggaran Dinas Pemuda dan Olahraga;
              </li>
              <li className="mt-10px">
                pelaksanaan Rencana Strategis dan Dokumen Pelaksanaan Anggaran
                Dinas Pemuda dan Olahraga;
              </li>
              <li className="mt-10px">
                perumusan dan pelaksanaan kebijakan, proses bisnis, standar, dan
                prosedur Dinas Pemuda dan Olahraga;
              </li>
              <li className="mt-10px">
                perumusan, pengoordinasian dan pelaksanaan kebijakan urusan
                pemerintahan di bidang kepemudaan dan olahraga;
              </li>
              <li className="mt-10px">
                pemantauan dan evaluasi pelaksanaan urusan pemerintahan di
                bidang kepemudaan dan olahraga;
              </li>
              <li className="mt-10px">
                pembinaan, pengawasan dan pengendalian urusan pemerintahan di
                bidang kepemudaan dan olahraga;
              </li>
              <li className="mt-10px">
                pelaksanaan kerja sama dan koordinasi dengan PD/UKPD dan/atau
                instansi pemerintah/swasta/organisasi dalam pelaksanaan urusan
                pemerintahan di bidang kepemudaan dan olahraga;
              </li>
              <li className="mt-10px">
                pengelolaan data dan sistem informasi serta transformasi digital
                di bidang kepemudaan dan olahraga;
              </li>
              <li className="mt-10px">
                pelaksanaan pengawasan dan pengendalian perizinan dan non
                perizinan di bidang kepemudaan dan olahraga;
              </li>
              <li className="mt-10px">
                pengawasan dan penindakan sesuai dengan ketentuan peraturan
                perundang-undangan di bidang kepemudaan dan olahraga;
              </li>
              <li className="mt-10px">
                pemberian dukungan teknis kepada masyarakat dan perangkat daerah
                di bidang kepemudaan dan olahraga;
              </li>
              <li>pelaksanaan kesekretariatan Dinas Pemuda dan Olahraga;</li>
              <li className="mt-10px">
                pelaksanaan penyediaan dan pengelolaan prasarana dan sarana
                kepemudaan dan olahraga;
              </li>
              <li className="mt-10px">
                pelaksanaan koordinasi, pemantauan, evaluasi, pelaporan dan
                pertanggungjawaban pelaksanaan tugas dan fungsi Dinas Pemuda dan
                Olahraga; dan
              </li>
              <li className="mt-10px">
                pelaksanaan tugas dan fungsi kedinasan lain yang diberikan oleh
                Gubernur dan/atau Sekretaris Daerah.
              </li>
            </ol>
          </p>
        </div>
      </div>
      {/* <!-- visi misi end --> */}
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Tupoksi;
