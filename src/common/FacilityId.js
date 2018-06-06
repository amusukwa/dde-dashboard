import React, { Component } from 'react'
import ChartContainer from '../common/chartContainer'
import { checkCredentials, fetchTotalIds, fetchLocation } from '../actions'
import { connect } from 'react-redux'

class FacilityIds extends Component {
	componentDidMount() {
		this.props.fetchLocation()
		// const loc_ids = this.props.facilityLocations.map(fl => fl.doc_id)
		// this.props.facilityLocations.map(fl => console.log(fl))
		// const total = this.props.fetchTotalIds(loc_ids[1])
		//console.log(total)
	}
	render() {
		const tableDefinition = this.props.facilityLocations.map(fl => (
			<ul className="striped dash-table">
				<li>{fl.name}</li>
			</ul>
		))
		return (
			<div>
				<ChartContainer title="List of Facilities" chart={tableDefinition} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loginResponse: state.auth.loginResponse,
	totalNpids: state.totals.totalNpids,
	facilityLocations: state.facilities.facilityLocations
})

export default connect(mapStateToProps, {
	checkCredentials,
	fetchTotalIds,
	fetchLocation
})(FacilityIds)
