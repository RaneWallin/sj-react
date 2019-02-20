import React, { Component } from "react";
import Navigation from "../components/navigation";
import Header from "../components/header";
import Card from "../components/card";

// image imports
import jumbo from "../img/home/home-jumbotron.png";

class Home extends Component {
  render() {
    return (
      <div className="constrained">
        <Navigation />
        <Header
          headerImage={jumbo}
          headline="Integrity,<br /> Excellence,<br /> Progress."
        />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Home;
