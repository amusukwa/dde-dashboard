import React, { Component } from 'react'

import LineGraph from '../charts/LineGraph'
import Table from '../Table/Table'
import Map from '../Table/Table'
import PieChart from '../charts/PieChart'
import 'react-svg-map/lib/index.css'
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography
} from 'react-simple-maps'
import { fetchLocation } from '../actions'
import { connect } from 'react-redux'

class DashHome extends Component {
	componentWillMount() {
		this.props.fetchLocation()
		console.log('hello')
	}
	render() {
		return (
			<div className="mfl-page-wrapper">
				<div className="col m3 l3">
					<h5>hello</h5>
				</div>
				<div className="col m9 l9 mfl-tm-5">
					<div className="row">
						<div className="col m4 l4 mfl-tm-2 ">
							<LineGraph />
						</div>
						<div className="col m4 l4 mfl-tm-2 ">
							<LineGraph />
						</div>
						<div className="col m4 l4 mfl-tm-10 " />
					</div>
					<div className="row">
						<div className="col m3 l4 mfl-tm-5 " />
						<div className="col m3 l4 mfl-tm-10 " />
						<div className="col m3 l4 mfl-tm-10 " />
					</div>
					<br />
					<div className="row">
						<div className="col m12 l12 mfl-tm-10 " />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	facilities: state.facilities.facilityLocation
})
export default connect(mapStateToProps, {
	fetchLocation
})(DashHome)
