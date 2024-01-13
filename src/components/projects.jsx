import React from "react";

function Projects(props) {
  return (
    <div className="project-content">
      <div className="project-list md:flex flex-col justify-start lg:flex-row-reverse gap-7">
        <div>
          <p className="text-3xl">{props.projectname}</p>
          <p> {props.description} </p>
        </div>

        <div className="project-img h-30">
          <img
            src={props.img}
            className="object-contain object-top h-[80px] w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
