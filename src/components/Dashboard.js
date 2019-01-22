import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AssignUser from './AssignUser';
import Header from './Header';

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
				<Header />
				<h3 className="font-color w3-text-center"> Welcome to Dashboard... </h3>
				<div className="w3-login-form">
					<Link to="/userlist" className="w3-flex">  UserList </Link>
					<br />
					<AssignUser />
					<br />
					<div className="w3-flex">
						<button onClick={this._removeStorage} className="w3-btn" ><b> Logout </b></button>
					</div>
				</div>
			</div>
		)
	}
}
export default Dashboard;
