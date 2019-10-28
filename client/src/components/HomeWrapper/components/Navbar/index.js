import React, { Component } from 'react';
import './styles.css';

class Navbar extends Component {
    render() {
        return (
        <div className="navbar">
            <ul>
                <li><h1 className="title">Credit Swag</h1></li>   
            </ul>
            
            <ul>
                <li><a href="#item1">item1</a></li>
                <li><a href="#item2">item2</a></li>
                <li><a href="#item3">item3</a></li>
                <li><a href="#item4">item4</a></li>
            </ul>
        </div>)
    }
}

export default Navbar;