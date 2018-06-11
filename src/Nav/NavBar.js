import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Login from '../common/Login'
import Menu from '../Nav/Menu'
import ChartHome from '../charts/ChartHome'

class NavBar extends Component {
	render() {
		return (
			<div className="nav-wrapper">
				<nav className=" dashboard-nav green darken-1">
					<div>
						<a href="#!" className="brand-logo white-text">
							DDE DASHBOARD
						</a>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to="/">LOG OUT</Link>
							</li>
							<li>
								<a href="lock.html">
									<i class="material-icons right">view_module</i>
								</a>
							</li>
							<li>
								<i class="material-icons">refresh</i>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

export default NavBar
