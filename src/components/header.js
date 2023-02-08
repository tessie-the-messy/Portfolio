import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (

    <header className="container-fluid">
      <img
        className="headerX"
        src={require("../assets/x.png")}
        alt="'x' shaped close button image, doesn't actually do anything."
        />
      <div className="fakeUrl">
        <div name="fakeUrlText">
          www.WelcomeToMyPortfolio.com/choose-a-page
        </div>
      </div>
    </header>
       
  );
};

export default Header;
