import React from "react";
import Details from "./Details";
import Introduction from "./Introduction";

function App() {
  return (
    <div className="w-screen min-h-screen flex align-items-center justify-items-center bg-slate-800 lg:h-64 px-20">
      <div className=" sm:flex flex-col m lg:flex-row ">
        <Introduction />
        <Details />
      </div>
    </div>
  );
}

export default App;
