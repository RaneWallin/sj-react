import React from "react";
import Card from "./card";

const IntroCard = ({ children, imageUrl, imageDescription, flexDirection }) => {
  return (
    <Card
      cardStyles={cardStyles(flexDirection)}
      cardImageUrl={imageUrl}
      imageDescription="A thing"
    >
      {children}
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

export default IntroCard;
