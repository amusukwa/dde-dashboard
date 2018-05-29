import React, { Component } from 'react'
import NavBar from './Nav/NavBar'
import LineGraph from './charts/LineGraph'
import Table from './Table/Table'
import Map from './charts/Map'
import PieChart from './charts/PieChart'
import { SVGMap, Taiwan } from 'react-svg-map'
import 'react-svg-map/lib/index.css'
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography
} from 'react-simple-maps'
import { fetchLocation } from './actions'
import { connect } from 'react-redux'
import DashHome from './charts/DashHome'

class App extends Component {
	componentWillMount() {
		this.props.fetchLocation()
		console.log('hello')
	}
	render() {
		return (
			<div>
				<NavBar />
				<div />
				<div className="row mfl-tm-2">
					<div className="col s3 m3">
						<Map />
					</div>
					<div className="col s9 m9">
						<div className="row">
							<div className="col s3 m3 mfl-tm-2">
								<LineGraph />
							</div>
							<div className="col s3 m3 mfl-tm-2">
								<LineGraph />
							</div>
							<div className="col s3 m3 mfl-tm-2">
								<LineGraph />
							</div>
							<div className="col s3 m3 mfl-tm-2">
								<LineGraph />
							</div>
						</div>
						<div className="row">
							<div className="col s6 m6 mfl-tm-2">
								<Table />
							</div>
							<div className="col s4 m3 mfl-tm-2">
								<PieChart />
							</div>
						</div>
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
})(App)
