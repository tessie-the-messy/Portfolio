import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div>
        <ul className="page">
          <li className="select">
            <a href="#">Home</a>
          </li>
          <li className="select">
            <a href="#about">About Me</a>
          </li>
          <li className="select">
            <a href="#skills">Skills</a>
          </li>
          <li className="select">
            <a href="#projects">Projects</a>
          </li>
          <li className="select">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;