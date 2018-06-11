import React, { Component } from 'react'
import Table from './Table/Table'
import PieChart from './charts/PieChart'
import { connect } from 'react-redux'
import ChartHome from './charts/ChartHome'
import Locations from './Locations'
import Footer from './common/Footer'
import Login from './common/Login'
import Banner from './Nav/Banner'
import { Divider } from 'react-materialize'
//import { Link, Route, Switch, Router } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { fetchTotalIds, fetchLocation, fetchFacilityNpids } from './actions'

class App extends Component {
	async componentWillMount() {
		//	this.props.fetchTotalIds()
		//this.props.fetchLocation()
		//this.props.fetchFacilityNpids(this.props.facilityLocations.doc_id)
		//await this.props.fetchFacilityNpids(this.props.location.doc_id)
		console.log(this.props.facilityLocations)
	}
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/ChartHome" component={ChartHome} />
					</Switch>
				</Router>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		facilities: state.facilities
	}
}

const mapDispatchToProps = {
	fetchTotalIds,
	fetchFacilityNpids
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
