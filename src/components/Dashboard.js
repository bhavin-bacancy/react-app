import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import userConnect from './../redux/connect/userConnect';
import AssignUser from './AssignUser';

class Dashboard extends Component {
	constructor() {
		super();
		this._removeStorage = this._removeStorage.bind(this);
	}

	_removeStorage() {
		localStorage.removeItem('userData');
		this.props.history.push('/login');
	}
	render() {
		return (
			<div>
				<h4 className="font-color"> Welcome to Dashboard... </h4>
				<Link to="/userlist"> UserList </Link>
				<br /><br />
				<AssignUser />
				<br />
				<button onClick={this._removeStorage} className="w3-btn"> Logout </button>
			</div>
		)
	}
}
export default (Dashboard);