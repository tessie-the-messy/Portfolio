import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "themesberg/windows-95-ui-kit/css/w95.css";
import Header from "../header";
// import Footer from "../footer";
import "../../App.css";

const Projects = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title">Projects</h1>
        <div className="itemsContainer container d-flex flex-column justify-content-sm-around">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">dev.log</h3>
            </div>
            <div className="card-body">
              <div className="card-text"></div>
              <div class="d-flex justify-content-end mt-3">
                <button class="btn mr-2 border-dark"
                    type="button"><span class="btn-text">Check it out!</span></button>
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">Hogwarts Enrollment Portal</h3>
            </div>
            <div className="card-body">
            <div className="card-text"></div>
            <div class="d-flex justify-content-end mt-3">
                <button class="btn mr-2 border-dark"
                    type="button"><span class="btn-text">Check it out!</span></button>
            </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">prepUrself</h3>
            </div>
            <div className="card-body">
            <div className="card-text"></div>
            <div class="d-flex justify-content-end mt-3">
                <button class="btn mr-2 border-dark"
                    type="button"><span class="btn-text">Check it out!</span></button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
