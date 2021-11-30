import React, { Component } from "react";
import store from './redux/store.js';
import {LoadCities} from './components/LoadCities';


class App extends Component {

  static get properties() {
    return {
      images: {type: Object},
      city: {type: Object},
    };
  }

  constructor() {
    super();
    this.city=[];
  }

  stateChanged(state) {
    this.city = state.cities;
    console.log(this.city)
  }

  componentDidMount() {
    
    this.city = store.getState().cities;

  }

  render() {
    console.log("estou no render")
    return (
      <div>
        <h1>Current Weather </h1>
        <LoadCities />
      
      </div>
    );
    
  }
}

export default App;