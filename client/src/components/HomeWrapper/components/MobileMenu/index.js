// Menu component takes in a back route and displays menu options when menu button is clicked in the navbar on mobile screens
// mobile only

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';
import logo from '../../../../assets/CreditSwagLogo.png';
import logoText from '../../../../assets/LogoText.png';

class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0,
         };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        if ( this.state.width > 950 ) {
            return <Redirect to={this.props.path} />
        }

        return (
        <div className="mobileMenu">
            {/* TODO: Add a close button to redirect to current page */}
            <p onClick={ ()=>this.props.closeMobileMenu()}>closeee</p>
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
                {/* TODO: hamburger functionality --> redirect to currect page */}
            </ul>
        </div>)
    }
}

export default MobileMenu;