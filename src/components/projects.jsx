import React from "react";

function Projects(props) {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-7">
      <div>
        <p className="text-base text-slate-200">{props.projectname}</p>
        <p className="text-sm text-slate-300"> {props.description} </p>
      </div>

      <div className="h-[115px] w-[200px] flex-shrink-0">
        <img
          src={props.img}
          className="object-cover object-top h-[115px] w-[200px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Projects;
