import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-16 shadow-xl z-[100] bg-slate-100 ">
      <div className="flex items-center justify-between w-full h-full px-2">
        <div className="flex items-center mx-3">
          <img
            src="assests/haidershah.jpg"
            alt=""
            className="rounded-full h-[50px] w-[50px]"
          ></img>
          <h2 className="mx-2">Haider</h2>
        </div>
        <div>
          <ul className="items-center hidden mr-10 md:flex">
            <li className="ml-10 text-sm">
              <Link to="main" smooth={true}>
                Home
              </Link>
            </li>

            <li className="ml-10 text-sm">
              <Link to="skills" smooth={true} offset={-70}>
                {" "}
                Skills
              </Link>
            </li>
            <li className="ml-10 text-sm">
              <Link to="education" smooth={true} offset={-80}>
                Education
              </Link>
            </li>
            <li className="ml-10 text-sm">
              <Link to="projects" smooth={true} offset={-70}>
                projects
              </Link>
            </li>

            <a
              href="/assests/haiderresume.pdf"
              download="resume"
              className="p-2 ml-5 bg-[#0b377d] text-white rounded-lg"
            >
              Resume
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25}></AiOutlineMenu>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
            : null
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] p-5 ease-in duration-500 h-screen bg-[#ecf0f3]"
              : "fixed top-0 left-[-100%] p-5  ease-in duration-500  "
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <h2>Haider</h2>
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose></AiOutlineClose>
              </div>
            </div>
            <div className="my-4 border-b border-gray-400">
              <p className="w-[85%] md-[90%] py-4">
                Let's Build Something Togather
              </p>
            </div>
            <div className="flex flex-col ">
              <ul>
                <li className="py-3 text-sm ">
                  <Link to="service" smooth={true}>
                    Home
                  </Link>
                </li>

                <li className="py-3 text-sm">
                  <Link to="skills" smooth={true} offset={750}>
                    Skills
                  </Link>
                </li>
                <li className="py-3 text-sm ">
                  <Link to="education" smooth={true} offset={-80}>
                    Education
                  </Link>
                </li>
                <li className="py-3 text-sm ">
                  <Link to="projects" smooth={true} offset={-70}>
                    Projects
                  </Link>
                </li>
              </ul>
              <div className="pt-20">
                <p className="tracking-widest font-bold text-[#0b377d]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-2 w-full sm:w-[80%]">
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <a href="https://www.linkedin.com/in/haideerr/">
                      <FaLinkedinIn className="w-5 h-5 text-[#0b377d] cursor-pointer "></FaLinkedinIn>
                    </a>
                  </div>
                  <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                    <a href="https://github.com/syedhaider12">
                      <FaGithub className="w-5 h-5 text-[#0b377d] cursor-pointerr "></FaGithub>
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
