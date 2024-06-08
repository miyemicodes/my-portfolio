import React, { useEffect, useState } from "react";
import Details from "./Details";
import Introduction from "./Introduction";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section>
      <div className="w-screen relative md:h-screen grid grid-cols-1 md:grid-cols-2 bg-slate-800 mix-blend-difference">
        <div
          className="absolute w-24 h-24 bg-gradient-to-r from-white via-transparent to-transparent rounded-full pointer-events-none"
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <Introduction />
        <Details />
      </div>
    </section>
  );
}

export default App;
