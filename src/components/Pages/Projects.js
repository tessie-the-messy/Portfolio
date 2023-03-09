import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "themesberg/windows-95-ui-kit/css/w95.css";
import Header from "../header";
// import Footer from "../footer";
import "../../App.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title">Projects</h1>
        <div className="itemsContainer container d-flex flex-column justify-content-sm-around">
          <div className="card mb-3">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">dev.log</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                A Social Media for developers, using MERN stack.
                Current features include: making posts with or without a picture, seeing other users posts, viewing the daily code wars challenge on the feed page, uploading a profile picture, and updating profile info. 
              </p>
              <div class="d-flex justify-content-end mt-3">
              <Link to={{ pathname: "https://dev-log.herokuapp.com/" }} target="_blank">
                <button  class="btn mr-2 border-dark" type="button">
                  <span class="btn-text">Check it out!</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">
                Hogwarts Enrollment Portal
              </h3>
            </div>
            <div className="card-body">
              <p className="card-text">First attempt at a full-stack web application. Upon making an account, users can view profile page with name, email, Student ID, and which Hogwarts House they have been randomly sorted into. Users can also visit schedule page and view their classes.</p>
              <div class="d-flex justify-content-end mt-3">
              <Link to={{ pathname: "https://dev-log.herokuapp.com/" }} target="_blank">
                <button class="btn mr-2 border-dark" type="button">
                  <span class="btn-text">Check it out!</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">prepUrself</h3>
            </div>
            <div className="card-body">
              <p className="card-text">First ever web application, created in one week. A meal-planner where users can look up recipes, and add to weekly calendar during specific mealtimes. Used Edamam API for recipe Database.
</p>
              <div class="d-flex justify-content-end mt-3">
                <button class="btn mr-2 border-dark" type="button">
                  <span class="btn-text">Check it out!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
