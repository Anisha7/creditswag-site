import React, { Component } from 'react';
import './styles.css';
import Navbar from '../Navbar';

class Footer extends Component {

    render() {

        return (
        <div className="footer">
            <Navbar nobgcolor={ true } openMobileMenu={ this.props.openMobileMenu } />
            <p>@Copyright CreditSwag, Inc. All rights reserved.</p>
        </div>)
    }
}

export default Footer;