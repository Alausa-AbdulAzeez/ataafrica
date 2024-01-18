import React from "react";
import { navLinks } from "../assets/constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between z-10 px-[64px] w-full text-white h-[80px] items-center sticky top-0 left-0">
      <div className="text-[28px]">Advisor</div>
      <ul className="flex gap-[40px] text-[18px]">
        {navLinks?.map((item, index) => {
          return (
            <NavLink
              key={item?.label}
              style={{ textDecoration: "none" }}
              to={item.href}
            >
              {({ isActive }) => (
                <li
                  className={`leading-normal text-[18px] hover:text-[#c5baba] ${
                    isActive
                      ? "text-[#ffffff] underline underline-offset-4"
                      : "text-[#ffffff]"
                  }`}
                >
                  {item?.label}
                </li>
              )}
            </NavLink>
          );
        })}
      </ul>

      <div className="flex gap-[20px]">
        <div className="border transition-all ease-in-out duration-2500 border-white py-[14px] flex items-center justify-center px-[40px] rounded-lg shadow-lg cursor-pointer hover:scale-[1.1] ">
          Login
        </div>
        <div className="border transition-all ease-in-out duration-2500 bg-black border-black py-[14px] flex items-center justify-center px-[40px] rounded-lg shadow-lg cursor-pointer hover:scale-[1.1] ">
          Get started
        </div>
      </div>
    </div>
  );
};

export default Navbar;
