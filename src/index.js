import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Home from './components/home';
import Contact from './components/contact';
import Notfound from "./components/notfound";
import Services from "./components/services";

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
                <Route component={ Notfound }/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
