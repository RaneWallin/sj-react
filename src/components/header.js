import React, { Component } from "react";
import "../styles/header.scss";

class Header extends Component {
  render() {
    //let headerImage = require(this.props.headerImage);
    return (
      <div className="constrainted jumbo-container">
        <img
          alt="Skyscraper viewed from the ground."
          src={`${this.props.headerImage}`}
        />
        <h1 dangerouslySetInnerHTML={{ __html: this.props.headline }} />
      </div>
    );
  }
}

export default Header;
