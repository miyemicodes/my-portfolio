import React from "react";

function Input() {
  return (
    <div className="py-12">
      <h2 className="text-4xl py-6 font-bold tracking-wide text-cyan-200">
        Get in Touch
      </h2>
      <input type="email" placeholder="Your email Address" />
      <button>Submit</button>
    </div>
  );
}

export default Input;
