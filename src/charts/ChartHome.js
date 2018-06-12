//@flow
import React, { Component } from 'react'
import NavBar from '../Nav/NavBar'
import LineGraph from '../charts/LineGraph'
import Map from '../charts/Map'
import PieChart from '../charts/PieChart'
import { fetchLocation } from '../actions'
import { connect } from 'react-redux'
import Footer from '../common/Footer'
import FacilityLocation from '../common/FacilityLocation'
import fetchFacilityNpids from '../actions/fetch-facilitynpids'

class ChartHome extends Component {
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
							<div className="col s3 m3 dash-tm-2">
								<PieChart />
							</div>
							<div className="col s3 m3 dash-tm-2">
								<PieChart />
							</div>
							<div className="col s3 m3 dash-tm-2">
								<PieChart />
							</div>

							<div className="col s3 m3 dash-tm-2">
								{this.props.locations.map(location => (
									<FacilityLocation location={location} />
								))}
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
		locations: state.facilities.facilityLocations,
		facilities: state.facilities
	}
}
export default connect(mapStateToProps, {
	fetchFacilityNpids,
	fetchLocation
})(ChartHome)
