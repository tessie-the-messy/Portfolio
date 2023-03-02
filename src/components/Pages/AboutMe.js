import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header";
import Footer from "../footer";
import "../styles/AboutMe.css";
import "../../App.css";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title">About Me</h1>
        <div className="container">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <h3 className="card-title">Hello, my name is Tessa!</h3>
                <img
                  className="cardX flex-end"
                  src={require("../../assets/x.png")}
                  alt="'x' shaped close button, doesn't actually do anything."
                />
              </div>
            </div>
            <div className="card-body">
              <p>
                I'm a recent graduate of DU's Full-Stack Flex
                certificate program. I received my B.A. from the University of
                Northern Colorado's Acting Department. Around the time the
                Pandemic started, I decided I wanted to take a different path in
                life. 2 1/2 years later, I found myself here! I am an avid
                gamer, typically playing Dead by Daylight, Stardew Valley, and
                various graphic adventures.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="card homeCard">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h2 className="card-title">Skills</h2>
                  <img
                    className="cardX flex-end"
                    src={require("../../assets/x.png")}
                    alt="'x' shaped close button, doesn't actually do anything."
                  />
                </div>
              </div>
              <div className="card-body">
                <ul className="skills">
                  <li>HTML and CSS</li>
                  <li>JavaScript</li>
                  <li>Git</li>
                  <li>Third-party APIs (jQuery, Bootstrap)</li>
                </ul>
              </div>
            </div>
            <div className="card homeCard">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                  <h2 className="card-title">Education</h2>
                  <img
                    className="cardX flex-end"
                    src={require("../../assets/x.png")}
                    alt="'x' shaped close button, doesn't actually do anything."
                  />
                </div>
              </div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;