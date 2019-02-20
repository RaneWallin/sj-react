import React, { Component } from 'react';
import Navigation from './navigation';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>Home page</h1>
            </div>
        );
    }
}

export default Home;