import React, { Component } from 'react';
import './styles.css';
import illustration from '../../../../assets/Illustration.svg';

class InfoBlurb extends Component {
    render() {
        return (<div className="infoblurb">
                    <h1>Reach your goals.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Tempor enim libero amet, eu volutpat. Iaculis sit lacus id volutpat. 
                        Suspendisse in facilisis hendrerit cras nunc. Aliquam magna malesuada 
                        quisque vulputate ac, lorem consequat gravida ipsum.</p>
                    <img src={ illustration } alt="illustration" />
                </div>)
    }
}

export default InfoBlurb;