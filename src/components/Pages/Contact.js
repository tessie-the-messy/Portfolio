import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header";
// import Footer from "../footer";
import "../../App.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title">Contact</h1>
        <div className="container d-flex itemsContainer">
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
          <form className="card col-8">
            <div className="card-header">
              <h3 className="card-title mb-4 mb-lg-1 fs-4">
                Or, Reach out here!
              </h3>
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <div class="form-group d-flex align-items-center justify-content-between">
                <label htmlFor="firstname" class="card-text mr-3">
                  First Name:
                </label>
                <input id="firstname" type="text" class="form-control w-75" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <label htmlFor="lastname" class="card-text mr-3">
                  Last Name:
                </label>
                <input id="lastname" type="text" class="form-control w-75" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <label htmlFor="email" class="card-text mr-3">
                  E-mail:
                </label>
                <input id="email" type="text" class="form-control w-75" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <label htmlFor="company" class="card-text mr-3">
                  Company (optional):
                </label>
                <input id="company" type="text" class="form-control w-75" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <label htmlFor="company" class="card-text mr-3">
                  Reason for reaching out:
                </label>
                <select
                  class="form-control w-75"
                  aria-label="Default select example"
                >
                  <option selected>Choose a reason:</option>
                  <option value="employment">Employment opportunity</option>
                  <option value="contract">Contract/Freelance inquiry</option>
                  <option value="collab">Interest in Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group d-flex justify-content-between">
                <label htmlFor="message" class="card-text mr-3">
                  Message:
                </label>
                <textarea
                  class="form-control w-75"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <div className="align-self-end mt-1">
                <button class="btn btn-sm mr-2 border-dark">
                  <span class="btn-text">Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
