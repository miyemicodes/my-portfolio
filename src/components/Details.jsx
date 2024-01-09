import React from "react";
import About from "./About";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import myExperience from "../exper";
import mySkills from "../techSkills";


function createSkillsDetails(skillsDetails){
  return(
    <Skills
      id = {skillsDetails.id}
      key = {skillsDetails.id}
      expertise = {skillsDetails.expertise}
    />

  );
}


function createWorkDetails(experienceDetails){
    return(
      <Experience
        id = {experienceDetails.id}
        key = {experienceDetails.id}
        duration = {experienceDetails.duration}
        role = {experienceDetails.role}
        organization = {experienceDetails.organization}
        description = {experienceDetails.description}
      />

    );

}


function Details(){
 
return ( 
  <div className="port-details">

  <About/>

  <div>
    <h2 className="py-10 text-base font-bold tracking-wide text-slate-600 ">EXPERIENCE</h2>
      {myExperience.map(createWorkDetails)}
  </div>


  <div>
    <h2 className="py-10 text-base font-bold tracking-wide text-slate-600 ">SKILLS</h2>
  
    <div className="skills-list">

       {mySkills.map(createSkillsDetails)}
     </div>
  </div>
 
  <Education/>

  <Projects/>

  </div>

);

}

export default Details;