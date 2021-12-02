import React, { Component } from "react";
import store1 from '../redux/store.js';
import '../App.css';


export class Box extends Component {
    state = {
        weather: [],
    }
    static get properties() {
        return {
           
        };
    }
    
    constructor() {
        super();
        this.setState({weather: store1.getState().cities});
    }
    
    componentDidMount(){

    }

    render() {
        return (
            <div>
            <div className="weather-card">
                <p>{this.props.city}</p>
                <div className="weather-icon">
                    <img src={this.props.icon} alt="weather icon"></img></div>
                <h1>{Math.round(this.props.temp)}ºC</h1>
            </div> 
            
            </div> 
        );
        
    }
}

export default Box;