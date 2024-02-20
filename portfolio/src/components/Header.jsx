/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa6";
import { BsDownload, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div>
        <div
          id="header"
          className="flex flex-col-reverse sm:flex-row items-center justify-evenly sm:justify-center h-[90svh] sm:h-[70vh] px-8 w-full mx-auto gap-8"
        >
          {/* left area for animated header content */}
          <div className="sm:flex items-center justify-between w-full">
            <p className="w-1/5 hidden sm:block"></p>
            <div className="w-full grid p">
              <div className="flex flex-col items-start justify-around gap-4 w-full">
                <h1 className="text-[40px] sm:text-[3rem] font-extrabold ">
                  Hello 👋
                </h1>
                <h3 className="text-[1.5rem] sm:text-[2rem] h-12 mb-[3rem] sm:h-12">
                  I am
                  <TypeAnimation
                    sequence={[
                      " Ikechukwu Okoye",
                      5000,
                      " a Full Stack Web Developer",
                      5000,
                      " a Data Analyst",
                      3000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    wrapper="span"
                  />
                </h3>
              </div>
              {/* hire me and download cv button section */}
              <section className="flex gap-x-8 items-center justify-start pb-4 mt-5">
                <div>
                  <a
                    href="#"
                    download="okoye's cv"
                    className="flex items-center justify-center gap-4 text-inherit text-base font-extrabold border-2 py-2 text-center sm:text-left p-[0.48rem] rounded-xl hover:animate-pulse"
                  >
                    Download CV <BsDownload />
                  </a>
                </div>
                <Link
                  to="contact"
                  className=" hover:font-bold hover:text-white"
                >
                  <button
                    className="flex items-center justify-center p-1.5 px-6 border-2 py-2 bg-transparent border-lime-500 shadow-lg rounded-xl text-base hover:bg-[#2d82f8] hover:border-0 transition-all"
                    type="button"
                  >
                    Hire Me
                  </button>
                </Link>
              </section>
            </div>
          </div>
          {/* right area for header profile image */}
          <div className="mx-4 w-full flex flex-col gap-8 items-center justify-center">
            <img
              src="preview.png"
              alt="profile image"
              className="h-60 sm:h-auto w-auto rounded-full"
            />
            <div className="flex gap-8 text-xl sm:text-3xl">
              <FaGithub
                cursor="pointer"
                onClick={() =>
                  window.open("https://github.com/ikecod3", "_blank")
                }
              />
              <BsTwitterX
                cursor="pointer"
                onClick={() => window.open("https://x.com/iyke045", "_blank")}
              />
              <FaLinkedin
                cursor="pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ikechukwu-okoye/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
