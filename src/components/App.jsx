import React from "react";
import Details from "./Details";
import Introduction from "./introduction";


function App() {
  return (
<div className="container w-full h-screen flex align-items-center justify-items-center bg-slate-500 sm:flex flex-col lg:flex-row">
   <Introduction/>
   <Details/>
</div>

  );
}

export default App;
