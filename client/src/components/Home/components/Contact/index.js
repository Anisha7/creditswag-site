import React, { Component } from 'react';
import './styles.css';

// join waitlist form
class Contact extends Component {

    componentDidMount() {
        if ( this.props.scroll ) {
            console.log("scrolling now...")
            this.refs.waitlist.scrollIntoView();
            this.props.updateScrollToWaitlist()
        }
    }

    render() {
        if ( this.props.scroll ) {
            console.log("scrolling now in render...")
            this.refs.waitlist.scrollIntoView();
        }
        return (<div ref="waitlist" className="contact">
                    <div className="form">
                        <input type="email" placeholder="email" />
                        <button>JOIN THE WAITLIST</button>
                    </div>
                </div>)
    }
}

export default Contact;