import React, { Component } from "react";
import { connect } from "react-redux";
import { addCredentials } from "../actions/index";
import { Router, Route } from 'react-router-dom';
import { history } from '../_helpers';
import PropTypes from "prop-types";
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';


const mapDispatchToProps = dispatch => {
  return {
    addCredentials: (username, password) => dispatch(addCredentials(username, password))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "theUser",
	  password: "thePassword"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    history.push('/');
  }
  
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
	this.setState({ username: "theUser", password: "thePassword" });
    this.props.addCredentials(username, password);
	
	var apiBaseUrl = "http://localhost:4000/";
	
	axios.get(apiBaseUrl+'checkDB')
		.then(function (response) {
			console.log(response);
			if(response.status == 200){
				console.log("Login successfull");
				history.push('/landingPage');
				}
			else {
				console.log("Login failed, no mongo connection!");
				alert("Mongo connection is down... You cannot login.")
			}
		})
		.catch(function (error) {
			console.log(error);
			console.log("Login failed, endpoint problems!");
		});
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
			<MuiThemeProvider>
				<TextField
					defaultValue="theUser"
					floatingLabelText="Username"
					disabled
					className="form-control"
					id="username"
				/>
				<TextField
					type="password"
					defaultValue="thePassword"
					floatingLabelText="Password"
					disabled
					className="form-control"
					id="password"
				/>
				<br/>
				<button type="submit" className="btn btn-success btn-lg">
					LOGIN
				</button>
			</MuiThemeProvider>
         </div>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
