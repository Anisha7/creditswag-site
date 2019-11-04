import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import WaitlistForm from '../WaitlistForm';

class OurStory extends Component {
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
                <AboutUs />
                <ContactUs />
                <WaitlistForm scroll={ this.state.scrollToWaitlist } updateScrollToWaitlist={ () => this.updateScrollToWaitlist() } />
            </Wrapper>)
    }
}

export default OurStory;