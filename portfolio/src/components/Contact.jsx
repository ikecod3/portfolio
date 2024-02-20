/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const VITE_START_POINT = import.meta.env.VITE_START_POINT;

  const handleWhatsAppChat = () => {
    // Construct the WhatsApp API link with the phone number
    const phoneNumber = "+2347068836917";
    const defaultMessage = encodeURIComponent(
      "Hello Okoye, I'd like to work with you."
    );
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${defaultMessage}`;

    // Open the WhatsApp chat in a new window/tab
    window.open(whatsappLink);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch the form data

    try {
      const response = await axios.post(`${VITE_START_POINT}/api/send-email`, {
        senderEmail,
        emailBody,
      });

      if (response.status === 200) {
        setSenderEmail("");
        setEmailBody("");
        toast.success("Email sent successfully");
      } else {
        toast.error("Failed to send email");
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div id="contact">
        <p className="text-center text-3xl tracking-widest mt-10">
          Get in Touch
        </p>
        <div className="flex flex-col items-center justify-around gap-x-8 ">
          <div className="w-full p-4 sm:p-8 sm:w-[40%]">
            {/* <p className="text-xl sm:text-2xl py-4"> Let's chat</p> */}

            <p
              className=" text-center flex justify-center items-center gap-4 text-lg bg-lime-200 rounded-lg font-medium sm:text-xl xl:text-2xl w-auto mx-auto p-4 cursor-pointer text-rose-600 min-w-max"
              onClick={handleWhatsAppChat}
            >
              <BiLogoWhatsapp size={35} /> +234 706 883 6917
            </p>
          </div>
          <div className=" w-[100%] sm:w-[80%] p-4 mb-10">
            {/* <p className="text-xl sm:text-2xl p-4 text-center">Compose Email</p> */}
            <form
              onSubmit={handleSubmit}
              method="post"
              className="flex flex-1 flex-col gap-4
            "
            >
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="p-4 rounded-lg w-full bg-transparent border-2"
                placeholder="Enter Email Address"
                required
                name="senderEmail"
              />
              <textarea
                name="emailBody"
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                placeholder="Compose email content"
                id=""
                cols="20"
                rows="5"
                required
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
    </>
  );
};

export default Contact;
