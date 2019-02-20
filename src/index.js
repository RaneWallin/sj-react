import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Home from './components/home';
import Users from './components/users';
import Contact from './components/contact';
import Notfound from "./components/notfound";

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/contact" component={Contact}/>
                <Route component={ Notfound }/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
