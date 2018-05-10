import React from "react";
import List from "./List";
import Form from "./Form";
import LandingPage from "./LandingPage";
import PopulateDB from "./PopulateDB";
import Aggregate from "./Aggregate";

import { Router, Route } from 'react-router-dom';
import { history } from '../_helpers';
import { PrivateRoute } from '../PrivateRoute';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Credentials</h2>
      <List />
    </div>
	<Router history={history}>
        <div>
            <PrivateRoute exact path="/" component={Form} />
            <Route path="/landingPage" component={LandingPage} />
			<Route path="/populateDB" component={PopulateDB} />
			<Route path="/aggregate" component={Aggregate} />
        </div>
    </Router>
  </div>
  
);

export default App;
