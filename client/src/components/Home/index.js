import React, { Component } from 'react';
import './styles.css'
import HomeWrapper from '../HomeWrapper';
import Banner from './components/Banner'
import InfoBlurb from './components/InfoBlurb';
import Features from './components/Features';
import Contact from './components/Contact';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Banner />
                <div className="mobile-slogan">
                    <div className="mobile-slogan-heading">
                        <h1>Save $$.</h1>
                        <h2>Dumb simple.</h2>
                    </div>
                    <button>JOIN THE WAITLIST</button>
                </div>
                <InfoBlurb />
                <Features />
                <Contact />
            </HomeWrapper>)
    }
}

export default Home;