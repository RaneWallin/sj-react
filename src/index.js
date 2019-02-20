import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Notfound from "./pages/notfound";
import Services from "./pages/services";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
