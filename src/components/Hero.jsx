import React from "react";
import { video1, video2 } from "../assets/videos";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative h-screen w-[100vw]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Your Content */}
      <Navbar />
      <div className="w-full h-[calc(100vh-80px)] z-[11] absolute flex px-[64px] flex-col justify-center text-white">
        <h1 className="text-[60px] w-[50%]">
          Empower your future{" "}
          <span className="italic font-semibold "> with smart</span> investing
        </h1>
        <div className="text-[30px] w-[50%] text-[#9e9e9e]">
          Effortless wealth-building with tailored portfolios and intelligent
          strategies.
        </div>
        <div className="text-[18px] mt-[50px] border transition-all ease-in-out duration-2500 bg-black border-black py-[14px] flex items-center justify-center px-[40px] rounded-lg shadow-lg cursor-pointer hover:scale-[1.1] w-fit ">
          Get started
        </div>
      </div>
    </div>
  );
};

export default Hero;
