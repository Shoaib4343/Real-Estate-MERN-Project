import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <div>
      <nav className="container  mx-auto h-24 flex justify-between items-center  px-4">
        {/* left Side of Navbar*/}
        <div className="flex h-24 items-center gap-5 flex-[3] ">
          <Link to="" className="flex items-center">
            {/* <FaHome size={40} /> */}
            <img className="h-6" src="./logo.png" alt=""  />
            <span className="text-lg pl-1 font-bold">Find Home</span>
          </Link>
          <div className="hidden md:flex items-center gap-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/agents">Agents</Link>
            <Link to="/list">List</Link>
          </div>
        </div>

        {/* right Side of Navbar */}
        <div className="hidden md:flex justify-end items-center h-[100%] lg:bg-gray-300 flex-[2]">
          <Link to="">Sign in</Link>
          <Link to="" className="bg-yellow-500 px-4 py-2 m-4">
            Sign up
          </Link>
        </div>

        {/* BurgerMenu Icon Toggle */}
        <span
          className=" md:hidden z-50 cursor-pointer  text-4xl"
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          {burgerMenu ? <CgClose className="text-white" /> : <CiMenuFries />}
        </span>
      </nav>

      {/* Mobile Navbar  */}
      <div
        className={`w-full sm:w-[60%] bg-black h-screen overflow-hidden fixed top-0  text-white md:hidden flex flex-col p-10 gap-y-5 transition-all ease-in-out duration-500 ${
          burgerMenu ? "right-0 " : "-right-[100%]  "
        }`}
      >
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
        <Link to="">Agents</Link>
        <Link to="">Sign in</Link>
        <Link to="">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;