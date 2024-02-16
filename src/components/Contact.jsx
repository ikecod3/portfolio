/* eslint-disable no-unused-vars */
import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaMailBulk, FaShare, FaShareAlt } from "react-icons/fa";
import { FaFileExport, FaMailchimp, FaShareNodes } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact">
      <p className="text-center text-3xl tracking-widest mt-10">Get in Touch</p>
      <div className="flex flex-col items-center justify-around gap-x-8 ">
        <div className="w-full p-4 sm:p-8 sm:w-[40%]">
          {/* <p className="text-xl sm:text-2xl py-4"> Let's chat</p> */}

          <p className=" text-center flex justify-center items-center gap-4 text-lg bg-lime-200 rounded-lg font-medium sm:text-xl xl:text-2xl w-auto mx-auto p-4 cursor-pointer text-orange-600">
            <BiLogoWhatsapp /> +234 706 883 6917
          </p>
        </div>
        <div className=" w-[100%] sm:w-[80%] p-4 mb-10">
          {/* <p className="text-xl sm:text-2xl p-4 text-center">Compose Email</p> */}
          <form
            action="#"
            method="post"
            className="flex flex-1 flex-col gap-4
            "
          >
            <input
              type="text"
              className="p-4 rounded-lg w-full bg-transparent border-2"
              placeholder="Enter email subject"
              name="etitle"
            />
            <textarea
              name="ebody"
              placeholder="Compose email content"
              id=""
              cols="20"
              rows="5"
              className="p-4 rounded-lg w-full bg-transparent border-2"
            ></textarea>

            <button
              className="border-2 p-2 sm:text-xl rounded-xl w-auto max-w-24
             sm:max-w-40 text-center flex items-center justify-center gap-2"
            >
              Send
              <FaMailBulk />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
