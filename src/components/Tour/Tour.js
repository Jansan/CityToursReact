import React, { Component } from 'react'
import './Tour.scss';

class Tour extends Component {
    render() {
        return (
            <article className="tour">
                <div className="img-container">
                    <img src="https://images.pexels.com/photos/3609211/pexels-photo-3609211.jpeg?cs=srgb&dl=golden-gate-bridge-san-francisco-california-3609211.jpg&fm=jpg" alt="img" />
                    <span className="close-btn">
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>city</h3>
                    <h4>name</h4>
                    <h5>info{""}<span className="fas fa-caret-square-down"></span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </article>
        )
    }
}

export default Tour
