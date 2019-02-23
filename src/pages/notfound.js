import React from "react";

import PageHolder from "../components/page-holder";
import Navigation from "../components/navigation";

const Notfound = () => {
  return (
    <div>
      <PageHolder>
        <Navigation />
        <h1>Not found</h1>
      </PageHolder>
    </div>
  );
};

export default Notfound;
