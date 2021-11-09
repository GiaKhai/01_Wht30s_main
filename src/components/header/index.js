import React, { useState } from "react";
import logo from "../../image/logo.png";
import "./header.css";

const Header = () => {
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: "nav-item nav-link",
    aboutLinkClass: "nav-item nav-link",
    menuClass: "",
  });

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu,
    });
  };

  const show = state.menu ? "show" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                solution
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Rate plan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Apply for free use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
