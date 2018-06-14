//@flow
import React, { Component } from 'react'
import NavBar from '../Nav/NavBar'
import LineGraph from '../charts/LineGraph'
import Map from '../charts/Map'
import PieChart from '../charts/PieChart'
import { fetchLocation } from '../actions'
import { connect } from 'react-redux'
import Footer from '../common/Footer'
import FacilityTotal from '../common/FacilityTotal'
import fetchFacilityNpids from '../actions/fetch-facilitynpids'
import { Card, CardTitle } from 'react-materialize'
import FacilityId from '../common/FacilityId'

class ChartHome extends Component<any> {
	async componentWillMount() {
		await this.props.fetchFacilityNpids(this.props.location.doc_id)
		console.log(this.props.fetchFacilityNpids(this.props.location.doc_id))
	}
	render() {
		return (
			<div>
				<NavBar />
				<div />
				<br />
				<div className="row mfl-tm-2 container">
					<br />
					<div className="col s3 m3 dash-tm-2 dashboard-shadow map-chart-container ">
						<Map />
					</div>
					<div className="col s6 m6">
						<div className="row">
							<div className="col s6 m6 dash-tm-5">
								<LineGraph />
							</div>
							<div className="col s6 m6 dash-tm-5">
								<LineGraph />
							</div>
						</div>
						<div className="row">
							<div className="col s6 m6 dash-tm-2">
								<PieChart />
							</div>
							<div className="col s6 m6 dash-tm-2">
								<PieChart />
							</div>
							<div className="col s3 m3 dash-tm-2" />
						</div>

						<div />
					</div>
					<div className="col s3 m3 dash-tm-2">
						<Card
							header={
								<CardTitle className=" grey lighten-1 dashboard-p-2">
									Facilities
								</CardTitle>
							}
						>
							{' '}
							{this.props.locations.map(location => (
								<FacilityTotal location={location} />
							))}
						</Card>
					</div>
					<div className="col s3 m3 dash-tm-2">
						<Card
							header={
								<CardTitle className=" grey lighten-1 dashboard-p-2">
									Facilities
								</CardTitle>
							}
						>
							{' '}
							{this.props.locations.map(location => (
								<FacilityId location={location} />
							))}
						</Card>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		locations: state.facilities.facilityLocations,
		facilities: state.facilities
	}
}
export default connect(mapStateToProps, {
	fetchFacilityNpids,
	fetchLocation
})(ChartHome)
