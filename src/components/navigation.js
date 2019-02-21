import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.scss";

class Navigation extends Component {
  state = {
    navOpen: false
  };

  getNavImage = () => {
    let imgUrl;

    if (this.state.navOpen) imgUrl = require("../img/nav-hamburger-close.png");
    else imgUrl = require("../img/nav-hamburger.png");

    return <img src={imgUrl} />;
  };

  toggleNavigation = () => {
    let navState = !this.state.navOpen;
    this.setState({ navOpen: navState });
  };

  toggleLinks = () => {
    let navMenu = <div />;
    if (this.state.navOpen) {
      navMenu = (
        <div className="nav-links show-nav">
          <NavLink to="/" className="links" activeClassName="active-links">
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="links"
            activeClassName="activeLinks"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="links"
            activeClassName="active-links"
          >
            Contact
          </NavLink>
        </div>
      );
    }

    return navMenu;
  };

  render() {
    return (
      <div className="nav-container">
        <div className="nav-link-holder">
          <div className="top-menu">
            <div className="nav-logo">S&J</div>
            <div onClick={this.toggleNavigation} className="hamburger">
              {this.getNavImage()}
            </div>
          </div>
          {this.toggleLinks()}
        </div>
      </div>
    );
  }
}

export default Navigation;
