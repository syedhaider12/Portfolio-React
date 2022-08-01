import React from "react";

function Skills() {
  return (
    <div className="w-full p-2 my-10 md:h-screen " id="skills" >
      <div className="flex flex-col justify-center w-full">
        <h1 className="text-3xl tracking-widest text-center uppercase" data-aos="fade-right" data-aos-duration="1000">Skills</h1>
        <p className="text-[#0b377d] pt-2 tracking-widest text-center uppercase" data-aos="fade-right" data-aos-duration="1000">what i can do</p>
        <div className="grid grid-cols-1 gap-8 p-4 my-10 md:grid-cols-5 sm:grid-cols-3">
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/html.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>HTML</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/css.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>CSS</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/javascript.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>JAVA SCRIPT</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/react.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>react</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/nextjs.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>nextjs</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/github1.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>github</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/mongo.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>mongodb</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105 ">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/tailwind.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>tailwind</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105 ">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/python.png'
           className="h-[60px] w-[60px]"
           alt="">

           </img>
           <h2>Python</h2>
          </div>
          </div>
          <div className="p-5 text-center duration-300 ease-in rounded-lg shadow-lg bg-slate-100 shadow-gray-400 hover:scale-105 ">
          <div className="flex justify-around items-center text-[#0b377d]">
          <img src='assests/django.png'
           
           alt=""
           className="h-[60px] w-[60px]"
           >

           </img>
           <h2>Django</h2>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Skills;
