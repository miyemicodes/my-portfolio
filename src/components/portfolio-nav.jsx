import React from "react";

function Nav() {
  return (
    <div className="port-Nav hidden lg:block">
      <nav className="text-slate-300 flex flex-col gap-2">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skill">Skill</a>
        <a href="#education">Education</a>
        <a href="#project">Project</a>
      </nav>
    </div>
  );
}

export default Nav;
