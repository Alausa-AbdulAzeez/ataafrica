import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[100vh] bg-black flex items-center flex-col justify-center">
      <div className="text-white text-3xl">Page not found</div>
      <div className="text-white text-[50px]">404</div>
      <Link to="/">
        <div
          className={`text-[18px] max-md:h-fit  mt-[50px] border transition-all ease-in-out duration-2500 bg-white   text-black border-black py-[14px] flex items-center justify-center px-[40px] rounded-lg shadow-lg cursor-pointer hover:scale-[1.1] w-fit`}
        >
          Back home
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
