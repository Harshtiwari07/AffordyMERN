import React from "react";
import "../Stylesheet/Footer.css";
import '../App.css'
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#"><i class="fa fa-youtube"></i></a>
        </div>
        {/* <div><NavLink className="navbar-brand" to="/" style={{paddingLeft:"45%"}}>
            <img src={logo} alt="Logo" />
          </NavLink></div> */}

        <div class="footer-left">
          <p class="footer-links">
          <NavLink className="nav-link" to="/">Home</NavLink>

          <NavLink className="nav-link" to="/about">About Us</NavLink>

          <NavLink className="nav-link" to="/login">Login</NavLink>

          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
          </p>

          <p className="copyright">Affordy &copy; 2021</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
