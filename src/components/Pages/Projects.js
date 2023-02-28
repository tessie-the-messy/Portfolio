import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header";
import Footer from "../footer";
// import prepUrself from "../../assets/prepUrself.png";
// import hogwarts from "../../assets/hogwarts.png";
// import devLog from "../../assets/devLog.png";
import "../styles/Projects.css";
import "../../App.css";

const Projects = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title">Projects</h1>
        <div className="container">
          <div className="card projectCard">
            <div className="card-header d-flex">
              <h2 className="card-title">dev.log</h2>
              <img
                className="cardX flex-end"
                src={require("../../assets/x.png")}
                alt="'x' shaped close button, doesn't actually do anything."
              />
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card projectCard">
            <div className="card-header d-flex">
              {/* <div className=""> */}
                <h2 className="card-title">Hogwarts Enrollment Portal</h2>
                <img
                  className="cardX flex-end"
                  src={require("../../assets/x.png")}
                  alt="'x' shaped close button, doesn't actually do anything."
                />
              {/* </div> */}
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card projectCard">
            <div className="card-header d-flex">
              <h2 className="card-title">prepUrself</h2>
              <img
                className="cardX flex-end"
                src={require("../../assets/x.png")}
                alt="'x' shaped close button, doesn't actually do anything."
              />
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
