import React, { Component } from "react";
import '../App.css';


export class Box extends Component {

    static get properties() {
        return {
            city: {type: Object},
        };
    }
    
    constructor() {
        super();
        this.city=[];
    }
    
    componentDidMount(){

    }

    render() {

        return (
            
            <div className="weather-card madrid">
                <p>{this.props.city}</p>
                <h1>{Math.round(this.props.temp)}ºC</h1>
                
                <div className="weather-icon">
                    <img src={this.props.icon} alt="estou aqui"></img></div>
                
            </div> 
        );
        
    }
}

export default Box;