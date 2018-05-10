import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { history } from '../_helpers';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

export class LandingPage extends Component {
	constructor(props){
		super(props);
	}
render() {
    return (
    <div className="col-md-4 offset-md-1">
	<MuiThemeProvider>
		<div>
			<Paper style={style}>
				<Menu>
					<MenuItem primaryText="Populate DB" 
						onClick = {(event) => history.push('/populateDB')}/>
					<MenuItem primaryText="Aggregate" 
						onClick = {(event) => history.push('/aggregate')}/>
				</Menu>
			</Paper>
		</div>
	</MuiThemeProvider>
	</div>
    );
  }
}

export default LandingPage;
