/* eslint-disable no-unused-vars */
import React from "react";
import { techData } from "../techData";
import { motion } from "framer-motion";
import { Tooltip } from "antd";

const Banner = () => {
  return (
    <>
      <div
        id="banner"
        className="grid place-items-center grid-cols-3 sm:flex flex-wrap items-center justify-center gap-10 max-w-screen-2xl mx-auto h-[50vh] sm:h-[20vh] my-20 sm:mt-4"
      >
        {techData.map((item) => (
          <Tooltip key={Math.random()} title={item.name}>
            <img
              key={Math.random()}
              src={item.url}
              alt={item.name}
              className="rounded-sm h-10 sm:h-14 sm:px-8 w-auto"
            />
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default Banner;
