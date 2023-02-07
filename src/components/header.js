import React from "react";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <img
        className="headerX"
        src={require("../assets/x.png")}
        alt="'x' shaped close button image, doesn't actually do anything."
      />
      <div className="navUrl">
        <select name="nav">
          <option value="" disabled selected hidden>www.WelcomeToMyPortfolio.com/choose-a-page</option>
          <option value="home">Home</option>
          <option value="aboutMe">About Me</option>
          <option value="projects">Projects</option>
          <option value="contact">Contact</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
