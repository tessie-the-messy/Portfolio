import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "themesberg/windows-95-ui-kit/css/w95.css";
import Header from "../header";
import "../styles/Home.css";
import "../../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="fName">Tessa</h1>
        <h1 className="lName">Robinson</h1>
      </div>

      <div className="container homeContainer">
        <div className="d-flex justify-content-between">
          <div className="card col-3">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">About Me</h3>
              {/* <img
                  className="cardX flex-end"
                  src={require("../../assets/x.png")}
                  alt="'x' shaped close button, doesn't actually do anything."
                /> */}
            </div>
            <div className="card-body">
              <p className="card-text">Learn more about me!</p>
              <div class="d-flex justify-content-end mt-3">
                <Link to={"/aboutMe"}>
                  <button class="btn btn-sm border-dark" type="button">
                    <span class="btn-text">OK</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card col-3">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">Projects</h3>
              {/* <img
                  className="cardX flex-end"
                  src={require("../../assets/x.png")}
                  alt="'x' shaped close button, doesn't actually do anything."
                  /> */}
            </div>
            <div className="card-body">
              <p className="card-text">
                Check our some projects I've worked on!
              </p>
              <div class="d-flex justify-content-end mt-3">
                <Link to={"/projects"}>
                  <button class="btn btn-sm mr-2 border-dark" type="button">
                    <span class="btn-text">OK</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card col-3">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">Contact</h3>
              {/* <img
                  className="cardX flex-end"
                  src={require("../../assets/x.png")}
                  alt="'x' shaped close button, doesn't actually do anything."
                  /> */}
            </div>
            <div className="card-body">
              <p className="card-text">Connect with me!</p>
              <div class="d-flex justify-content-end mt-3">
                <Link to={"/contact"}>
                  <button class="btn btn-sm mr-2 border-dark" type="button">
                    <span class="btn-text">OK</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
