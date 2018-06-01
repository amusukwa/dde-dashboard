import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Login from '../common/Login'

class Footer extends Component {
	render() {
		return (
			<div className="">
				<nav className=" dashboard-nav grey darken-1">
					<div>
						© 2014 Copyright Text
						<a class="grey-text text-lighten-4 right" href="#!">
							More Links
						</a>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to="/login">LOGIN</Link>
							</li>
							<li>
								<a href="badges.html">ADMIN</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default Footer
