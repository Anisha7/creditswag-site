import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

class OurStory extends Component {
    render() {
        return (
            <Wrapper>
                <AboutUs />
                <ContactUs />
            </Wrapper>)
    }
}

export default OurStory;