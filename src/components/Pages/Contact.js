import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header";
import ReachOut from "../reachout";
import Footer from "../footer";
import "../../App.css";
import { Link } from "react-router-dom";

const Contact = () => {

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="flex-grow-1">
        <h1 className="title">Contact</h1>
        <div className="container d-flex itemsContainer  flex-grow-1">
          <div className="container d-flex flex-column">
            <div className="card mb-2">
              <div className="card-header">
                <h3 className="card-title mb-4 mb-lg-1 fs-4">LinkedIn</h3>
              </div>
              <div className="card-body">
                <p className="card-text">"Tessa Robinson" on LinkedIn</p>
                <div className="d-flex justify-content-end">
                  <Link
                    to={{
                      pathname:
                        "https://www.linkedin.com/in/tessa-elise-robinson/",
                    }}
                    target="_blank"
                  >
                    <button class="btn btn-sm mr-2 border-dark" type="button">
                      <span class="btn-text">Visit</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card mb-2">
              <div className="card-header">
                <h3 className="card-title mb-4 mb-lg-1 fs-4">Github</h3>
              </div>
              <div className="card-body">
                <p className="card-text">"tessie-the-messy" on github</p>
                <div className="d-flex justify-content-end">
                  <Link
                    to={{ pathname: "https://github.com/tessie-the-messy" }}
                    target="_blank"
                  >
                    <button class="btn btn-sm mr-2 border-dark" type="button">
                      <span class="btn-text">Visit</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h3 className="card-title mb-4 mb-lg-1 fs-4">E-mail</h3>
              </div>
              <div className="card-body">
                <p className="card-text">tessa.elise.robinson@gmail.com</p>
                {/* <div className="d-flex justify-content-end">
                  <button class="btn btn-sm mr-2 border-dark" type="button">
                    <span class="btn-text">Copy</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <ReachOut />
        </div>
      </div>
      <Footer className="mt-auto"/>
    </div>
  );
};

export default Contact;
