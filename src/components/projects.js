import React from "react";

import { GoBrowser } from "react-icons/go";

import { FaGithub } from "react-icons/fa";
function Projects() {
  return (
    <div className="w-full h-screen p-2 my-10" id="projects" >
      <div className="flex flex-col justify-center w-full ">
        <h1 className="text-3xl tracking-widest text-center uppercase " data-aos="fade-right" data-aos-duration="1000">
          Projects
        </h1>
        <p className="text-[#0b377d] pt-2 tracking-widest text-center uppercase" data-aos="fade-right" data-aos-duration="1000">
          what i have done
        </p>
        <div className="grid grid-cols-1 gap-8 p-4 my-10 md:grid-cols-3 sm:grid-cols-2">
          <div className="flex flex-col w-full h-auto duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
            <p className="py-2 font-bold text-center text-black">Netflix Clone</p>
            <div className="flex flex-row items-center justify-between m-2">
             
              <img
                src="assests/nextflix.JPG"
                alt=""
                className="h-[300px] w-full"
              ></img>
            </div>
            <div className="flex flex-row items-center justify-between p-2 ">
              <div className="flex flex-col text-black ">
                <p className="font-semibold">Technologies</p>
                <div className="flex flex-row">
                  <p>React</p>
                  <p className="mx-2">Next</p>
                  <p>Tailwind</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
               
              <a href='https://github.com/syedhaider12/NetflixClone'>
              <FaGithub className="w-5 h-5 text-black cursor-pointer " >
               
                </FaGithub>
                </a>
               
               
                <a href='https://netflix-clone-gold-six.vercel.app/'>
              <GoBrowser className="w-5 h-5 text-black cursor-pointer " >
               
                </GoBrowser>
                </a>
               
              
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
            <p className="py-2 font-bold text-center text-black">Strbl Front Design</p>
            <div className="flex flex-row items-center justify-between m-2">
             
              <img
                src='assests/strbl1.JPG'
                alt=""
                className="h-[300px] w-full"
              ></img>
            </div>
            <div className="flex flex-row items-center justify-between p-2 ">
              <div className="flex flex-col text-black ">
                <p className="font-semibold">Technologies</p>
                <div className="flex flex-row">
                  <p>React</p>
                  <p className="mx-2">Tailwind</p>
          
                </div>
              </div>
              <div className="flex flex-col items-center">
              <a href='https://github.com/syedhaider12/Strbl-frontend'>
              <FaGithub className="w-5 h-5 text-black cursor-pointer " >
               
                </FaGithub>
                </a>
               
               
                <a href='https://strbl-frontend.netlify.app/'>
              <GoBrowser className="w-5 h-5 text-black cursor-pointer " >
               
                </GoBrowser>
                </a>
               
              
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
            <p className="py-2 font-bold text-center text-black">MERN Nextflix Clone</p>
            <div className="flex flex-row items-center justify-between m-2">
              <img
                src="assests/signup.JPG"
                alt=""
                className="h-[300px] w-full"
              ></img>
            
            </div>
            <div className="flex flex-row items-center justify-between p-2 ">
              <div className="flex flex-col text-black ">
                <p className="font-semibold">Technologies</p>
                <div className="flex flex-row">
                  <p>React</p>
                  <p className="mx-2">Express</p>
                  <p >Node</p>
                  <p className="ml-1">MongoDb</p>
          
                </div>
              </div>
              <div className="flex flex-col items-center">
              <a href='https://github.com/syedhaider12/Netflix_clone_Mern'>
              <FaGithub className="w-5 h-5 text-black cursor-pointer " >
               
                </FaGithub>
                </a>
               
               
                
               
              
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
            <p className="py-2 font-bold text-center text-black">CRUD In Redux</p>
            <div className="flex flex-row items-center justify-between m-2">
              <img
                src="assests/crud.png"
                alt=""
                className="h-[300px] w-full"
              ></img>
             
            </div>
            <div className="flex flex-row items-center justify-between p-2 ">
              <div className="flex flex-col text-black ">
                <p className="font-semibold">Technologies</p>
                <div className="flex flex-row">
                  <p>React</p>
                  <p className="mx-2">Tailwind</p>
                 
                  <p >Redux</p>
                 
                </div>
              </div>
              <div className="flex flex-col items-center">
              <a href='https://github.com/syedhaider12/StaffManagement_Redux'>
              <FaGithub className="w-5 h-5 text-black cursor-pointer " >
               
                </FaGithub>
                </a>
               
               
             
               
              
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
            <p className="py-2 font-bold text-center text-black">Services App</p>
            <div className="flex flex-row items-center justify-between m-2">
              <img
                src="assests/services.JPG"
                alt=""
                className="h-[300px] w-full"
              ></img>
             
            </div>
            <div className="flex flex-row items-center justify-between p-2 ">
              <div className="flex flex-col text-black ">
                <p className="font-semibold">Technologies</p>
                <div className="flex flex-row">
                  <p>Python</p>
                  <p className="mx-2">Django</p>
                  <p >Sqlite</p>
                  <p className="ml-1">Bootstrap</p>
          
                </div>
              </div>
              <div className="flex flex-col items-center">
              <a href='https://github.com/syedhaider12/Service_app-python-Django-'>
              <FaGithub className="w-5 h-5 text-black cursor-pointer " >
               
                </FaGithub>
                </a>
               
               
               
               
              
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-auto duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
            <p className="py-2 font-bold text-center text-black">Youtube Downloader</p>
            <div className="flex flex-row items-center justify-between m-2">
              <img
                src='assests/youtube.JPG'
                alt=""
                className="h-[300px] w-full"
              ></img>
             
            </div>
            <div className="flex flex-row items-center justify-between p-2 ">
              <div className="flex flex-col text-black ">
                <p className="font-semibold">Technologies</p>
                <div className="flex flex-row">
                <p>Python</p>
                  <p className="mx-2">Django</p>
                  <p >Bootstrap</p>
                  <p className="ml-1">Pytube</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
              <a href='https://github.com/syedhaider12/Youtube-downloader'>
              <FaGithub className="w-5 h-5 text-black cursor-pointer " >
               
                </FaGithub>
                </a>
               
               
               
               
              
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Projects;
