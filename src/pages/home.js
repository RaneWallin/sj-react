import React, { Component } from "react";

// Styles
import "../styles/home.scss";

// Components
import PageHolder from "../components/page-holder";
import Navigation from "../components/navigation";
import Header from "../components/header";
import CardHolder from "../components/card-holder";
import IntroCard from "../components/intro-card";
import ProjectCard from "../components/project-card";

// image imports
import jumbo from "../img/home/home-jumbotron.png";
import homeImage1 from "../img/home/home-img-1.png";
import homeImage2 from "../img/home/home-img-2.png";
import villasImage from "../img/home/home-villas-img.png";
import outskirtsImage from "../img/home/home-outskirts-img.png";
import blocksImage from "../img/home/home-the-blocks-img.png";

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
          <h2>Recent Projects</h2>
          <CardHolder>
            <ProjectCard
              imageUrl={villasImage}
              imageDescription="Villa image"
              headline="THE VILLAS"
              cardDirection="flex-end"
            >
              <p>
                The Villas bring to the table win-win survival strategies to
                ensure proactive domination. At the end of the day, going
                forward, a new normal that has evolved from generation X is on
                the runway heading towards a streamlined cloud solution.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </ProjectCard>
            <ProjectCard
              imageUrl={outskirtsImage}
              imageDescription="outskirts image"
              headline={"OUTSKIRTS"}
              cardDirection="flex-start"
            >
              <p>
                The Outskirts are amazing to the table win-win survival
                strategies to ensure proactive domination. At the end of the
                day, going forward, a new normal that has evolved from
                generation X is on the runway heading towards a streamlined
                cloud solution.
              </p>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </ProjectCard>
            <ProjectCard
              imageUrl={blocksImage}
              imageDescription="blocks image"
              headline={"THE BLOCKS"}
              cardDirection={"flex-end"}
            >
              <p>
                The Blocks are amazing to the table win-win survival strategies
                to ensure proactive domination. At the end of the day, going
                forward, a new normal that has evolved from generation X is on
                the runway heading towards a streamlined cloud solution.
              </p>

              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </p>
            </ProjectCard>
          </CardHolder>
        </PageHolder>
      </div>
    );
  }
}

export default Home;
