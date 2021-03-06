import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import passwordConnect from './../redux/connect/passwordConnect';

class Header extends Component {
	constructor(props) {
		super(props);
		this._removeStorage = this._removeStorage.bind(this);
	}

	_removeStorage() {
		sessionStorage.removeItem('userData');
	}

	render() {
		const active = sessionStorage.getItem('userData') ? true : false;
		return (
			<div>
				<div className="w3-header">
					<div>
						<img className="w3-image-size" src="https://cdn.dribbble.com/users/1382625/screenshots/2985457/bm-monogram.png" />
					</div>
					<div className="w3-link">
						<Link to="/home"><i class="fas fa-home">&nbsp; Home </i></Link>
						{
							active &&
							<Link to="/dashboard"><i class="fas fa-tachometer-alt">&nbsp; Dashboard </i></Link>
						}
						<Link to="/about"><i class="fas fa-user">&nbsp; About Us </i></Link>
						<Link to="/gallary"><i class="fas fa-images">&nbsp; Gallary </i></Link>
						{
							!active ?
								<Link to="/register"><i class="fas fa-user-plus">&nbsp;&nbsp;Sign Up </i></Link>
								:
								''
						}
						{
							active ?
								<Link to="/login"><a onClick={this._removeStorage} ><i class="fas fa-sign-out-alt">&nbsp; Logout </i> </a> </Link>
								:
								<Link to="/login"><i class="fas fa-sign-in-alt">&nbsp; Sign In </i></Link>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default (passwordConnect(Header));
