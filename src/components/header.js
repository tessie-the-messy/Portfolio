import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <header>
      <div className="topBox d-flex">
        <h2 className="p-2 w-100 welcome">**~Welcome~**</h2>
        <div className="p-2 flex-shrink-1">
          <img
            className="headerX"
            src={require("../assets/x.png")}
            alt="'x' shaped close button, doesn't actually do anything."
          />
        </div>
      </div>
      <div className="navBox">
        <nav>
          <ul className="d-md-inline-flex">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="fakeUrl">
        <h2 className="fakeUrlText">www.WelcomeToMyPortfolio.com</h2>
      </div>
    </header>
  );
};

export default Header;
