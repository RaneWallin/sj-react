import React, { Component } from "react";
import Navigation from "../components/navigation";
import PageHolder from "../components/page-holder";
import Header from "../components/header";
import Tab from "../components/tab";

// styles
import "../styles/services.scss";

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
          <div className="service-intro">
            <p>
              Services include: completely synergize resource taxing
              relationships via premier niche markets. Professionally cultivate
              one-to-one customer service with robust ideas. Dynamically
              innovate resource-leveling customer service for state of the art
              customer service.
            </p>
          </div>
          <div className={"tabs"}>
            <Tab tabStles={{ flexBasis: "22%" }} tabName={"Pre-Construction"} />
            <Tab tabStles={{ flexBasis: "22%" }} tabName={"Construction"} />
            <Tab tabStles={{ flexBasis: "22%" }} tabName={"Sustainability"} />
            <Tab tabStles={{ flexBasis: "22%" }} tabName={"Design Build"} />
          </div>
          <Footer />
        </PageHolder>
      </div>
    );
  }
}

export default Services;
