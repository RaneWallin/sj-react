import React from "react";
import "../styles/page-holder.scss";

const PageHolder = ({ children }) => {
  return <div className="constrained page-holder">{children}</div>;
};

export default PageHolder;
