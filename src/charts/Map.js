import React, { Component } from 'react'
import { Card, CardTitle } from 'react-materialize'
import {
	VictoryLine,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryCursorContainer
} from 'victory'
import { fetchData } from '../actions'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography
} from 'react-simple-maps'

class Map extends Component {
	constructor() {
		super()

		this.state = {
			zoom: 5
		}

		this.handleZoomIn = this.handleZoomIn.bind(this)
		this.handleZoomOut = this.handleZoomOut.bind(this)
	}
	handleZoomIn() {
		this.setState({
			zoom: this.state.zoom * 2
		})
	}
	handleZoomOut() {
		this.setState({
			zoom: this.state.zoom / 2
		})
	}

	componentDidMount() {}
	render() {
		return (
			<div>
				<div className="map-ratio-container">
					<div className=" ">
						<ComposableMap
							style={{
								width: '500%',
								height: 3000,
								margin: -1800,
								top: 0,
								bottom: 100
							}}
						>
							<ZoomableGroup zoom={this.state.zoom}>
								<Geographies geography={'topjson/map.json'}>
									{(geographies, projection) =>
										geographies.map(geography => (
											<Geography
												style={{
													default: { fill: '#6666' },
													hover: { fill: '#999' },
													pressed: { fill: '#000' },
													width: '100%'
												}}
												key={geography.id}
												geography={geography}
												projection={projection}
											/>
										))
									}
								</Geographies>
							</ZoomableGroup>
						</ComposableMap>
					</div>
				</div>
			</div>
		)
	}
}

// const mapStateToProps = state => ({
//   facilities: state.facilities,
// });

export default Map
