import { useState, React } from "react";
import styles from "../style";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="w-full top-0 flex py-6 justify-between items-center navbar">
      <img
        src={logo}
        alt="newaylogo"
        className="sm:w-[200px] w-[150px] sm:h-[76px] h-[56]"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal  cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li
          key="SignIn"
          className={`font-poppins font-medium cursor-pointer text-[20px] text-white ml-10 border-2 hover:bg-gradient-to-r from-red-500 to-red-700 border-red-700`}
        >
          <a href="#SignIn" className="p-[15px] text-[16px] m-2">
            Sign In
          </a>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={Toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            Toggle ? "flex" : "hidden"
          } p-6 bg-gradient-to-r from-[#678983] to-[#67a297] absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal  cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li
              key="SignIn"
              className={`font-poppins font-medium cursor-pointer text-[20px] mb-0 mt-4 text-white border-2 hover:bg-gradient-to-r from-red-500 to-red-700 border-white-700`}
            >
              <a href="#SignIn" className="p-[15px] text-[16px] m-2">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
