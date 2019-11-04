import React, { Component } from 'react';
import './styles.css';

// join waitlist form
class WaitlistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false,
            success: false,
        }
    }

    sendEmail() {
        console.log("SENDING DATA...")
        fetch("/", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email : this.state.email })
        }).then((response) => response.json())
          .then((data) => {
              console.log("STATUS: ", data.status)
              if (!data.status) {
                this.setState({ error : true });
              } else {
                  this.setState({ success : true });
              }
            })
          .catch((err) => {
              console.log(err)
              this.setState({ error : true });
          })
        
    }

    render() {
        // TODO: confirmation that email went through!
        if ( this.state.success ) {
            return (<div ref="waitlist" className="contact">
                    <div className="form">
                        <p className="successMessage">YAY! You're on the waitlist!</p>
                        <button className="okButton" onClick={ () => this.setState({ success: false }) }> Ok! </button>
                    </div>
                </div>)
        }
        // TODO: error message if it errored
        let error = '';
        if ( this.state.error ) {
            error = <p className="error">Oops, our bad. Try again!</p>
        }

        if ( this.props.scroll ) {
            this.refs.waitlist.scrollIntoView({ behavior: "smooth" });
        }
        return (<div ref="waitlist" className="contact">
                    <div className="form">
                        <input onChange={ (e) => this.setState( { email: e.target.value })} type="email" placeholder="email" />
                        <button onClick={ () => this.sendEmail() }>JOIN THE WAITLIST</button>
                    </div>
                    { error }
                </div>)
    }
}

export default WaitlistForm;