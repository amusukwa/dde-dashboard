import React, { Component } from 'react'
import Table from './Table/Table'
import PieChart from './charts/PieChart'
import { connect } from 'react-redux'
import ChartHome from './charts/ChartHome'
import Footer from './common/Footer'
import Login from './common/Login'
import Banner from './Nav/Banner'
import { Divider } from 'react-materialize'
//import { Link, Route, Switch, Router } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { fetchTotalIds, fetchLocation, fetchFacilityNpids } from './actions'

class App extends Component {
	async componentWillMount() {
		console.log(this.props)
	}
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={ChartHome} />
						<Route exact path="/Login" component={Login} />
						<Route path="/ChartHome" component={ChartHome} />
					</Switch>
				</Router>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		facilities: state.facilities
	}
}

const mapDispatchToProps = {
	fetchTotalIds,
	fetchFacilityNpids
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
