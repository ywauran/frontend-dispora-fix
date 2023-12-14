import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const VisiMisi = () => {
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
        <h1 className="text-4xl text-center">Visi dan Misi</h1>
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
          <h1 className="text-2xl text-justify font-semibold">Visi</h1>
          <p className="text-2xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum mattis ullamcorper velit sed ullamcorper. Cras semper
            auctor neque vitae tempus quam. Magna etiam tempor orci eu. Sagittis
            eu volutpat odio facilisis mauris sit amet. Eros in cursus turpis
            massa tincidunt dui ut. Consequat ac felis donec et odio
            pellentesque diam. Neque egestas congue quisque egestas diam in. Dui
            ut ornare lectus sit amet est. Quis lectus nulla at volutpat diam ut
            venenatis tellus in.
          </p>
        </div>
        <br />
        <br />
        <div>
          <h1 className="text-2xl text-justify font-semibold">Misi</h1>
          <p className="text-2xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum mattis ullamcorper velit sed ullamcorper. Cras semper
            auctor neque vitae tempus quam. Magna etiam tempor orci eu. Sagittis
            eu volutpat odio facilisis mauris sit amet. Eros in cursus turpis
            massa tincidunt dui ut. Consequat ac felis donec et odio
            pellentesque diam. Neque egestas congue quisque egestas diam in. Dui
            ut ornare lectus sit amet est. Quis lectus nulla at volutpat diam ut
            venenatis tellus in.
          </p>
        </div>
      </div>
      {/* <!-- visi misi end --> */}
      {/* <!-- Content end --> */}
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default VisiMisi;
