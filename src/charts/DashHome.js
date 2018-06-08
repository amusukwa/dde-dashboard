import React, { Component } from 'react'
import NavBar from '../Nav/NavBar'
import LineGraph from '../charts/LineGraph'
import Table from '../Table/Table'
import Map from '../charts/Map'
import PieChart from '../charts/PieChart'
import { fetchLocation } from '../actions'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Footer from '../common/Footer'
import FacilityIds from '../common/FacilityId'
import FacilityLocation from '../common/FacilityLocation'

class DashHome extends Component {
	async componentWillMount() {
		console.log(this.props)
	}
	render() {
		return (
			<div>
				<NavBar />
				<div />
				<br />
				<div className="row mfl-tm-2  container">
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
								{this.props.locations.map(location => (
									<FacilityLocation location={location} />
								))}
							</div>
							<div className="col s3 m3 dash-tm-2">
								<PieChart />
							</div>
							<div className="col s3 m3 dash-tm-2">
								<PieChart />
							</div>
						</div>
						<div />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		locations: state.facilities.facilityLocations
	}
}
export default connect(mapStateToProps, {
	fetchLocation
})(DashHome)
