import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
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
        <div className="about">
          <p>
            My name is Tessa, and I'm currently studying to be a web developer
            through DU's Full-Stack Flex program. I recieved my B.A. from the
            University of Northern Colorado's Acting Department. Around the time
            the Pandemic started, I decided I wanted to take a different path in
            life, and 2 1/2 years later, found myself here! I am an avid gamer,
            typically playing Dead by Daylight, Valorant, and various graphic
            adventures.
          </p>
        </div>
        <h2 id="skills">Skills</h2>
        <section>
          <p>Upon graduation, I will have learned:</p>
          <ul className="skills">
            <li>HTML and CSS</li>
            <li>Git</li>
            <li>JavaScript</li>
            <li>Third-party APIs (jQuery, Bootstrap)</li>
            <li>Server-side APIs, AJAX, and JSON</li>
            <br />
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;