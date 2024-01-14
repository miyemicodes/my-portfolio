import React from "react";
import Details from "./Details";
import Introduction from "./Introduction";

function App() {
  return (
    <div className="w-screen md:h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-800 px-10">
      <Introduction />
      <Details />
    </div>
  );
}

export default App;
