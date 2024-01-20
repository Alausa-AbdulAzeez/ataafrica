import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { GetStarted } from "./index";

const Partner = () => {
  return (
    <div className="flex items-center flex-col min-h-fit h-[calc(100vh-80px)] pb-[00px] max-md:h-auto max-md:pb-10 ">
      <div className="flex flex-row-reverse  h-full">
        <motion.div
          className="h-full flex-1 relative"
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="absolute w-full h-full bg-[#00000067] top-0 left-0"></div>
          <img
            src="https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Trust"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col flex-1 items-center  justify-center"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col">
            <div className="mt-[8px] font-normal text-[60px] text-center w-[100%] max-md:text-[30px] text-main-blue">
              Trust in Financial Excellence
            </div>
          </div>
          <p className="mt-6 text-[30px] text-center w-[90%] max-md:w-full px-4 text-[#9e9e9e]">
            Over a decade of delivering exceptional financial solutions,
            managing billions for our clients with the utmost integrity and
            dedication.
          </p>

          <GetStarted />
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
