import { navLinks } from "../assets/constants";
import { NavLink } from "react-router-dom";

const Navbar = ({ isVisible }) => {
  return (
    <div
      className={`max-md:px-[12px] max-lg:px-[28px]  flex justify-between z-[10] px-[64px] w-full text-white h-[80px] items-center fixed top-0 left-0 ${
        isVisible ? "backdrop-blur-2xl bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-[28px] max-md:text-[14px] max-lg:text-[20px]">
        Advisor
      </div>
      <ul className="flex gap-[40px] text-[18px] max-lg:text-[14px] max-lg:gap-[20px] max-md:hidden">
        {navLinks?.map((item, index) => {
          return (
            <NavLink
              key={item?.label}
              style={{ textDecoration: "none" }}
              to={item.href}
            >
              {({ isActive }) => (
                <li
                  className={`leading-normal text-[18px] max-lg:text-[14px]  hover:text-[#c5baba] ${
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

      <div className="flex gap-[20px] items-center max-lg:gap-[14px]">
        <div className="border transition-all ease-in-out duration-2500 border-white py-[14px] max-md:text-[12px] max-lg:text-[14px] max-lg:py-[10px] max-md:py-[5px] max-lg:h-fit max-md:px-[10px] max-lg:px-[16px] flex items-center justify-center px-[40px] rounded-lg shadow-lg cursor-pointer hover:scale-[1.1] ">
          Login
        </div>
        <div className="border transition-all ease-in-out duration-2500 bg-black border-black max-md:text-[12px] max-lg:text-[14px] py-[14px] max-lg:py-[10px] max-md:py-[5px] max-md:h-fit max-md:px-[10px] max-lg:px-[16px] flex items-center justify-center px-[40px] rounded-lg shadow-lg cursor-pointer hover:scale-[1.1] ">
          Get started
        </div>
      </div>
    </div>
  );
};

export default Navbar;
