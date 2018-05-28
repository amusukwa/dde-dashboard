import React, { Component } from 'react'
import { Card, CardTitle } from 'react-materialize'
import {
	VictoryLine,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryCursorContainer
} from 'victory'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography
} from 'react-simple-maps'
import { fetchLocation } from '../actions'

const wrapperStyles = {
	// width: '100%',
	// height: -600,
	// margin: -1600
	width: '2000px',
	height: '1000px'
}

class Map extends Component {
	componentWillMount() {
		this.props.fetchLocation()
	}
	constructor() {
		super()

		this.state = {
			zoom: 6
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
			<div style={wrapperStyles}>
				<ComposableMap
					style={{
						width: '100%',
						height: 100,
						margin: -100
					}}
					projectionConfig={{ scale: 140 }}
					projection="mercator"
					//width={400}
					//height={400}
				>
					<ZoomableGroup zoom={this.state.zoom}>
						<Geographies geography={'topjson/mw-map.json'}>
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
		)
	}
}

const mapStateToProps = state => ({
	facilities: state.facilities.facilityLocation
})
export default connect(mapStateToProps, {
	fetchLocation
})(Map)
