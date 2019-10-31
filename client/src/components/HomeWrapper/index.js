import React, { Component } from 'react';

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';

class HomeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0,
            mobileMenuIsOpen: false,
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
        if ( this.state.width < 950 && this.state.mobileMenuIsOpen) {
            return <MobileMenu closeMobileMenu={() => { 
                this.setState({ mobileMenuIsOpen : false })
                console.log(this.state.openMobileMenu)
             }} />
        }
        return (<div>
            <Navbar openMobileMenu={() => this.setState({ mobileMenuIsOpen : true })} /> 
            { this.props.children }
            <Navbar openMobileMenu={() => this.setState({ mobileMenuIsOpen : true })} /> 
        </div>)
    }
}

export default HomeWrapper;