import React, { Component } from 'react';
import phones from '../../../../assets/Phones.png';
import './styles.css';

class Banner extends Component {
    render() {
        return (<div className="bannerBg">
                    <div className="banner">
                        <div className="slogan">
                            <h1>Save $$</h1>
                            <h2>money moves made simple</h2>
                            <button onClick={ () => this.props.updateScrollToWaitlist() }>JOIN THE WAITLIST</button>
                        </div>
                        <img src={ phones } alt="Credit swag screenshots" />
                    </div>
                </div>)
    }
}

export default Banner;