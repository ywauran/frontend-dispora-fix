import React, { useRef } from "react";
import { Link } from "react-router-dom";

const dropdownNavbar = () => {
  return (
    <>
      {/* <!-- navbar --> */}
      <div className="flex w-[1440px] h-24 justify-center border-b-2 border-b-red-800">
        <div className="flex-1 px-2 lg:flex-none">
          <a className="text-lg font-bold">daisyUI</a>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <a className="btn btn-ghost rounded-btn">Button</a>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              >
                Dropdown
              </div>
              <ul className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- navbar end --> */}
    </>
  );
};

export default dropdownNavbar;
