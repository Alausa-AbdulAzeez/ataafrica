import React from "react";

const GetStarted = ({ styles }) => {
  return (
    <div
      className={`text-[18px] mt-[50px] border transition-all ease-in-out duration-2500 bg-black text-white border-black py-[14px] flex items-center justify-center px-[40px] rounded-lg shadow-lg cursor-pointer hover:scale-[1.1] w-fit ${styles}`}
    >
      Get started
    </div>
  );
};

export default GetStarted;
