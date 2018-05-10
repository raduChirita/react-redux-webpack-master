import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingPage from "./LandingPage";
import { history } from '../_helpers';

class Aggregate extends Component {
	constructor(props){
		super(props);
		this.state={ time: '' };
	}
	
	componentDidMount() {
		var apiBaseUrl = "http://localhost:4000/";
		var self = this;
		axios.get(apiBaseUrl+'queryTime')
		.then(function (response) {
			console.log(response);
			if(response.status == 200){
				console.log(response.data);
				self.setState({time: response.data});
			}
			else {
				console.log("Get Aggregate time failed!");
				alert("Get Aggregate time failed!")
			}
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	
render() {
	const timeRetrieved = this.state.time;
    return (
	<div>
	<LandingPage/>
	<MuiThemeProvider>
		<div>
			<TextField
				floatingLabelText="Time"
				disabled
				id="timeField"
				value={timeRetrieved}
			/>
		</div>
	</MuiThemeProvider>
	</div>
    );
  }
}

export default Aggregate;
