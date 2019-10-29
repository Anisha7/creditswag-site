import React, { Component } from 'react';
import '../../commonStyles.css'
import HomeWrapper from '../HomeWrapper';
import Banner from './components/Banner'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Banner />
            </HomeWrapper>)
    }
}

export default Home;