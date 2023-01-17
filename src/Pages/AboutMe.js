import React from "react";
import Navigation from "../components/navigation";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div>
        <h2 id="about">About Me</h2>
        <section>
          <img src="./assets/TessaPic.jpg" width="250px" height="250px" />
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
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;