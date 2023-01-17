import React from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Projects = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h2>Projects</h2>
      <a href="https://tessie-the-messy.github.io/Challenge1/">
        <img
          src="https://user-images.githubusercontent.com/115903135/198140970-cb176a91-94c0-4c65-b660-e6ec29b93d80.png"
          alt=""
        />
      </a>
      <section>
        <h3>prepUrself</h3>
        <a href="https://bencha27.github.io/prepUrself/">
          <img
            src="https://images.unsplash.com/photo-1470165344182-24727c18c317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt=""
          />
        </a>
        <h3>Hogwarts Enrollment Portal</h3>
        <a href="http://lit-castle-55469.herokuapp.com/">
          <img
            src="https://images.unsplash.com/photo-1633478062482-790e3b5dd810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </a>
        <img
          src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </section>
      <Footer />
    </div>
  );
};

export default Projects;