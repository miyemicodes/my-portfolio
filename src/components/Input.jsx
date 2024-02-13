import React from "react";

function Input() {
  return (
    <div className="py-12">
      <h2 className="text-4xl py-6 font-bold tracking-wide text-cyan-200">
        Get in Touch
      </h2>
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Your email Address"
          className="px-4 py-2 w-88 rounded-md"
        />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Input;
