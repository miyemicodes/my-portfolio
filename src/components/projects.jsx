import React from "react";

function Projects(props) {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse gap-7 opacity-100 hover:o hover:shadow-lg shadow-cyan-500/50 ">
      <div>
        <p className="text-lg text-slate-400">
          {props.projectname}
        </p>
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
