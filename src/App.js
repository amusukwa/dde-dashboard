import React, { Component } from 'react'
import Table from './Table/Table'
import PieChart from './charts/PieChart'
import { connect } from 'react-redux'
import DashHome from './charts/DashHome'
import Locations from './Locations'
import Footer from './common/Footer'
import Login from './common/Login'
import Banner from './Nav/Banner'
import { Divider } from 'react-materialize'
//import { Link, Route, Switch, Router } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { fetchTotalIds, fetchLocation } from './actions'

class App extends Component {
	componentWillMount() {
		//	this.props.fetchTotalIds()
		this.props.fetchLocation()
		console.log('hello')
	}
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/DashHome" component={DashHome} />
					</Switch>
				</Router>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	facilityLocations: state.facilities.facilityLocations,
	totalNpids: state.facilities.totalNpids
})
export default connect(mapStateToProps, {
	fetchLocation,
	fetchTotalIds
})(App)
