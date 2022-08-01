import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Main() {
  const { text } = useTypewriter({
    words: [
      " Full Stack Developer.",
      " React Developer.",
      " Mern Stack Developer.",
      " Node Developer.",
    ],
    loop: 0,

    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 5000,
  });
  return (
    <div className="w-full h-screen py-10 text-center " id="main">
      <div className="max-w-[1020px] mx-auto w-full p-2 h-screen flex items-center justify-center">
        <div>
          <p className="font-bold tracking-widest text-gray-600 uppercase">
            Let's Build Something Togather
          </p>
          <h1>Hi, I'm Haider</h1>
          <h1>
            A<span className="text-[#0b377d]">{text}</span>
            <Cursor />
          </h1>
          <p className="py-3 max-w-[70%] m-auto">
            I'm Full Stack Developer comfortable with both front and back end of
            web development.Currently,I'm learning TypeScript and Graphql.
          </p>
          <div className="flex justify-around py-4  max-w-[330px] m-auto items-center" data-aos="fade-right" data-aos-duration="2000">
            <div className="p-5 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
            <a href='https://www.linkedin.com/in/haideerr/'>
              <FaLinkedinIn className="w-5 h-5 text-[#0b377d] cursor-pointer " >
               
                </FaLinkedinIn>
                </a>
            </div>
            <div className="p-5 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
            <a href='https://github.com/syedhaider12'>
              <FaGithub className="w-5 h-5 text-[#0b377d] cursor-pointer " >
               
                </FaGithub>
                </a>
            </div>
            <div className="p-5 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <HiMail
                className=" w-5 h-5 text-[#0b377d] cursor-pointer"
              />
             
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
