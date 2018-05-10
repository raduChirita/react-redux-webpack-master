import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingPage from "./LandingPage";
import RaisedButton from 'material-ui/RaisedButton';
import { history } from '../_helpers';

class PopulateDB extends Component {
	constructor(props){
		super(props);
	}
	
	handleClick(event) {
		var apiBaseUrl = "http://localhost:4000/";
		
		axios.post(apiBaseUrl+'generate', {})
		.then(function (response) {
			console.log(response);
			if(response.status == 200){
				console.log("Populating with success!");
			} else {
				console.log("Populating failed!");
				alert("Failed to generate random data!")
			}
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	
render() {
    return (
	<div>
	<LandingPage/>
	<MuiThemeProvider>
		<div>
			<RaisedButton label="Populate"
				onClick = {(event) => this.handleClick(event)}
			/>
		</div>
	</MuiThemeProvider>
	</div>
    );
  }
}

export default PopulateDB;
