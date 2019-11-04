import React, { Component } from 'react';
import './styles.css';

// join waitlist form
class WaitlistForm extends Component {

    render() {
        if ( this.props.scroll ) {
            this.refs.waitlist.scrollIntoView({ behavior: "smooth" });
        }
        return (<div ref="waitlist" className="contact">
                    <div className="form">
                        <input type="email" placeholder="email" />
                        <button>JOIN THE WAITLIST</button>
                    </div>
                </div>)
    }
}

export default WaitlistForm;