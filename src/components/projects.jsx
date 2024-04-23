import React from "react";

function Projects({ projectname, description, img }) {
  return (
    <div className="flex flex-col-reverse p-4 lg:flex-row-reverse gap-7 opacity-100  hover:bg-gray-700 hover:border border-gray-500 rounded-tr-3xl hover:shadow-lg shadow-cyan-500/50 ">
      <div>
        <p className="text-lg text-slate-400">{projectname}</p>
        <p className="text-sm text-slate-300"> {description} </p>
      </div>

      <div className="h-[115px] w-[200px] flex-shrink-0">
        <img
          src={img} alt={projectname}
          className="object-cover object-top h-[115px] w-[200px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Projects;
