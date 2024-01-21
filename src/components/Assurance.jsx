import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { GetStarted } from "./index";
import { confidence } from "../assets/images";

const Partner = () => {
  return (
    <div className="flex items-center flex-col min-h-fit h-[calc(100vh-80px)] pb-[00px] max-md:h-auto max-mg:t-10 max-lg:mt-[100px]">
      <div className="flex mt-[0px] h-full max-lg:flex-col">
        <motion.div
          className="h-full flex-1 relative"
          variants={fadeIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="absolute w-full h-full bg-[#00000067] top-0 left-0"></div>
          <img
            src={confidence}
            alt="confident"
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
            <div className="mt-[8px] font-normal text-[60px] text-center w-[100%] text-main-blue max-md:text-[25px] max-lg:text-[35px]s">
              Let's do it together
            </div>
          </div>
          <p className="mt-6 text-[30px] text-center w-[90%] max-md:w-full px-4 text-[#9e9e9e] max-md:text-[15px] max-lg:text-[25px]">
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
