import React, { Component } from "react";

import "../styles/tab.scss";

class Tab extends Component {
  state = { tabActive: false };

  toggleContent = tabContent => {
    if (this.state.tabActive) {
      tabContent.style.display = "none";
    } else {
      tabContent.style.display = "inline-block";
    }
  };

  render() {
    return (
      <div>
        <div
          onBlur={_ => {
            this.toggleContent(this.props.tabContent);
          }}
          onFocus={_ => {
            this.toggleContent(this.props.tabContent);
          }}
          className={"tab"}
          style={this.props.tabStyles}
        >
          {this.props.tabName}
        </div>
      </div>
    );
  }
}

export default Tab;
