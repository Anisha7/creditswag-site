import React, { Component } from 'react';
import './styles.css';
import illustration from '../../../../assets/apple-illustration.svg';

class AboutUs extends Component {
    render() {
        return (<div className="aboutUs">
                    <div>
                        <h1>About us</h1>
                        <h2>Generic title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Tempor enim libero amet, eu volutpat. Iaculis sit lacus id volat. 
                            Suspendisse in facilisis hendrerit cras nunc. Aliquam magna 
                            malesuada quisque vulputate ac, lorem consequat gravida ipsum.</p>
                    </div>
                    <img src={ illustration } alt="illustration" />
                </div>)
    }
}

export default AboutUs;