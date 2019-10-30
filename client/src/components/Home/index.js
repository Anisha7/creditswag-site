import React, { Component } from 'react';
import './styles.css'
import HomeWrapper from '../HomeWrapper';
import Banner from './components/Banner'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Banner />
                <div className="mobile-slogan">
                    <h1>Save $$.</h1>
                    <h2>Dumb simple.</h2>
                    <button>JOIN THE WAITLIST</button>
                </div>
            </HomeWrapper>)
    }
}

export default Home;