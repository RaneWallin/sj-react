import React from "react";

const Card = ({
  children,
  imageStyles,
  imageDescription,
  cardImageUrl,
  cardStyles,
  headline,
  headlineStyles,
  contentStyles
}) => {
  return (
    <div className="card" style={cardStyles}>
      <h2 style={headlineStyles}> {headline} </h2>
      <img
        className="card-image"
        style={imageStyles}
        alt={imageDescription}
        src={`${cardImageUrl}`}
      />
      <div style={contentStyles} className="card-content">
        {children}
      </div>
    </div>
  );
};

export default Card;
