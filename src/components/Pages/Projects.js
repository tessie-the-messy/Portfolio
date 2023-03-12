import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "themesberg/windows-95-ui-kit/css/w95.css";
import "../../App.css";
import "../../refw95.css";
import Header from "../header";
import Footer from "../footer";

const Projects = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="flex-grow-1">
        <h1 className="title">Projects</h1>
        <div className="itemsContainer container d-flex justify-content-between flex-grow-1">
          <div className="card col-3">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">dev.log</h3>
            </div>
            <div className="card-body d-flex flex-column">
              <p className="card-text h-100">
                A Social Media for developers, using MERN stack. Current
                features include: making posts with or without a picture, seeing
                other users posts, viewing the daily code wars challenge on the
                feed page, uploading a profile picture, and updating profile
                info.
              </p>
              <div class="align-self-end">
                <Link
                  to={{ pathname: "https://github.com/btempini/dev-log" }}
                  target="_blank"
                >
                  <button class="btn mr-2 border-dark" type="button">
                    <span class="btn-text">Check it out!</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card col-4">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">
                Hogwarts Enrollment Portal
              </h3>
            </div>
            <div className="card-body d-flex flex-column">
              <p className="card-text h-100">
                First attempt at a full-stack web application. Upon making an
                account, users can view profile page with name, email, Student
                ID, and which Hogwarts House they have been randomly sorted
                into. Users can also visit schedule page and view their classes.
              </p>
              <div class="align-self-end">
                <Link
                  to={{
                    pathname:
                      "https://github.com/tessie-the-messy/Hogwarts-Enrollment-Portal",
                  }}
                  target="_blank"
                >
                  <button class="btn mr-2 border-dark" type="button">
                    <span class="btn-text">Check it out!</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card col-3">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">prepUrself</h3>
            </div>
            <div className="card-body d-flex flex-column">
              <p className="card-text h-100">
                First ever attempt at a web application, created in one week. A
                meal-planner where users can look up recipes, and add to weekly
                calendar, as well as assign it to a specific mealtime. Used
                Edamam API for recipe Database.
              </p>
              <div class="align-self-end">
                <Link
                  to={{ pathname: "https://github.com/bencha27/prepUrself" }}
                  target="_blank"
                >
                  <button class="btn mr-2 border-dark" type="button">
                    <span class="btn-text">Check it out!</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-auto"/>
    </div>
  );
};

export default Projects;