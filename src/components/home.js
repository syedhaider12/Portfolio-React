import React from "react";
import Main from "./main";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";
import Navbar from "./navbar";

function Home() {
  return (
    <>
   
    <Navbar/>
    <Main/>
    <Skills/>
    <Education/>
    <Projects/>
    </>

  )
}

export default Home