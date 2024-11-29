import React, { useContext, useEffect, useState } from "react";
// import { FaHome } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const {currentUser} = useContext(AuthContext)

  const fetch = useNotificationStore((state) => state.fetch);

  useEffect(() => {
    if (currentUser) {
      fetch(); // Fetch notifications count once when currentUser is set
    }
  }, [currentUser, fetch]);

  const number = useNotificationStore((state) => state.number);

  return (
    <div>
      <nav className="container  mx-auto h-24 flex justify-between items-center px-4">
        {/* left Side of Navbar*/}
        <div className="flex h-24 items-center gap-5 flex-[3] ">
          <Link to="" className="flex items-center">
            {/* <FaHome size={40} /> */}
            <img className="h-6" src="./footer_logo.png" alt="" />
            <span className="text-lg pl-1 font-bold">Find Home</span>
          </Link>
          <div className="hidden md:flex items-center gap-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
           
            <Link to="/list">List</Link>
          </div>
        </div>

        {/* right Side of Navbar */}
        <div className="hidden md:flex justify-end items-center h-[100%] lg:bg-gray-300 flex-[2]">
          {currentUser 
          ? (
            <div className="user flex items-center ">
              <img className="size-12 rounded-full object-cover mr-2"
               src={currentUser.avatar || '/noavatar.jpg'} alt="" />

               <span>{currentUser.username} </span>
               <Link to="/profile" className="bg-yellow-500 px-4 py-2 m-4 relative">
             {number > 0 && <span className="absolute -right-2 -top-2 bg-red-600 size-4 p-[.65rem] rounded-full  text-white flex justify-center items-center">{number}</span>}
                <span>Profile</span>
              </Link>
            </div>
          ) 
          : (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/register" className="bg-yellow-500 px-4 py-2 m-4">
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* BurgerMenu Icon Toggle */}
        <span
          className=" md:hidden z-[10000] cursor-pointer  text-4xl"
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          {burgerMenu ? <CgClose className="text-white" /> : <CiMenuFries />}
        </span>
      </nav>

      {/* Mobile Navbar  */}
      {/* <div
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
      </div> */}
      {/* Mobile Navbar  */}
      <div
  className={`w-full sm:w-[60%] bg-black h-screen overflow-hidden fixed top-0 text-white md:hidden flex flex-col p-10 gap-y-5 transition-all ease-in-out duration-500 ${
    burgerMenu ? "right-0 z-[9999]" : "-right-[100%] z-[-1]"
  }`}
>
  <Link to="/" onClick={() => setBurgerMenu(false)}>Home</Link>
  <Link to="/about" onClick={() => setBurgerMenu(false)}>About</Link>
  <Link to="/contact" onClick={() => setBurgerMenu(false)}>Contact</Link>
  <Link to="/list" onClick={() => setBurgerMenu(false)}>List</Link>
  {currentUser ? (
    <>
      <Link to="/profile" onClick={() => setBurgerMenu(false)}>Profile</Link>
    </>
  ) : (
    <>
      <Link to="/login" onClick={() => setBurgerMenu(false)}>Sign in</Link>
      <Link to="/register" onClick={() => setBurgerMenu(false)}>Sign up</Link>
    </>
  )}
</div>


    </div>
  );
};

export default Navbar;
