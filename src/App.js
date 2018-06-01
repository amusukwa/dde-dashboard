import React, { Component } from 'react'
import NavBar from './Nav/NavBar'
import LineGraph from './charts/LineGraph'
import Table from './Table/Table'
import Map from './charts/Map'
import PieChart from './charts/PieChart'
import { fetchLocation } from './actions'
import { connect } from 'react-redux'
import DashHome from './charts/DashHome'
import { Route, Switch } from 'react-router-dom'
import Locations from './Locations'
import Footer from './common/Footer'

class App extends Component {
	componentDidMount() {
		this.props.fetchLocation()
		const locations = JSON.stringify(Locations)
		console.log(locations)
	}
	render() {
		return (
			<div>
				<NavBar />

				<div />
				<div className="row mfl-tm-2 ">
					<br />
					<div className="col s3 m3 dash-tm-2 dashboard-shadow map-chart-container ">
						<Map />
					</div>
					<div className="col s9 m9">
						<div className="row">
							<div className="col s3 m3 dash-tm-5">
								<LineGraph />
							</div>
							<div className="col s3 m3 dash-tm-5">
								<LineGraph />
							</div>
							<div className="col s3 m3 dash-tm-5">
								<LineGraph />
							</div>
							<div className="col s3 m3 dash-tm-5">
								<LineGraph />
							</div>
						</div>
						<div className="row">
							<div className="col s6 m6 dash-tm-2">
								<Table />
							</div>
							<div className="col s3 m3 dash-tm-2">
								<PieChart />
							</div>
							<div className="col s3 m3 dash-tm-2">
								<PieChart />
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	facilities: state.facilities.facilityLocation
})
export default connect(mapStateToProps, {
	fetchLocation
})(App)
