import React from "react";
import Details from "./Details";
import Introduction from "./Introduction";


function App() {
  return (
    <div className="w-screen min-h-screen flex align-items-center justify-items-center bg-slate-800"  >
      <div className=" sm:flex flex-col my-9 mx-5 lg:flex-row">
        <Introduction/>
        <Details/>
        </div>
      
    </div>

  );
}

export default App;
