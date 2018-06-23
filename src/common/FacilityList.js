//@flow
import React from 'react'
import { connect } from 'react-redux'
import { fetchLocation } from '../actions/index'
import ChartContainer from './chartContainer'
import { Card, CardTitle } from 'react-materialize'

type Props = {
	fetchLocation: Function,
	facilities: Array<any>,
	location: Array<Location>,
	doc_id: string,
	name: string
}

class FacilityList extends React.Component<Props> {
	async componentWillMount() {
		await this.props.fetchLocation()
	}
	render() {
		return (
			<div className="">
				<div className="mfl-p-2 location-chart-container ">
					{this.props.location.name}
					{':'}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		facilities: state.facilities
	}
}

const mapDispatchToProps = {
	fetchTotalIds,
	fetchFacilityNpids,
	fetchLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityList)
