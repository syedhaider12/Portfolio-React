import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoCodeWorking } from "react-icons/io5";
function Education() {
  return (
    <div  id="education"  >
       <h1 className="my-10 text-3xl tracking-widest text-center uppercase" data-aos="fade-right" data-aos-duration="1000">education</h1>
    <VerticalTimeline lineColor={ "black"}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(241 245 249)", color: "Black" }}
        contentArrowStyle={{ borderRight: "10px solid  rgb(241 245 249)" }}
        date="2020 - 2022"
        iconStyle={{ background: "black", color: "#fff" }}
         icon={<IoCodeWorking />
         
        }
       

      >
        <h3 className="vertical-timeline-element-title">MASTER</h3>
        <h4 className="vertical-timeline-element-subtitle">COMPUTER SCIENCE</h4>
        <p>
          Altinbas University Istanbul Turkey.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: "rgb(241 245 249)", color: "Black" }}
     contentArrowStyle={{ borderRight: "10px solid  rgb(241 245 249)" }}
     date="2014 - 2018"
     iconStyle={{ background: "black", color: "#fff" }}
      icon={<IoCodeWorking />
        }
      >
        <h3 className="uppercase vertical-timeline-element-title">Bachelor</h3>
        <h4 className="vertical-timeline-element-subtitle">COMPUTER SCIENCE</h4>
        <p>
         Iqra University Islamabad Pakistan.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(241 245 249)", color: "Black" }}
      contentArrowStyle={{ borderRight: "10px solid  rgb(241 245 249)" }}
      date="2014 - 2018"
      iconStyle={{ background: "black", color: "#fff" }}
       icon={<IoCodeWorking />
         }
       >
         <h3 className="uppercase vertical-timeline-element-title">Intermediate</h3>
         <h4 className="vertical-timeline-element-subtitle">COMPUTER SCIENCE</h4>
         <p>
          IMCB H-9 Islamabad Pakistan.
         </p>
      </VerticalTimelineElement>
      
      
    </VerticalTimeline>
  </div>
  );
}

export default Education;
