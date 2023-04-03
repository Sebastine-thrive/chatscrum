import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/images/scrumlife_logo.png'
import "./header.css";

const Header = () => {
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);

  const controlAccordion1 = () => {
    setAccordion1Open(!accordion1Open);
    setAccordion2Open(false);
  };

  const controlAccordion2 = () => {
    setAccordion2Open(!accordion2Open);
    setAccordion1Open(false);
  };

  return (
    <div className="container">
      <div className="logo"> <img src={logo} alt="scrumlife logo" width="50px" height="50px" /></div>

      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            Why Scrumlife
            {accordion1Open ? (
              <span className="icon" onClick={() => controlAccordion1()}>
                {" "}
                &#9650;{" "}
              </span>
            ) : (
              <span className="icon" onClick={() => controlAccordion1()}>
                {" "}
                &#9660;{" "}
              </span>
            )}
          </div>

          <div className={accordion1Open ? "purpose accordion-content show" : "hide"}>
            Scrumlife was birthed as a project assignment during an
            internship. Since then, I have desired to make it more usable in
            solving the problem of task recording, evaluation and storage. It is still a
            work in progress.
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-title">
            Features
            {accordion2Open ? (
              <span className="icon" onClick={() => controlAccordion2()}>
                {" "}
                &#9650;{" "}
              </span>
            ) : (
              <span className="icon" onClick={() => controlAccordion2()}>
                {" "}
                &#9660;{" "}
              </span>
            )}
          </div>
          <div className={accordion2Open ? " features accordion-content show" : "hide"}>
            Scrumlife currently has the following capabilities:
            <ul>
              <li> User sign up and sign in,</li>
              <li> Utilises the user's browser for local storage,</li>
              <li> User validation</li>
              <li> Weekly and daily task management</li>
              <li> Task reshuffling and deletion</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-sign-in">
        <Link to="/signin">
          <button> SIGN IN </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
