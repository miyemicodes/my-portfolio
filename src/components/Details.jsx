import React from "react";
import About from "./About";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import myExperience from "../exper";
import images from "../assets";
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

function createProjectDetails(projectDetails){
  return (
    <Projects
       id = {projectDetails.id}
       key = {projectDetails.id}
       projectname = {projectDetails.projectname}
       description = {projectDetails.description}
       img = {projectDetails.img}
    />
  );
}




function Details(){
 
return (
  <div
    className="port-details lg:flex-1 px-10 overflow-y-auto overflow-hidden remove-scrollbar {
    "
  >
    <About />

    <div>
      <h2 className="py-10 text-base font-bold tracking-wide text-slate-600 ">
        EXPERIENCE
      </h2>
      {myExperience.map(createWorkDetails)}
    </div>

    <div>
      <h2 className="py-10 text-base font-bold tracking-wide text-slate-600 ">
        SKILLS
      </h2>

      <div className="skills-list flex gap-4 flex-wrap">
        {mySkills.map(createSkillsDetails)}
      </div>
    </div>

    <Education />

    <div className="w-full">
      <h2 className="py-10 text-base font-bold tracking-wide text-slate-600 ">
        PROJECTS
      </h2>
      <div className="flex flex-col gap-6">
        {images.map(createProjectDetails)}
      </div>
    </div>
  </div>
);

}

export default Details;