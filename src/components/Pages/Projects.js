import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../header";
import Footer from "../footer";
import prepUrself from "../../assets/prepUrself.png";
import hogwarts from "../../assets/hogwarts.png";
import devLog from "../../assets/devLog.png";
import "../styles/Projects.css";
import "../../App.css";

const Projects = () => {
  return (
    <div>
      <Header />
      <div>
        <h2 id="projects">Projects</h2>
        {/* <a href="https://tessie-the-messy.github.io/Challenge1/">
          <img
            className="large-image"
            src="./assets/Horiseonimg.png"
            alt
          />
        </a> */}
        <section className="images">
          <h3>prepUrself</h3>
          <a href="https://bencha27.github.io/prepUrself/">
            <img src={prepUrself} alt="prepUrself site preview" />
          </a>
          <h3>Hogwarts Enrollment Portal</h3>
          <a href="http://lit-castle-55469.herokuapp.com/">
            <img src={hogwarts} alt="Hogwarts Enrollment Portal site preview" />
          </a>
          <h3>dev.log</h3>
          <a href="http://https://dev-log.herokuapp.com/">
            <img src={devLog} alt="dev.log site preview" />
          </a>
          {/* <img
            className="small-image"
            src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt
          /> */}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
