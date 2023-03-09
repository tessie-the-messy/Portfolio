import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "themesberg/windows-95-ui-kit/css/w95.css";
import Header from "../header";
// import Footer from "../footer";
import "../styles/AboutMe.css"
import "../../App.css";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title">About Me</h1>
        <div className="itemsContainer container d-flex">
          <div className="card col-8">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">Hello, my name is Tessa!</h3>
            </div>
            <div className="card-body d-flex flex-column align-items-center">
              <p className="card-text fs-6 h-100">
                I'm a recent graduate of the University of Denver's Full Stack Flex certificate program. I worked professionally as an Actress from 2015—2019. Around the time the Pandemic started, I decided I wanted to take a different path in life. Three-ish years later, I found myself here! I am an avid gamer, typically playing Dead by Daylight, Stardew Valley, and various graphic adventures.
              </p>
              <div class="align-self-end">
                <button class="btn mr-2 border-dark"
                    type="button"><span class="btn-text">Cool!</span></button>
            </div>
            </div>
          </div>
          <div className="container">
            <div className="card mb-4">
              <div className="card-header">
                <h3 className="card-title mb-4 mb-lg-1 fs-4">Skills</h3>
              </div>
              <div className="card-body">
                <ul className="card-text skills">
                  <li>HTML and CSS</li>
                  <li>JavaScript</li>
                  <li>Git</li>
                  <li>Third-party APIs (jQuery, Bootstrap)</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title mb-4 mb-lg-1 fs-4">Education</h3>
              </div>
              <div className="card-body">
                <p className="card-text"><span className="fw-semibold">University of Denver</span> -- Full Stack Flex Certificate</p>
                <p className="card-text"><span className="fw-semibold">University of Northern Colorado</span> -- Bachelor of Arts in Theatre with an emphasis in Acting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
