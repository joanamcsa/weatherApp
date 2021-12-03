import React, { Component } from "react";
import {LoadCities} from './components/LoadCities';
import ReactNotification from '../node_modules/react-notifications-component'
import 'react-notifications-component/dist/theme.css'



class App extends Component {

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