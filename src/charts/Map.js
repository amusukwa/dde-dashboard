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

const wrapperStyles = {
	// width: '100%',
	// maxWidth: '900%'
	//margin: '0 auto',
	align: 'left'
}

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
			<div style={wrapperStyles}>
				<ComposableMap
					style={{
						width: '980%',
						height: 3500,
						margin: -1800
					}}
					center={[8.2, 46.8]}
					projectionConfig={{ scale: 130 }}
					projection="miller"
					//width={800}
					//height={800}
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
		)
	}
}

// const mapStateToProps = state => ({
//   facilities: state.facilities,
// });

export default Map
