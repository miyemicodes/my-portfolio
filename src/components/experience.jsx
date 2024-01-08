import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function Experience(){
return (
  <div>
  <h2 className="py-10 text-base font-bold tracking-wide text-slate-600 ">EXPERIENCE</h2>
    <div className="experience-content">
      <div className="experience-date">
          Nov - Dec 2023
      </div>
      <div className="experience-details">
      <h2>Software Developer Bootcamp <MdOutlineArrowOutward /></h2>
      <p>Women Techsters Fellowship</p>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti hic vero
      dignissimos numquam, ducimus saepe odit iste omnis cumque quo voluptates
      libero laborum asperiores. Eaque, voluptas similique. Eum, similique
      consequatur.
      </p>
        </div>
    </div>
    
    <div className="experience-content">
      <div className="experience-date">
          Nov 2023 - Feb 2024
      </div>
      <div className="experience-details">
      <h2>Software Developer<MdOutlineArrowOutward /></h2>
      <p>Her Tech Trails Academy</p>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti hic vero
      dignissimos numquam, ducimus saepe odit iste omnis cumque quo voluptates
      libero laborum asperiores. Eaque, voluptas similique. Eum, similique
      consequatur.
      </p>
        </div>
    </div>

    <div className="experience-content">
      <div className="experience-date">
        Jan 2023- Present
      </div>
      <div className="experience-details">
          <h2>Freelancer <MdOutlineArrowOutward /></h2>
          <p>Fiverr </p>
          <p>
          Over the course of my career, I have worked as a Front End Web
          Developer, showcasing expertise in transforming diverse design 
          formats like PSD, XD, Sketch, and FIGMA into HTML, CSS, Tailwind CSS
            and Bootstrap. I possess a strong command of HTML5, CSS3, Bootstrap, 
            Tailwind CSS, JavaScript, and React JS. I am proud of my proficiency
            in developing responsive web templates, mobile templates, User 
            friendly websites and engaging in front-end development using a 
            variety of front-end technologies.
          </p>

          <a href="https://www.fiverr.com/s/qzV2DZ">Contact me on Fiverr <MdOutlineArrowOutward /></a>
      </div>
    </div>
  </div>
);

}

export default Experience;