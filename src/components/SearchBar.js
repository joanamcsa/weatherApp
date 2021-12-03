import React, { Component } from "react";
import '../App.css';

export class SearchBar extends Component {
    state = {
        inputValue:''
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    handleKeyPress(evt) {
        if (evt.key === 'Enter') {
            this.updateInputValue(evt);
            this.props.addCity(this.state.inputValue);
            evt.target.value ='';
        }
    }

    render() {
        return (
            <div className="itemsList inputDiv" >
                <input placeholder="Insert a city" type="text" value={this.state.value} onChange={(evt) => this.updateInputValue(evt)} onKeyPress={(evt) => this.handleKeyPress(evt)}></input>
                <div className="trash">
                    <img src={this.props.image} alt="search icon" onClick={() => this.props.addCity(this.state.inputValue)}></img>
                </div>
            </div>
        );
    }
}

export default SearchBar;