import React from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h2 id="contact">Contact</h2>
            <section>
                <ul>
                    <li><a>E-mail</a></li>
                    <li><a href="https://github.com/tessie-the-messy">GitHub</a></li>
                    <li><a href="www.linkedin.com/in/tessa-elise-robinson">LinkedIn</a></li>
                </ul>
            </section>
      <Footer />
    </div>
  );
};

export default Contact;
