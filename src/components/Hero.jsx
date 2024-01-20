import React, { useEffect, useState } from "react";
import { video1, video2 } from "../assets/videos";
import Navbar from "./Navbar";

const Hero = () => {
  // SCROLL VIEW
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled down enough to show the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can adjust the scroll behavior here
    });
  };

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

      {/* Your Content */}
      <Navbar isVisible={isVisible} />
      <div className="w-full h-[calc(100vh-80px)] z-[9] absolute flex px-[64px] flex-col justify-center text-white">
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
