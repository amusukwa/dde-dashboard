//@flow
import React, { Component } from 'react'
import NavBar from '../Nav/NavBar'
import LineGraph from '../charts/LineGraph'
import Map from '../charts/Map'
import PieChart from '../charts/PieChart'
import { fetchLocation, checkCredentials } from '../actions'
import { connect } from 'react-redux'
import Footer from '../common/Footer'
import FacilityTotal from '../common/FacilityTotal'
import fetchFacilityNpids from '../actions/fetch-facilitynpids'
import { Card, CardTitle } from 'react-materialize'
import FacilityId from '../common/FacilityId'
import Table from '../Table/Table'
import FacilityList from '../common/FacilityList'

class ChartHome extends Component<any> {
	async componentDidMount() {
		await this.props.fetchFacilityNpids(this.props.location.doc_id)
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
					{!sessionStorage.getItem('loginResponse.access_token') ? (
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
					) : (
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
									<FacilityList location={location} />
								))}
							</Card>
						</div>
					)}
					<div className="col s3 m3 dash-tm-2">
						{!sessionStorage.getItem('loginResponse.access_token') ? (
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
						) : (
							<Card
								header={
									<CardTitle className=" grey lighten-1 dashboard-p-2">
										Facilities
									</CardTitle>
								}
							>
								{' '}
								{this.props.locations.map(location => (
									<FacilityList location={location} />
								))}
							</Card>
						)}
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
		facilities: state.facilities,
		loginResponse: state.auth.loginResponse
	}
}
export default connect(mapStateToProps, {
	fetchFacilityNpids,
	fetchLocation,
	checkCredentials
})(ChartHome)
