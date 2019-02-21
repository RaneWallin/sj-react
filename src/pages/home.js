import React, { Component } from "react";

// Styles
import "../styles/home.scss";

// Components
import PageHolder from "../components/page-holder";
import Navigation from "../components/navigation";
import Header from "../components/header";
import CardHolder from "../components/card-holder";
import IntroCard from "../components/intro-card";
import Project from "../components/project";

// image imports
import jumbo from "../img/home/home-jumbotron.png";
import homeImage1 from "../img/home/home-img-1.png";
import homeImage2 from "../img/home/home-img-2.png";

class Home extends Component {
  render() {
    const cardMargin = "50px 0";
    return (
      <div>
        <PageHolder>
          <Navigation />
          <Header
            headerImage={jumbo}
            headline="Integrity,<br /> Excellence,<br /> Progress."
          />
          <CardHolder>
            <IntroCard
              flexDirection="row-reverse"
              imageUrl={homeImage1}
              imageDescription="A thing"
            >
              <div className="intro-text left-text">
                <h2>Smith & Jones Architects</h2>
                <p>
                  Et sed autem causae appareat, tempor abhorreant te mei, facer
                  facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                  etiam laboramus dissentiet in, nec no errem
                </p>
                <button id="learn-more">Learn More</button>
              </div>
            </IntroCard>

            <IntroCard
              flexDirection="row"
              imageUrl={homeImage2}
              imageDescription="Another thing"
            >
              <div className="intro-text right-text">
                <h2>Futuristic Designs</h2>
                <p>
                  Et sed autem causae appareat, tempor abhorreant te mei, facer
                  facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                  etiam laboramus dissentiet in, nec no errem
                </p>
                <button id="view-designs">View Designs</button>
              </div>
            </IntroCard>
          </CardHolder>
          <CardHolder>
            <Project />
          </CardHolder>
        </PageHolder>
      </div>
    );
  }
}

export default Home;
