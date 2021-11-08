import React from "react";
import logo from "../../image/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto" href="/">
                Introduction
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/">
                solution
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                login
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Apply for free use
              </a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
