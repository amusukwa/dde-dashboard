import React, { Component } from 'react'
import NavBar from './Nav/NavBar'
import LineGraph from './charts/LineGraph'
import Table from './Table/Table'
import Map from './charts/Map'
import PieChart from './charts/PieChart'
import { fetchLocation } from './actions'
import { connect } from 'react-redux'
import DashHome from './charts/DashHome'
import Locations from './Locations'
import Footer from './common/Footer'
import Login from './common/Login'
import Banner from './Nav/Banner'
import { Divider } from 'react-materialize'
//import { Link, Route, Switch, Router } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
	componentDidMount() {
		this.props.fetchLocation()
		const locations = JSON.stringify(Locations)
		console.log(locations)
	}
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/" component={DashHome} />
						<Route path="/login" component={Login} />
					</Switch>
				</Router>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	facilities: state.facilities.facilityLocation
})
export default connect(mapStateToProps, {
	fetchLocation
})(App)
