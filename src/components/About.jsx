/* eslint-disable no-unused-vars */
import { Timeline } from "antd";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center mx-auto h-[100vh] mt-16  sm:mt-0"
    >
      <p className="text-center text-3xl border-blue-400 border-b-2 tracking-widest">
        About
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-around">
        {/* education */}
        <div className="flex flex-col items-center justify-center px-8 sm:px-0">
          <h1 className="p-8 font-bold text-4xl">Education</h1>
          <Timeline
            className="text-inherit"
            mode="right"
            items={[
              {
                label: (
                  <>
                    <p className="text-lg sm:text-2xl">2019</p>
                  </>
                ),
                color: "green",
                children: (
                  <>
                    <p className="text-lg sm:text-2xl">
                      Bachelor of Science in Statistics
                    </p>
                  </>
                ),
              },
              {
                label: (
                  <>
                    <p className="text-lg sm:text-2xl">2015</p>
                  </>
                ),
                color: "green",
                children: (
                  <>
                    <p className="text-lg sm:text-2xl">
                      National Diploma in Computer Science
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>

        {/* experience */}
        <div className="flex flex-col px-8 sm:px-0 items-center justify-center">
          <h1 className="p-8 font-bold text-4xl">Experience</h1>
          <Timeline
            className="text-inherit"
            reverse={true}
            items={[
              {
                children: (
                  <>
                    <p className="text-lg sm:text-2xl">
                      Full Stack Web Developer - #AlphaDev Team - Nigerian Air
                      Force
                    </p>
                  </>
                ),
                dot: "",
              },
              {
                children: (
                  <>
                    <p className="text-lg sm:text-2xl">
                      Remote Consultant - League of Statistician
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <p className="text-lg sm:text-2xl">
                      FreeLance - Web Developer
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <p className="text-lg sm:text-2xl">
                      Full Stack Developer - GoMyCode BootCamp
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
