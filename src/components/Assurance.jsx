import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Link } from "react-router-dom";
import { GetStarted } from "./index";
import { confidence } from "../assets/images";

const Partner = () => {
  return (
    <div className="flex items-center flex-col min-h-fit h-[calc(100vh-80px)] pb-[00px] max-md:h-auto max-md:pb-10">
      {/* <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` mx-auto flex flex-col items-center mt-[40px]`}
      ></motion.div> */}

      <div className="flex mt-[0px] h-full">
        <motion.div
          className="h-full flex-1 relative"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="absolute w-full h-full bg-[#00000067] top-0 left-0"></div>
          <img
            // src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600"
            src={confidence}
            // src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="customer"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col flex-1 items-center  justify-center"
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col">
            <div className="mt-[8px] font-normal text-[60px] text-center w-[100%] max-md:text-[30px] text-main-blue">
              Let's do it together
            </div>
          </div>
          <p className="mt-6 text-[30px] text-center w-[90%] max-md:w-full px-4 text-[#9e9e9e]">
            Experience financial peace of mind with our transparent, reliable
            investment solutions.
          </p>

          <GetStarted />
        </motion.div>
      </div>
    </div>
  );
};

export default Partner;
