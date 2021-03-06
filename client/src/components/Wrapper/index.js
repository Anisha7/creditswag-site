import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class Wrapper extends Component {
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
            return <MobileMenu updateScrollToWaitlist={ this.props.updateScrollToWaitlist }
                               closeMobileMenu={() => { 
                                    this.setState({ mobileMenuIsOpen : false })
                                    console.log(this.state.openMobileMenu)
             }} />
        }
        return (<div>
            <Navbar openMobileMenu={() => this.setState({ mobileMenuIsOpen : true })} updateScrollToWaitlist={ this.props.updateScrollToWaitlist } /> 
            { this.props.children }
            <Footer openMobileMenu={() => this.setState({ mobileMenuIsOpen : true })} updateScrollToWaitlist={ this.props.updateScrollToWaitlist } /> 
        </div>)
    }
}

export default Wrapper;