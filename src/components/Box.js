import React, { Component } from "react";
import '../App.css';


export class Box extends Component {
    //Box showing the current weather and city
   
    render() {
        return (
            <div>
                <div className="weather-card">
                    <p>{this.props.city}</p>
                    <div className="weather-icon">
                        <img src={this.props.icon} alt="weather icon"></img>
                    </div>
                    <h1>{Math.round(this.props.temp)}ºC</h1>
                </div>
            </div> 
        );
        
    }
}

export default Box;