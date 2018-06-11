//@flow
import React from 'react'
import { connect } from 'react-redux'
import { fetchTotalIds, fetchFacilityNpids } from '../actions/index'
import ChartContainer from './chartContainer'
class FacilityLocation extends React.Component {
	async componentDidMount() {
		await this.props.fetchTotalIds(this.props.location.doc_id)
		//await this.props.fetchFacilitynpids(this.props.location.doc_id)
	}
	render() {
		return (
			<div className="">
				<div className="mfl-p-2 location-chart-container ">
					<a className="collection">{this.props.location.name}</a>
					{':'} {this.props.facilities.totalIds[this.props.location.doc_id]}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		facilities: state.facilities
	}
}

const mapDispatchToProps = {
	fetchTotalIds,
	fetchFacilityNpids
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityLocation)
