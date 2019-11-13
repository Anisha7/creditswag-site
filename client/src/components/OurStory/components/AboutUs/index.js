import React, { Component } from 'react';
import './styles.css';
import illustration from '../../../../assets/apple-illustration.svg';

class AboutUs extends Component {
    render() {
        return (<div className="aboutUs">
                    <div>
                        <h1>About us</h1>
                        <h2>Not your average thought leaders!</h2>
                        {/* Conquer Credit Management has served thousands of 
                            clients enabling and educating them on the importance 
                            of credit.  */}
                        {/* <p>After years of witnessing students struggle 
                            with money management, Angela Setters envisioned an app to 
                            help students learn about financial literacy in an easy, 
                            engaging process. She enlisted the help of student developers 
                            at Make School to accomplish her mission.</p>
                        <p> */}
                        <p>With over 50 years of combined wisdom and experience in education, finance, credit and
                        technology the Credit Swag team is ready to help you understand how to use your money and
                        credit as a wealth building tool for success!
                        </p>
                    </div>
                    <img src={ illustration } alt="illustration" />
                </div>)
    }
}

export default AboutUs;