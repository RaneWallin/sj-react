import React, { Component } from "react";
import Navigation from "../components/navigation";
import PageHolder from "../components/page-holder";
import Header from "../components/header";

//images
import headerImg from "../img/services/services-jumbotron.png";
import Footer from "../components/footer";

class Services extends Component {
  render() {
    return (
      <div>
        <PageHolder>
          <Navigation />
          <Header headerImage={headerImg} />
          <Footer />
        </PageHolder>
      </div>
    );
  }
}

export default Services;
