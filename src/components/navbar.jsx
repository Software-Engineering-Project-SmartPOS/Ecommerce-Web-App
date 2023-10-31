import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar(props) {
  const loginStatus =
    localStorage.getItem("userLogged") !== null ? true : false;
  const [userLogged, setUserLogged] = useState(loginStatus);
  const [menuIconClicked, setMenuIconClicked] = useState(false);
  const [searchIconClicked, setSearchIconClicked] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function searchCloseHandler() {
    setSearchIconClicked(false);
  }
  function searchOpenHandler() {
    setSearchIconClicked(true);
  }
  function menuCloseHandler() {
    setMenuIconClicked(false);
  }
  function menuOpenHandler() {
    setMenuIconClicked(true);
  }
  return (
    <div className="navbar-container">
      <div className="home">
        <NavLink to="/" className="navbar-list-item-link">
          <i className="fas fa-home" style={props.style}></i>
        </NavLink>
      </div>

      <ul
        className={
          screenWidth < 990
            ? menuIconClicked
              ? "navbar-list-open"
              : "navbar-hidden"
            : "navbar-list"
        }
      >
        <li className="products  navbar-list-item">
          <Link
            to="about-us-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-about-section-link"
          >
            About
          </Link>
        </li>
        <li className="products  navbar-list-item">
          <NavLink to="/Products" style={props.style}>
            Products
          </NavLink>
        </li>
        <li className="discount  navbar-list-item">
          <NavLink to="/Discount" style={props.style}>
            Discount
          </NavLink>
        </li>
        <li className="products  navbar-list-item">
          <NavLink to="" style={props.style}>
            catageory
          </NavLink>
        </li>

        {userLogged ? (
          <li className="purchase-OrderList">
            <NavLink to="/PurchaseOrder" style={props.style}>
              <span className="inline-text">Purchase Order</span>
            </NavLink>
          </li>
        ) : null}
        <li className="products  navbar-list-item">
          <NavLink to="" style={props.style}>
            Contact us
          </NavLink>
        </li>
      </ul>

      <div className="user-container-navbar">
        {menuIconClicked ? (
          <button className="menu-button" onClick={menuCloseHandler}>
            <i className="fas fa-times-circle"></i>
          </button>
        ) : (
          <button className="menu-button" onClick={menuOpenHandler}>
            <i className="fas fa-bars"></i>
          </button>
        )}
      </div>
    </div>
  );
}
export default Navbar;
