/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";
import { CiLight } from "react-icons/ci";
import { IoMoonSharp } from "react-icons/io5";

const Nav = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <>
      <div
        id="top"
        className="w-full py-3.5 sticky top-0 left-0 right-0 bg-inherit text-inherit z-30"
      >
        <div className="flex items-center justify-around">
          <h1 className="text-4xl font-bold text-center">{`OKOYE`}</h1>
          <div className="flex items-center justify-center gap-8">
            <div className="sm:flex items-center hidden justify-center text-lg gap-8 sm:gap-12">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </div>
            <div onClick={toggleDarkMode} className="text-2xl">
              {isDarkMode ? <IoMoonSharp /> : <CiLight />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
