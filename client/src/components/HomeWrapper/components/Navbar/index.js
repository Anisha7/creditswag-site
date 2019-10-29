import React, { Component } from 'react';
import './styles.css';
import logo from '../../../../assets/CreditSwagLogo.png';
import logoText from '../../../../assets/LogoText.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
    render() {
        return (
        <div className="navbar">
            <ul>
                <li> <img src={ logo } className="logo" alt="logo" /> </li>
                <li>
                    <img src={ logoText } className="logoText" alt="Credit Swag" />
                    {/* <h1 className="title">Credit Swag</h1> */}
                </li>   
            </ul>
            
            <ul className="options">
                {/* TODO: replace to use redirect when routes are implemented */}
                <li><a href="#item2">About us</a></li>
                <li><a href="#item3">Our story</a></li>
                <li className="waitlistButton"><a href="#item4">Join the waitlist</a></li>
                {/* TODO: hamburger functionality */}
                <li><a href="#"><FontAwesomeIcon className="barIcon" icon={ faBars } size="1x" /></a></li>
            </ul>
        </div>)
    }
}

export default Navbar;