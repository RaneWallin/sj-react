import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.scss';

class Navigation extends Component {

    render() {
        return (
            <div className="constrained">
                <div className="hamburger-menu">
                    <div className="nav-logo">S&J</div>
                    <div className="hamburger"></div>
                </div>
                <div className="nav-links">
                    <NavLink to='/' className='links' activeClassName='active-links'>Home</NavLink>
                    <NavLink to='/services' className='links' activeClassName='activeLinks'>Services</NavLink>
                    <NavLink to='/contact' className='links' activeClassName='active-links'>Contact</NavLink>
                </div>
            </div>
        );
    }

}

export default Navigation;