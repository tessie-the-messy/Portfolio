import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="card">
        <div className="d-flex card-header">
          <h2 className="card-title welcome">**~Welcome~**</h2>
          {/* <div className="p-2 flex-shrink-1">
          <img
          className="headerX"
          src={require("../assets/x.png")}
          alt="'x' shaped close button, doesn't actually do anything."
          />
        </div> */}
        </div>
        <nav className="navbar card-body navbar-expand-lg">
          <ul className="navbar-nav navbar-nav-hover">
            <Link to={"/"} class="nav-link">
              <li className="nav-item">Home</li>
            </Link>
            <Link to={"/aboutMe"} class="nav-link">
              <li>About Me</li>
            </Link>
            <Link to={"/projects"} class="nav-link">
              <li>Projects</li>
            </Link>
            <Link to={"/contact"} class="nav-link">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="fakeUrl col-9">
        <h2 className="fakeUrlText">www.WelcomeToMyPortfolio.com</h2>
      </div>
    </header>
  );
};

export default Header;
