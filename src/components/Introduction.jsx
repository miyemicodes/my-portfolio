import React from "react";
import Socials from "./socials";
import Nav from "./portfolio-nav";

function Introduction(){

return(

 
   <div className="port-intro flex flex-1 flex-col align-center justify-between px-10 py-10">
    <div className="port-info flex flex-col gap-3">

    <h1 className="text-5xl font-bold tracking-wide text-slate-200" >Godfrey Elizabeth </h1>
    <h2 className="text-xl font-bold text-slate-300">Frontend Developer</h2>
    <p className="text-lg text-slate-400">
      I build Responsive,pixel perfect and highly functional websites.
    </p>

    </div>

    <Nav/>
    
    <Socials/>
   </div>
 
 
      
);

}

export default Introduction;