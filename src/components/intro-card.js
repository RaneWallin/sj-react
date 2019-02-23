import React from "react";
import Card from "./card";

const IntroCard = ({ children, imageUrl, imageDescription, flexDirection }) => {
  return (
    <Card
      cardStyles={cardStyles(flexDirection)}
      cardImageUrl={imageUrl}
      imageDescription="A thing"
    >
      <div style={contentStyles}>{children}</div>
    </Card>
  );
};

// styles
const cardStyles = flexDirection => {
  return {
    display: "flex",
    flexDirection: `${flexDirection}`
  };
};

const contentStyles = {
  fontSize: "1.3vw"
};

export default IntroCard;
