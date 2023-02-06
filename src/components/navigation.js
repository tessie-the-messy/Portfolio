import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div>
        <ul className="page">
          <Link to={"/"}>
            <a>
              <li className="select">About Me</li>
            </a>
          </Link>
          <Link to={"/projects"}>
            <a>
              <li className="select">Projects</li>
            </a>
          </Link>
          <Link to={"/contact"}>
            <a>
              <li className="select">Contact</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
