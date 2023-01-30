import React, { useState } from "react";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

import Logo from "../../../components/Logo"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  function hidesidemenu() {
    setShowMediaIcons(false);
  }
  return (
    <>
    <div/>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          {/* <img
            className="logopic"
            src="https://uploads-ssl.webflow.com/5e53d34464688e6f5960a338/610a36c2792530d601aaf35f_OneHash_Logo.svg"
            alt="location"
          /> */}
          <Logo />
        </div>

        {/* 2nd menu part  */}
        {/* <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/New-dental">Product</NavLink>
            </li>
            <li>
              <NavLink to="/About">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/Pricing">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/FAQ">Contact Us</NavLink>
            </li>
          </ul>
        </div> */}
        <div className="login-home">
          <ul>
            <li>
              <button className="login-home-button">
                {" "}
                <NavLink to="/login">Log In</NavLink>
              </button>
            </li>
            <li>
              <button className="signup-home-button">
                <NavLink style={{ color: "white" }} to="/register">
                  Signup
                </NavLink>
              </button>
            </li>
          </ul>
        </div>

        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <button
            className="icon-button1"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {showMediaIcons && (
        <div className="slider-menu">
          {/* <div className="slider-part2">
            <ul>
              <li>
                <NavLink to="/New-dental">Product</NavLink>
              </li>
              <li>
                <NavLink to="/About">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/Pricing">Testimonials</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/FAQ">Contact Us</NavLink>
              </li>
            </ul>
          </div> */}
          <div className="slider-part3">
            <button className="slider-button1">
              {" "}
              <NavLink style={{ color: "blue" }} to="/Login">
                Login
              </NavLink>{" "}
            </button>
            <button className="slider-button2">
              {" "}
              <NavLink style={{ color: "white" }} to="/Login">
                Sign up
              </NavLink>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
