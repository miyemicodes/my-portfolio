import React from "react";

function Experience(props) {
  return (
    <div className="experience-content grid grid-cols-3 gap-x-6 gap-y-9">
      <div className="experience-date col-span-1 text-slate-300">
        {props.duration}
      </div>

      <div className="experience-details col-span-2 text-slate-400 ">
        <div>
          <h2 className="pb-4">{props.role}</h2>
        </div>

        <p className="pb-2">{props.organization}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Experience;
