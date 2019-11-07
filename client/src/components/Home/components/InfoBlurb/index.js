import React, { Component } from 'react';
import './styles.css';
import illustration from '../../../../assets/Illustration.png';

class InfoBlurb extends Component {
    render() {
        return (<div className="infoblurb-wrapper">
                    <div className="infoblurb">
                        <h1>Reach your goals.</h1>
                        <p>Our mission is to make financing accessible and approachable for college students. Students are struggling to manage their money and have no incentive to learn about financial literacy. Our solution is an app that incentivizes them to make smarter financial decisions on a daily basis by teaching them money management as they spend.</p>
                        <img src={ illustration } alt="illustration" />
                    </div>
                </div>)
    }
}

export default InfoBlurb;