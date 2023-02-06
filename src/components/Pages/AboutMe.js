import React from "react";
import Header from "../header";
import Footer from "../footer";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div>
        <h2 id="about">About Me</h2>
        <section>
          <img src={require("../../assets/TessaPic.jpg")} width="250px" height="250px" />
          <p>
            My name is Tessa, and I'm currently studying to be a web developer
            through DU's Full-Stack Flex program. I recieved my B.A. from the
            University of Northern Colorado's Acting Department. Around the time
            the Pandemic started, I decided I wanted to take a different path in
            life, and 2 1/2 years later, found myself here! I am an avid gamer,
            typically playing Dead by Daylight, Valorant, and various graphic
            adventures.
          </p>
        </section>
        <h2 id="skills">Skills</h2>
        <section>
          <p>Upon graduation, I will have learned:</p>
          <ul>
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
