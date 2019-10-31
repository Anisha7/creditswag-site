import React, { Component } from 'react';
import './styles.css';

class Contact extends Component {
    render() {
        return (<div className="contact">
                    <div className="form">
                        <input type="email" placeholder="email" />
                        <button>JOIN THE WAITLIST</button>
                    </div>
                </div>)
    }
}

export default Contact;