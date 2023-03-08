import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../header";
// import Footer from "../footer";
import "../styles/Contact.css";
import "../../App.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="title">Contact</h1>
        <div className="container d-flex itemsContainer">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">LinkedIn</h2>
              </div>
              <div className="card-body">
                <button class="btn btn-sm mr-2 border-dark" type="button">
                  <span class="btn-text">Visit</span>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Github</h2>
              </div>
              <div className="card-body">
                <button class="btn btn-sm mr-2 border-dark" type="button">
                  <span class="btn-text">Visit</span>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">E-mail</h2>
              </div>
              <div className="card-body">
                <button class="btn btn-sm mr-2 border-dark" type="button">
                  <span class="btn-text">Visit</span>
                </button>
              </div>
            </div>
          </div>
          <form className="card col-8">
            <div className="card-header">
              <h2 className="card-title">Or, Reach out here!</h2>
            </div>
            <div className="card-body">
              <div class="form-group d-flex align-items-center justify-content-between">
                <label for="firstname" class="mr-3">
                  First Name:
                </label>
                <input id="firstname" type="text" class="form-control w-75" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <label for="lastname" class="mr-3">
                  Last Name:
                </label>
                <input id="lastname" type="text" class="form-control w-75" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <label for="email" class="mr-3">
                  E-mail:
                </label>
                <input id="email" type="text" class="form-control w-75" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <label for="company" class="mr-3">
                  Company (optional):
                </label>
                <input id="company" type="text" class="form-control w-75" />
              </div>
              <div class="form-group d-flex align-items-center justify-content-between">
                <label for="company" class="mr-3">
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
              <div class="form-group d-flex align-items-center justify-content-between">
                <label for="message" class="mr-3">
                  Message:
                </label>
                <textarea
                  class="form-control w-75"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <button class="btn btn-sm mr-2 border-dark" type="submit">
                <span class="btn-text">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
