import React, { Component } from 'react';
import './styles.css';

import streak from '../../../../assets/features/Streak.svg';
import apps from '../../../../assets/features/apps.png';
import graph from '../../../../assets/features/graphFeature.png';
import notif from '../../../../assets/features/Notification.png';

const SingleFeature = ({ title, description, image }) => {
    return (
            <div className="singleFeature">
                <div>
                    <h1> { title } </h1>
                    <p> { description } </p>
                </div>
                <img src={ image } alt="feature description" />
            </div>
        )
}

class Features extends Component {
    render() {
        return (<div className="features">
                    <SingleFeature title="Balance Graph" 
                                   description="Our app connects with your bank account in a matter of seconds. 
                                   We allow you to track your balance every day! We offer a visual representation 
                                   of how your money is fluctuating."
                                   image={ graph } />
                    <SingleFeature title="Feature 2" 
                                   description="The Credit Swag sends helpful notifications as users spend money helping them
                                   make better decisions."
                                   image={ notif } />
                    <SingleFeature title="Bill Builder" 
                                   description="Students can set up recurring bills they have and we automatically map each one to an emoji so you can always easily see what bills you have coming up."
                                   image={ apps } />
                </div>)
    }
}

export default Features;