import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

function Socials() {
  return (
    <div className="port-Socials">
      <ul className="flex gap-3 text-slate-400">
        <li className="text-2xl">
          <a href="https://github.com/miyemicodes">
            <FaGithub />
          </a>
        </li>

        <li className="text-2xl">
          <a href="https://github.com/miyemicodes">
            <FaInstagram />
          </a>
        </li>

        <li className="text-2xl">
          <a href="https://github.com/miyemicodes">
            <FaXTwitter />
          </a>
        </li>

        <li className="text-2xl">
          <a href="https://github.com/miyemicodes">
            <FaLinkedin />
          </a>
        </li>

        <li className="text-2xl">
          <a href="https://github.com/miyemicodes">
            <FaMediumM />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
