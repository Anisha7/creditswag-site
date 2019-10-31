import React, { Component } from 'react';
import './styles.css';
import Navbar from '../Navbar';

class Footer extends Component {

    render() {

        return (
        <div className="footer">
            <Navbar nobgcolor={ true } openMobileMenu={ this.props.openMobileMenu } />
            {/* TODO: add copyright text */}
        </div>)
    }
}

export default Footer;