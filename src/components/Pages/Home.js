import React from "react";
import Header from "../header";
import "../styles/Home.css"

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Tessa</h1>
        <h1>Robinson</h1>
      </div>
      <div className="cardContainer">
        <button className="card">
          <div className="top">
            <h3>About Me</h3>
          </div>
        </button>
        <button>
          <div className="top">
            <h3>Projects</h3>
          </div>
        </button>
        <button>
          <div className="top">
            <h3>Contact</h3>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;