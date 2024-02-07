import React from "react";
import About from "./About";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import myExperience from "../exper";
import images from "../assets";
import mySkills from "../techSkills";
import Studies from "../Education";
import Input from "./input";

function createSkillsDetails(skillsDetails) {
  return (
    <Skills
      id={skillsDetails.id}
      key={skillsDetails.id}
      expertise={skillsDetails.expertise}
    />
  );
}

function createStudiesDetails(studiesDetails) {
  return (
    <Education
      id={studiesDetails.id}
      key={studiesDetails.id}
      Academy={studiesDetails.Academy}
      course={studiesDetails.course}
      period={studiesDetails.period}
      degree={studiesDetails.degree}
    />
  );
}

function createWorkDetails(experienceDetails) {
  return (
    <Experience
      id={experienceDetails.id}
      key={experienceDetails.id}
      duration={experienceDetails.duration}
      role={experienceDetails.role}
      organization={experienceDetails.organization}
      description={experienceDetails.description}
    />
  );
}

function createProjectDetails(projectDetails) {
  return (
    <Projects
      id={projectDetails.id}
      key={projectDetails.id}
      projectname={projectDetails.projectname}
      description={projectDetails.description}
      img={projectDetails.img}
    />
  );
}

function Details() {
  return (
    <div className=" px-8 overflow-y-auto overflow-hidden remove-scrollbar pb-8">
      <About />
      <div className="relative" id="experience">
        <h2 className="sticky top-0 py-4 text-base font-bold tracking-wide text-slate-600 backdrop-blur">
          EXPERIENCE
        </h2>
        <div className="flex flex-col gap-6 ">
          {myExperience.map(createWorkDetails)}
        </div>
      </div>
      <div className="relative" id="skill">
        <h2 className="sticky top-0 py-4 text-base font-bold tracking-wide text-slate-600 backdrop-blur">
          SKILLS
        </h2>

        <div className="skills-list flex gap-4 flex-wrap">
          {mySkills.map(createSkillsDetails)}
        </div>
      </div>

      <div id="education">
        <h2 className="py-10 text-base font-bold tracking-wide text-slate-600 ">
          EDUCATION
        </h2>
        <div className="flex flex-col gap-6 ">
          {Studies.map(createStudiesDetails)}
        </div>
      </div>

      <div className="w-full relative" id="project">
        <h2 className="sticky top-0 py-4 text-base font-bold tracking-wide text-slate-600 backdrop-blur">
          PROJECTS
        </h2>
        <div className="flex flex-col gap-6">
          {images.map(createProjectDetails)}
        </div>
      </div>

      <Input/>

    </div>
  );
}

export default Details;
