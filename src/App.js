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
	componentDidMount() {}
	render() {
		return (
			<React.Fragment>
				<ul>{this.props.facilityLocations.map(fl => console.log(fl))}</ul>
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
	facilityLocations: state.facilities.facilityLocations
})
export default connect(mapStateToProps, {
	fetchLocation
})(App)
