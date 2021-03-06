//@flow
import React from 'react'
import { connect } from 'react-redux'
import { fetchTotalIds, fetchFacilityNpids } from '../actions/index'
import ChartContainer from './chartContainer'
import { Card, CardTitle } from 'react-materialize'

type Props = {
	fetchFacilityNpids: Function,
	fetchTotalIds: Function,
	fetchLocation: Function,
	facilities: Array<any>,
	facilityTotals: Array<any>,
	location: Array<any>,
	doc_id: string,
	name: string
}

class FacilityLocation extends React.Component<Props> {
	async componentWillMount() {
		await this.props.fetchTotalIds(this.props.location.doc_id)
		await this.props.fetchFacilityNpids(this.props.location.doc_id)
	}
	render() {
		return (
			<div className="">
				<div className="mfl-p-2 location-chart-container ">
					{this.props.location.name}
					{':'} {this.props.facilities.totalIds[this.props.location.doc_id]}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		facilities: state.facilities,
		facilityTotals: state.facilities.facilityIds
	}
}

const mapDispatchToProps = {
	fetchTotalIds,
	fetchFacilityNpids
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityLocation)
