// import React, { Component } from 'react'
// import { Card, CardTitle } from 'react-materialize'
// import {
// 	VictoryLine,
// 	VictoryChart,
// 	VictoryAxis,
// 	VictoryTheme,
// 	VictoryCursorContainer
// } from 'victory'
// import { connect } from 'react-redux'
// import ReactDOM from 'react-dom'
// import {
// 	ComposableMap,
// 	ZoomableGroup,
// 	Geographies,
// 	Geography
// } from 'react-simple-maps'
// import { fetchLocation } from '../actions'

// const wrapperStyles = {
// 	// width: '100%',
// 	// height: -600,
// 	// margin: -1600
// 	width: '2000px',
// 	height: '1000px'
// }

// class Map extends Component {
// 	componentWillMount() {
// 		this.props.fetchLocation()
// 		console.log('hello')
// 	}
// 	constructor() {
// 		super()

// 		this.state = {
// 			zoom: 6
// 		}

// 		this.handleZoomIn = this.handleZoomIn.bind(this)
// 		this.handleZoomOut = this.handleZoomOut.bind(this)
// 	}
// 	handleZoomIn() {
// 		this.setState({
// 			zoom: this.state.zoom * 2
// 		})
// 	}
// 	handleZoomOut() {
// 		this.setState({
// 			zoom: this.state.zoom / 2
// 		})
// 	}
// 	componentDidMount() {}
// 	render() {
// 		return (
// 			<div>
// 				<ComposableMap
// 					style={{
// 						width: '800px',
// 						height: '1200px'
// 						//margin: -100
// 					}}
// 					projectionConfig={{ scale: 100 }}
// 					projection="mercator"
// 					//width="0px"
// 					//height={100}
// 				>
// 					<ZoomableGroup zoom={this.state.zoom}>
// 						<Geographies geography={'topjson/mw-map.json'}>
// 							{(geographies, projection) =>
// 								geographies.map(geography => (
// 									<Geography
// 										style={{
// 											default: { fill: '#6666' },
// 											hover: { fill: '#999' },
// 											pressed: { fill: '#000' },
// 											width: '100%'
// 										}}
// 										key={geography.id}
// 										geography={geography}
// 										projection={projection}
// 									/>
// 								))
// 							}
// 						</Geographies>
// 					</ZoomableGroup>
// 				</ComposableMap>
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = state => ({
// 	facilities: state.facilities.facilityLocation
// })
// export default connect(mapStateToProps, {
// 	fetchLocation
// })(Map)

import React from 'react'
import { compose, withProps } from 'recompose'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps'

const Map = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyB-MrJ0WnBYzAA1A2SwzyCX4UTnDi-fjw8&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `720px` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: -13.9626121, lng: 33.7741195 }}
	>
		{props.isMarkerShown && (
			<Marker position={{ lat: -13.9626121, lng: 33.7741195 }} />
		)}
	</GoogleMap>
))

export default Map
