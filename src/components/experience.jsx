import React from "react";

function Experience(props) {
  return (
    <div className=" grid md:grid-cols-3 gap-4 opacity-75 hover:opacity-100">
      <div className="col-span-1 text-slate-300">{props.duration}</div>

      <div className="col-span-2 ">
        <h2 className="text-base text-slate-300">{props.role}</h2>

        <div>
          <p className="pb-2 text-slate-400">{props.organization}</p>
          <p className="text-slate-400">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
