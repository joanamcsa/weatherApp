import React, { Component } from "react";
import store1 from '../redux/store.js';
import '../App.css';
import CountryCodes from "./data/CountryCode-inv.json";

export class ItemList extends Component {

    //list item that shows the cities entered by the user with country

    state = {
        weather: store1.getState().cities,
    }
    
    render() {
        return (
            <div className="itemsList" onClick={() => this.props.selectCity(this.props.index)}>
                <p className="name">{this.state.weather[this.props.index].name}, {CountryCodes[this.state.weather[this.props.index].country]}</p>
                <p className="temp">{Math.round(this.state.weather[this.props.index].current.temp)}ºC</p>
                <div className="trash">
                    <img src={this.props.trash} alt="trash icon" onClick={() => this.props.removeCity(this.props.coords)}></img>
                </div>
            </div>
        );
    }
}

export default ItemList;