import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';
import logo from '../../../../assets/CreditSwagLogo.png';
import logoText from '../../../../assets/LogoText.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ourStory : false,
            home: false,
        }
    }

    render() {
        if (this.state.ourStory) {
            return <Redirect to="/ourstory" />
        }

        if (this.state.home) {
            return <Redirect to="/" />
        }

        return (
        <div className="navbar">
            <ul onClick={ () => this.setState({ home : true }) } className="main-logo" >
                <li> <img src={ logo } className="logo" alt="logo" /> </li>
                <li>
                    <img src={ logoText } className="logoText" alt="Credit Swag" />
                </li>   
            </ul>
            
            <ul className="options">
                <li><a onClick={ () => this.setState({ ourStory : true })}>Our story</a></li>
                <li className="waitlistButton"><a href="#item4">Join the waitlist</a></li>
                <li><a onClick={ () => this.props.openMobileMenu() }><FontAwesomeIcon className="barIcon" icon={ faBars } size="1x" /></a></li>
            </ul>
        </div>)
    }
}

export default Navbar;