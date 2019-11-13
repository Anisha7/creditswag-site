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
                            <a className="email" href="mailto:customerservice@conquercredit.com"><p>customerservice@conquercredit.com</p></a>
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
                                <p>23901 Calabasas Road #2064 <br />
                                Calabasas, CA 91302<br />
                                United States</p>
                            </a>

                        </div>
                    </div>
                </div>)
    }
}

export default ContactUs;