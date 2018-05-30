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

// import React, { PropTypes } from 'react'

// import GoogleMap from 'react-google-map'
// import GoogleMapLoader from 'react-google-maps-loader'

// import iconMarker from '../iconMarker.svg'
// import iconMarkerHover from '../iconMarkerHover.svg'

// const MY_API_KEY = 'AIzaSyDwsdjfskhdbfjsdjbfksiTgnoriOAoUOgsUqOs10J0' // fake

// const Map = ({ googleMaps }) => (
// 	// GoogleMap component has a 100% height style.
// 	// You have to set the DOM parent height.
// 	// So you can perfectly handle responsive with differents heights.
// 	<div className={styles.map}>
// 		<GoogleMap
// 			googleMaps={googleMaps}
// 			// You can add and remove coordinates on the fly.
// 			// The map will rerender new markers and remove the old ones.
// 			coordinates={[
// 				{
// 					title: 'Toulouse',
// 					position: {
// 						lat: 43.604363,
// 						lng: 1.443363
// 					},
// 					onLoaded: (googleMaps, map, marker) => {
// 						// Set Marker animation
// 						marker.setAnimation(googleMaps.Animation.BOUNCE)

// 						// Define Marker InfoWindow
// 						const infoWindow = new googleMaps.InfoWindow({
// 							content: `
// 			   <div>
// 				 <h3>Toulouse<h3>
// 				 <div>
// 				   Toulouse is the capital city of the southwestern
// 				   French department of Haute-Garonne,
// 				   as well as of the Occitanie region.
// 				 </div>
// 			   </div>
// 			 `
// 						})

// 						// Open InfoWindow when Marker will be clicked
// 						googleMaps.event.addListener(marker, 'click', () => {
// 							infoWindow.open(map, marker)
// 						})

// 						// Change icon when Marker will be hovered
// 						googleMaps.event.addListener(marker, 'mouseover', () => {
// 							marker.setIcon(iconMarkerHover)
// 						})

// 						googleMaps.event.addListener(marker, 'mouseout', () => {
// 							marker.setIcon(iconMarker)
// 						})

// 						// Open InfoWindow directly
// 						infoWindow.open(map, marker)
// 					}
// 				}
// 			]}
// 			center={{ lat: 43.604363, lng: 1.443363 }}
// 			zoom={8}
// 			onLoaded={(googleMaps, map) => {
// 				map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
// 			}}
// 		/>
// 	</div>
// )

// Map.propTypes = {
// 	googleMaps: PropTypes.object.isRequired
// }

// export default GoogleMapLoader(Map, {
// 	libraries: ['places'],
// 	key: MY_API_KEY
// })
