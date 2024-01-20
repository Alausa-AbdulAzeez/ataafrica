import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { GetStarted } from "./index";

const Fee = () => {
  return (
    <div className="flex items-center flex-col min-h-fit h-[calc(100vh-80px)] pb-[00px] max-md:h-auto max-md:pb-10 bg-black">
      <motion.div
        className="flex flex-col flex-1 items-center  justify-center"
        variants={fadeIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
      >
        <div className="flex flex-col">
          <div className="mt-[8px] font-normal text-[60px] text-center w-[100%] max-md:text-[30px] text-main-blue text-white">
            Unlocking <span className="text-[80px]">BIG</span> Value with{" "}
            <span className="text-[40px]">Small</span> Fees
          </div>
        </div>
        <p className="mt-6 text-[30px] text-center w-[90%] max-md:w-full px-4 text-[#9e9e9e]">
          Take control of your returns with fees ranging from 0.2% to 0.5% — a
          small price for significant financial gains.
        </p>

        <GetStarted styles={"bg-white text-black"} />
      </motion.div>

      <div className="w-full px-[64px] pb-[20px]">
        <p className="font-normal text-[14px] text-white text-center opacity-50 border-t border-t-[#c5c5c5] py-[20px]">
          Copyright © 2021 - 2022 Metaversus. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Fee;
