import React from "react";
import Card from "./card";

import "../styles/project.scss";

const ProjectCard = ({
  children,
  cardDirection,
  imageUrl,
  imageDescription,
  headline
}) => {
  return (
    <Card
      cardStyles={cardStyles}
      cardImageUrl={imageUrl}
      imageDescription="A thing"
      //headline={headline}
    >
      <div className="project-content">
        <div style={h2HolderStyles(cardDirection)}>
          <h2 style={h2Styles(cardDirection)}>{headline}</h2>
        </div>
        {children}
      </div>
    </Card>
  );
};

// styles
const cardStyles = {
  display: "flex",
  flexDirection: "column"
};

const h2Styles = alignment => {
  return {
    alignSelf: alignment,
    border: "1px white outset",
    backgroundColor: "#D8D8D8",
    padding: "25px 35px",
    width: "fit-content",
    marginTop: "-30px",
    fontSize: "1.5vw"
  };
};

const h2HolderStyles = alignment => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    //border: "1px solid black",
    justifyContent: alignment,
    letterSpacing: "5px"
  };
};

export default ProjectCard;
