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
import ChartContainer from './common/chartContainer'

class App extends Component {
	componentWillMount() {
		this.props.fetchLocation()
		console.log('hello')
	}
	render() {
		return (
			<div>
				<NavBar />
				<div className="row mfl-tm-5">
					<div className="col m3 l3">
						<Map />
					</div>
					<div className="col m9 l9 mfl-tm-5">
						<div className="row">
							<div className="col m4 l4 mfl-tm-5 ">
								<LineGraph />
							</div>
							<div className="col m4 l4 mfl-tm-10 ">
								<LineGraph />
							</div>
							<div className="col m4 l4 mfl-tm-10 ">
								<LineGraph />
							</div>
						</div>
						<div className="row">
							<div className="col m3 l4 mfl-tm-5 ">
								<LineGraph />
							</div>
							<div className="col m3 l4 mfl-tm-10 ">
								<LineGraph />
							</div>
							<div className="col m3 l4 mfl-tm-10 ">
								<PieChart />
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col m12 l12 mfl-tm-10 ">
								<Table />
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
