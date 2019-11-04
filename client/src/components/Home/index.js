import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import Banner from './components/Banner'
import InfoBlurb from './components/InfoBlurb';
import Features from './components/Features';
import WaitlistForm from '../WaitlistForm';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollToWaitlist : false,
        }
    }

    updateScrollToWaitlist() {
        this.setState({ scrollToWaitlist: true })
    }

    render() {
        return (
            <Wrapper updateScrollToWaitlist={ () => this.updateScrollToWaitlist() } >
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
                <WaitlistForm scroll={ this.state.scrollToWaitlist } updateScrollToWaitlist={ () => this.updateScrollToWaitlist() } />
            </Wrapper>)
    }
}

export default Home;