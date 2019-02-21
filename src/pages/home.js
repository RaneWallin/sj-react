import React, { Component } from "react";

// Styles
import "../styles/home.scss";

// Components
import PageHolder from "../components/page-holder";
import Navigation from "../components/navigation";
import Header from "../components/header";
import CardHolder from "../components/card-holder";
import Card from "../components/card";

// image imports
import jumbo from "../img/home/home-jumbotron.png";
import homeImage1 from "../img/home/home-img-1.png";

class Home extends Component {
  render() {
    return (
      <div>

        <PageHolder>
          <Navigation />
          <Header
            headerImage={jumbo}
            headline="Integrity,<br /> Excellence,<br /> Progress."
          />
          <CardHolder>
            <Card
              className="home-card"
              flexDirection="row-reverse"
              cardImageUrl={homeImage1}
              imageDescription="A thing"
            >
              <div className="intro-text">
                <h2>Smith & Jones Architects</h2>
                <p>
                  Et sed autem causae appareat, tempor abhorreant te mei, facer
                  facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                  etiam laboramus dissentiet in, nec no errem
                </p>
                <button id="learn-more">Learn More</button>
              </div>
            </Card>
          </CardHolder>
        </PageHolder>
      </div>
    );
  }
}

export default Home;
