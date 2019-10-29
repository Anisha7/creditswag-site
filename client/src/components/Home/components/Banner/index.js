import React, { Component } from 'react';
import phones from '../../../../assets/Phones.png';
import curve from '../../../../assets/bottomCurve.png';
import './styles.css';

class Banner extends Component {
    render() {
        return (<div className="bannerBg">
                    <div className="banner">
                        <div className="slogan">
                            <h1>Save $$.</h1>
                            <h2>Dumb simple.</h2>
                            <button>JOIN THE WAITLIST</button>
                        </div>
                        <img src={ phones } alt="Credit swag screenshots" />
                    </div>
                    <img className="curve" src={ curve } alt="style curve" />
                </div>)
    }
}

export default Banner;