import React from "react";
import Header from "../header";
import Footer from "../footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <h2 id="contact">Contact</h2>
        <section>
          <ul className="info">
            <li className="abc">
              <a href="#">555.555.5555</a>
            </li>
            <li className="abc">
              <a href="#">E-mail</a>
            </li>
            <li className="abc">
              <a href="https://github.com/tessie-the-messy">GitHub</a>
            </li>
            <li className="abc">
              <a href="www.linkedin.com/in/tessa-elise-robinson">LinkedIn</a>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
