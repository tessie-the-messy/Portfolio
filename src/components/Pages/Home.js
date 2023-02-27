import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header";
import "../styles/Home.css";
import "../../App.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="fName">Tessa</h1>
        <h1 className="lName">Robinson</h1>
      </div>

      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="card homeCard">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <h2 className="card-title">About Me</h2>
                <img
                  className="cardX flex-end"
                  src={require("../../assets/x.png")}
                  alt="'x' shaped close button, doesn't actually do anything."
                />
              </div>
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card homeCard">
            <div className="card-header">
            <div className="d-flex justify-content-between">

              <h2 className="card-title">Projects</h2>
              <img
                  className="cardX flex-end"
                  src={require("../../assets/x.png")}
                  alt="'x' shaped close button, doesn't actually do anything."
                  />
                  </div>
            </div>
            <div className="card-body"></div>
          </div>
          <div className="card homeCard">
            <div className="card-header">
            <div className="d-flex justify-content-between">

              <h2 className="card-title">Contact</h2>
              <img
                  className="cardX flex-end"
                  src={require("../../assets/x.png")}
                  alt="'x' shaped close button, doesn't actually do anything."
                  />
                  </div>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
