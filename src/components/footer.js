import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="d-flex justify-content-end footer">
      <Link to={"/"}>
      <footer>
        <h5 className="footFName mb-0">Tessa</h5>
        <h5 className="footLName">Robinson</h5>
      </footer>
    </Link>
    </div>
  );
};

export default Footer;
