import React, { Component } from 'react';
import './styles.css';
import illustration from '../../../../assets/Illustration.png';

class InfoBlurb extends Component {
    render() {
        return (<div className="infoblurb-wrapper">
                    <div className="infoblurb">
                        {/* <h1>Reach your goals.</h1> */}
                        <h1>We inspire <i>change</i> in financial decisions everyday.</h1>
                        <p>What’s in your smart device could never be more important. Our phones now carry our lives
                            from our identity to our social experience. Credit Swag’s team of experts thought it high priority
                            to bring together a tool that will make your financial life simple, forward thinking and of course
                            fun to use and learn.
                            </p>
                        <img src={ illustration } alt="illustration" />
                    </div>
                </div>)
    }
}

export default InfoBlurb;