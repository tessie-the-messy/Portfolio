import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../header";
import Footer from "../footer";
import "../styles/Contact.css";
import "../../App.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <h2>Contact</h2>
        <section>
          <ul className="contact">
            <li className="contactLi">
              Phone Number: <a href="#">555.555.5555</a>
            </li>
            <li className="contactLi">
              E-mail:<a href="#">tessa.elise.robinson@gmail.com</a>
            </li>
            <li className="contactLi">
              Github: <a href="https://github.com/tessie-the-messy">github.com/tessie-the-messy</a>
            </li>
            <li className="contactLi">
              LinkedIn: <a href="www.linkedin.com/in/tessa-elise-robinson">linkedin.com/in/tessa-elise-robinson</a>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
