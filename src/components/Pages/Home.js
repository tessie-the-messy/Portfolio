import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../header";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="fName">Tessa</h1>
        <h1 className="lName">Robinson</h1>
      </div>
      
      <div className="container">
        <div className= "d-flex justify-content-between">

        <div className="card homeCard">
          <div className="card-header">
            <h3 className ="card-title">About Me</h3>
          </div>
          <div className="card-body"></div>
        </div>
        <div className= "card homeCard">
          <div className="card-header">
            <h3 className ="card-title">Projects</h3>
          </div>
          <div className="card-body"></div>
        </div>
        <div className= "card homeCard">
          <div className="card-header">
            <h3 className ="card-title">Contact</h3>
          </div>
          <div className="card-body"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
