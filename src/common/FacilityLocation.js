//@flow
import React from 'react'
import { connect } from 'react-redux'
import { fetchTotalIds, fetchFacilityNpids } from '../actions/index'
import ChartContainer from './chartContainer'
class FacilityLocation extends React.Component<> {
	async componentWillMount() {
		await this.props.fetchTotalIds(this.props.location.doc_id)
		await this.props.fetchFacilityNpids(this.props.location.doc_id)
		console.log(this.props.facilities.facilityIds)
	}
	render() {
		return (
			<div className="">
				<div className="mfl-p-2 location-chart-container ">
					<a className="collection">{this.props.location.name}</a>
					{':'} {this.props.facilities.totalIds[this.props.location.doc_id]}
					{this.props.facilities.totals}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		facilities: state.facilities,
		totals: state.facilities.facilityIds
	}
}

const mapDispatchToProps = {
	fetchTotalIds,
	fetchFacilityNpids
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityLocation)
