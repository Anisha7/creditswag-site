import React, { Component } from 'react';
import './styles.css';

// join waitlist form
class WaitlistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false,
        }
    }

    sendEmail() {
        console.log("SENDING DATA...")
        fetch("/", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.email)
        }).then((response) => response.json())
          .then((data) => {
              console.log("STATUS: ", data.status)
              if (!data.status) {
                this.setState({ error : true });
              }
            })
          .catch((err) => {
              console.log(err)
              this.setState({ error : true });
          })
        
    }

    render() {
        // TODO: confirmation that email went through!
        // TODO: error message if it errored

        if ( this.props.scroll ) {
            this.refs.waitlist.scrollIntoView({ behavior: "smooth" });
        }
        return (<div ref="waitlist" className="contact">
                    <div className="form">
                        <input onChange={ (e) => this.setState( { email: e.target.value })} type="email" placeholder="email" />
                        <button >JOIN THE WAITLIST</button>
                    </div>
                </div>)
    }
}

export default WaitlistForm;