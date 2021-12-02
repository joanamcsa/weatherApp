import React, { Component } from "react";
import '../App.css';


export class SmallBox extends Component {
    
    render() {
        return (
            <div className="weather-card-small">
            <p>{new Date(this.props.date * 1000).toDateString().split(" ")[0]}</p>
            <div className="weather-icon-small">
                <img src={this.props.icon} alt="weather icon"></img></div>
            <h1>{Math.round(this.props.temp_max)}º {Math.round(this.props.temp_min)}º</h1>
            </div> 
            
        );
        
    }
}

export default SmallBox;