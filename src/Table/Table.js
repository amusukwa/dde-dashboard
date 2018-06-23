import React, { Component } from 'react'
import ChartContainer from '../common/chartContainer'
import {
	fetchTotalIds,
	fetchFacilityNpids,
	fetchLocation
} from '../actions/index'
import { connect } from 'react-redux'

class Table extends Component {
	async componentDidMount() {
		await this.props.fetchLocation()
	}

	render() {
		const tableDefinition = (
			<table className="striped">
				<thead>
					<tr>
						<th>Facility Name</th>
						<th>Item Name</th>
						<th>Item Price</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
				</tbody>
			</table>
		)
		return (
			<div>
				<ChartContainer title="List of Facilities" chart={tableDefinition} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		facilities: state.facilities,
		facilityLocation: state.facilities.facilityLocation
	}
}

const mapDispatchToProps = {
	fetchTotalIds,
	fetchFacilityNpids,
	fetchLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
