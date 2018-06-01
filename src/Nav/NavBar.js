import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Login from '../common/Login'
import Menu from '../Nav/Menu'

class NavBar extends Component {
	render() {
		return (
			<div className="">
				<Menu />
				<Switch>
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		)
	}
}

export default NavBar
