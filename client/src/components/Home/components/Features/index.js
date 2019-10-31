import React, { Component } from 'react';
import './styles.css';

import streak from '../../../../assets/features/Streak.svg';
import graph from '../../../../assets/features/graphFeature.png';

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
                    <SingleFeature title="Feature 1" 
                                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices sed arcu lorem scelerisque dui netus. Rutrum condimentum a nisl ipsum mauris, netus lorem scelerisque adipiscing."
                                   image={ graph } />
                    <SingleFeature title="Feature 2" 
                                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices sed arcu lorem scelerisque dui netus. Rutrum condimentum a nisl ipsum mauris, netus lorem scelerisque adipiscing."
                                   image="" />
                    <SingleFeature title="Feature 3" 
                                   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices sed arcu lorem scelerisque dui netus. Rutrum condimentum a nisl ipsum mauris, netus lorem scelerisque adipiscing."
                                   image={ streak } />
                </div>)
    }
}

export default Features;