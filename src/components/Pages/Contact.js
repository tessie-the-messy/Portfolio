import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header";
import Footer from "../footer";
import "../styles/Contact.css";
import "../../App.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title">Contact</h1>
        <div className="container">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <div className="d-flex">
                  <h2 className="card-title">LinkedIn</h2>
                  <img
                    className="cardX flex-end"
                    src={require("../../assets/x.png")}
                    alt="'x' shaped close button, doesn't actually do anything."
                  />
                </div>
              </div>
              <div className="card-body"></div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex">
                  <h2 className="card-title">Github</h2>
                  <img
                    className="cardX flex-end"
                    src={require("../../assets/x.png")}
                    alt="'x' shaped close button, doesn't actually do anything."
                  />
                </div>
              </div>
              <div className="card-body"></div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="d-flex">
                  <h2 className="card-title">E-mail</h2>
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
          <div className="card">
            <div className="card-header">
              <div className="d-flex">
                <h2 className="card-title">Or, Reach out here!</h2>
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
      <Footer />
    </div>
  );
};

export default Contact;
