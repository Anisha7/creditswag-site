import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import AboutUs from './components/AboutUs';

class OurStory extends Component {
    render() {
        return (
            <Wrapper>
                <AboutUs />
            </Wrapper>)
    }
}

export default OurStory;