import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import Banner from './components/Banner'
import InfoBlurb from './components/InfoBlurb';
import Features from './components/Features';
import Contact from './components/Contact';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollToWaitlist : false,
        }
    }

    updateScrollToWaitlist() {
        this.setState({ scrollToWaitlist: !this.state.scrollToWaitlist })
    }

    render() {
        return (
            <Wrapper>
                <Banner updateScrollToWaitlist={ () => this.updateScrollToWaitlist() } />
                <div className="mobile-slogan">
                    <div className="mobile-slogan-heading">
                        <h1>Save $$.</h1>
                        <h2>Dumb simple.</h2>
                    </div>
                    <button onClick={ () => this.updateScrollToWaitlist() }>JOIN THE WAITLIST</button>
                </div>
                <InfoBlurb />
                <Features />
                <Contact scroll={ this.state.scrollToWaitlist } updateScrollToWaitlist={ () => this.updateScrollToWaitlist() } />
            </Wrapper>)
    }
}

export default Home;