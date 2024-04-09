import React from "react";
import Details from "./Details";
import Introduction from "./Introduction";

function App() {
  return (
    <section>
      <div className="w-screen relative md:h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-800 mix-blend-difference">
        <Introduction />
        <Details />
      </div>

     {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-gray-700"></div> */}
    </section>
  );
}

export default App;
