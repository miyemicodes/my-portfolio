import React, { useEffect, useRef } from "react";
import Details from "./Details";
import Introduction from "./Introduction";

function App() {
  const SpotLight = () => {
    const pageRef = useRef(null);
    const lightRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        console.log("react");
        pageRef.current.addEventListener("mousemove", handleMouseMove);
      };
      return () => {
        pageRef.current.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    return (
      <section>
        <div
          ref={pageRef}
          className="w-screen relative md:h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-800 mix-blend-difference"
        >
          <Introduction />
          <Details />
        </div>

        <div
          ref={lightRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-gray-700"
        ></div>
      </section>
    );
  };

  return SpotLight();
}

export default App;
