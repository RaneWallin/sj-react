import React, { Component } from "react";
import "../styles/card-holder.scss";

class CardHolder extends Component {
  render() {
    return <div className="card-holder">{this.props.children}</div>;
  }
}

export default CardHolder;
