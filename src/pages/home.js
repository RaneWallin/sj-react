import React, { Component } from "react";
import Navigation from "../components/navigation";
import Header from "../components/header";

// image imports
import jumbo from "../img/contact/contact-jumbotron.png";

class Home extends Component {
  render() {
    return (
      <div className="constrained">
        <Navigation />
        <Header
          headerImage={jumbo}
          headline="Integrity,<br /> Excellence, <br /> Progress."
        />
      </div>
    );
  }
}

export default Home;