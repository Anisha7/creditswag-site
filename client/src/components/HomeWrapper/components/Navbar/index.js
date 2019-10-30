import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './styles.css';
import logo from '../../../../assets/CreditSwagLogo.png';
import logoText from '../../../../assets/LogoText.png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileMenu from '../MobileMenu';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutUs: false,
            ourStory : false,
        }
    }

    render() {
        if (this.state.aboutUs) {
            return <Redirect to="/aboutus" />
        }

        if (this.state.ourStory) {
            return <Redirect to="/ourstory" />
        }

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
                <li><a onClick={ () => this.setState({ aboutUs : true })}>About us</a></li>
                <li><a onClick={ () => this.setState({ ourStory : true })}>Our story</a></li>
                <li className="waitlistButton"><a href="#item4">Join the waitlist</a></li>
                {/* TODO: hamburger functionality */}
                <li><a onClick={ () => this.props.openMobileMenu() }><FontAwesomeIcon className="barIcon" icon={ faBars } size="1x" /></a></li>
            </ul>
        </div>)
    }
}

export default withRouter(Navbar);