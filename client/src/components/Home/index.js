import React, { Component } from 'react';
import '../../commonStyles.css'
import HomeWrapper from '../HomeWrapper';
import Banner from './components/Banner'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Banner />
                <div> hello world</div>
            </HomeWrapper>)
    }
}

export default Home;