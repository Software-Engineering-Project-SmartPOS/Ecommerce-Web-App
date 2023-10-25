// Footer.js
import "./footer.css";
import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="E-commerce Logo" />
            <h2>E-commerce Store</h2>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 E-commerce Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
