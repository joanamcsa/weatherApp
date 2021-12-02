import React, { Component } from "react";
import store1 from './redux/store.js';
import {LoadCities} from './components/LoadCities';
import ReactNotification from '../node_modules/react-notifications-component'
import 'react-notifications-component/dist/theme.css'



class App extends Component {

  state = {
    weather: store1.getState().cities,
  }

  render() {
    return (
      <div>
        <ReactNotification />
        <LoadCities />
      
      </div>
    );
    
  }
}

export default App;