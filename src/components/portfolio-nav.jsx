import React from "react";

function Nav() {
  return (
    <div className="port-Nav hidden lg:block">
      <nav className="text-slate-300 text-xl flex flex-col gap-2">
        <a href="#about" className="hover:translate-x-6 ">
          About
        </a>
        <a href="#experience" className="hover:translate-x-6 ">
          Experience
        </a>
        <a href="#skill" className="hover:translate-x-6 ">
          Skill
        </a>
        <a href="#education" className="hover:translate-x-6 ">
          Education
        </a>
        <a href="#project" className="hover:translate-x-6 ">
          Project
        </a>
      </nav>
    </div>
  );
}

export default Nav;
