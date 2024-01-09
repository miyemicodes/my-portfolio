import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";


function Experience(props){
return (
 
    <div className="experience-content">
    
      <div className="experience-date">
          {props.duration}
      </div>

      <div className="experience-details">
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