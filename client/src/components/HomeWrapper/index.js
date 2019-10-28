import React, { Component } from 'react';

import Navbar from './components/Navbar';

class HomeWrapper extends Component {
    render() {
        return (<div>
            <Navbar /> 
            { this.props.children }
        </div>)
    }
}

export default HomeWrapper;