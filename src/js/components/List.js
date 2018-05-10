import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const mapStateToProps = state => {
  return { username: state.credentials.values.username, password: state.credentials.values.password };
};

const ConnectedList = ({ username, password }) => (
  <ul className="list-group list-group-flush">
      <li className="list-group-item">
	  {username}:{password}
      </li>
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
