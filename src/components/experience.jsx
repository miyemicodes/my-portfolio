import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";


function Experience(props){
return (
 
    <div className="experience-content grid grid-cols-3 gap-2">
    
      <div className="experience-date col-span-1">
          {props.duration}
      </div>

      <div className="experience-details col-span-2">
      <h2>
      {props.role}
      <MdOutlineArrowOutward /></h2>
      <p>
      {props.organization}
      </p>
      <p>
      {props.description}
      </p>
      </div>

    </div>
    
   

);

}

export default Experience;