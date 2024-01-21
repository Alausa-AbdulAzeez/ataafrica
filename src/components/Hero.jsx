import React, { useEffect, useState } from "react";
import { video1, video2 } from "../assets/videos";
import { Navbar } from "./index";

const Hero = () => {
  // SCROLL VIEW
  const [isVisible, setIsVisible] = useState(false);

  // Function to Check if the user has scrolled down enough to show the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // End of unction to check if the user has scrolled down enough to show the button

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full ">
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

      <Navbar isVisible={isVisible} />
      <div className="w-full h-[calc(100vh-80px)] z-[9] absolute flex px-[64px] max-md:px-[12px] flex-col justify-center text-white">
        <h1 className="text-[60px] w-[50%] max-md:w-[90%] max-lg:w-[80%] max-md:text-[25px] max-lg:text-[35px]">
          Empower your future{" "}
          <span className="italic font-semibold "> with smart</span> investing
        </h1>
        <div className="text-[30px] w-[50%] text-[#9e9e9e] max-md:w-[90%] max-md:text-[15px] max-lg:w-[80%] max-lg:text-[25px]">
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
