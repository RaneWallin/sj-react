import React, { Component } from "react";
import "../styles/card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card" style={this.props.customStyles}>
        <img
          className="card-image"
          alt={this.props.imageDescription}
          src={`${this.props.cardImageUrl}`}
        />
        <div className="card-content">{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
