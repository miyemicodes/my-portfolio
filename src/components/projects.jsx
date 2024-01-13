import React from "react";

function Projects(props) {
  return (
    <div className="project-content">
      <div className="project-list flex flex-row-reverse gap-7">
        <div>
          <p>{props.projectname}</p>
          <p> {props.description} </p>
        </div>

        <div className="project-img h-30">
          <img src={props.img} className="object-cover object-top h-[100px] w-[300px]"/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
