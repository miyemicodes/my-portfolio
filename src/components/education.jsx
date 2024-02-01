import React from "react";

function Education(props) {
  return (
    <div>
      <p className="text-xl text-cyan-200">{props.Academy} </p>
      <p className="text-lg text-slate-300"> {props.course} </p>
      <p className="text-sm text-slate-200"> {props.period} </p>
      <p className="text-sm text-slate-200"> {props.degree} </p>
    </div>
  );
}

export default Education;
