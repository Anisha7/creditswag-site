import React, { Component } from 'react';
import './styles.css';

class ContactUs extends Component {
    render() {
        return (<div className="contactUs">
                    <h1>Contact us</h1>
                    <div className="content">
                        {/* row 1 */}
                        <div className="row1"> 
                            <h2>Email</h2>
                            <a href="mailto:sup@creditswag.com"><p>sup@creditswag.com</p></a>
                        </div>
                        <div>
                        {/* row 2 */}
                            <h2>San Francisco</h2>
                            <h3>Engineering Team</h3>
                            <a href="https://goo.gl/maps/N4kW8PYBU9KGXixU7">
                                <p>555 Post Street <br />
                                California, 94115<br />
                                United States </p>
                            </a>

                        </div>
                        <div>
                        {/* row 3 */}
                            <h2>Los Angeles</h2>
                            <h3>Business Team</h3>
                            {/* TODO: UPDATE google maps link and UPDATE address */}
                            <a href="https://goo.gl/maps/N4kW8PYBU9KGXixU7">
                                <p>Makhtom Road <br />
                                California, 02450<br />
                                United States</p>
                            </a>

                        </div>
                    </div>
                </div>)
    }
}

export default ContactUs;