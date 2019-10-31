import React, { Component } from 'react';
import './styles.css';

class ContactUs extends Component {
    render() {
        return (<div className="contactUs">
                    <h1>About us</h1>
                    <div className="content">
                        {/* row 1 */}
                        <div>
                            <h2>Email</h2>
                            <p>sup@creditswag.com</p>
                            <h2>Phone</h2>
                            <p>(888)-GET-RICH</p>
                        </div>
                        {/* row 2 */}
                            <h2>San Francisco</h2>
                            <h3>Engineering Team</h3>
                            {/* TODO: Add link to google maps */}
                            <p>555 Post Street </p>
                            <p>California, 94115</p>
                            <p>United States</p>
                        <div>

                        </div>
                        {/* row 3 */}
                            <h2>Los Angeles</h2>
                            <h3>Business Team</h3>
                            {/* TODO: Add link to google maps */}
                            <p>Makhtom Road </p>
                            <p>California, 02450</p>
                            <p>United States</p>
                        <div>

                        </div>
                    </div>
                </div>)
    }
}

export default ContactUs;