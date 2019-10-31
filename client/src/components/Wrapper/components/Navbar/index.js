import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../../../assets/CreditSwagLogo.png';
import logoText from '../../../../assets/LogoText.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
    render() {
        let bgcolor = "navbg"
        if (this.props.nobgcolor) {
            bgcolor = ""
        }

        return (
        <div className={`navbar ${ bgcolor }`}>
            
            <ul className="main-logo" >
                <li> 
                    <Link to="/"><img src={ logo } className="logo" alt="logo" /></Link></li>
                <li>
                    <Link to="/"><img src={ logoText } className="logoText" alt="Credit Swag" /></Link>
                </li>   
            </ul>
            
            
            <ul className="options">
                <li><Link to="/ourstory">Our story</Link></li>
                <li className="waitlistButton"><a href="#item4">Join the waitlist</a></li>
                <li><a onClick={ () => this.props.openMobileMenu() }><FontAwesomeIcon className="barIcon" icon={ faBars } size="1x" /></a></li>
            </ul>
        </div>)
    }
}

export default Navbar;