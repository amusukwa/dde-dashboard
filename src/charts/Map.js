// @flow
import React from 'react'
import { compose, withProps } from 'recompose'
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps'
import Locations from '../Locations'
const locations = JSON.stringify(Locations)
console.log(locations)

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
		{props.isMarkerShown && (
			<Marker position={{ lat: -13.96816, lng: 33.74129 }} />
		)}
		<Marker
			position={{ lat: -13.96816, lng: 33.74129 }}
			title="ABC Community, Lilongwe"
		/>
		<Marker
			position={{ lat: -13.787, lng: 34.46235 }}
			title="Admarc Clinic,Salima"
		/>
		<Marker
			position={{ lat: -13.95473, lng: 33.7793 }}
			title="Adventist Health Clinic,Lilongwe"
		/>

		<Marker
			position={{ lat: -13.8898, lng: 33.80487 }}
			title="Africa leaf Clinic,Lilongwe"
		/>
		<Marker position={{ lat: -15.38361, lng: 35.3223 }} title="AHI" />
		<Marker position={{ lat: -15.38876, lng: 35.38508 }} title="Airwing" />
		<Marker
			position={{ lat: -13.96162, lng: 33.69679 }}
			title="Airwing Health"
		/>
		<Marker
			position={{ lat: -13.96162, lng: 33.69679 }}
			title="Akasale Private Wing"
		/>
		<Marker
			position={{ lat: -13.38789, lng: 35.11493 }}
			title="Akasale Private "
		/>
		<Marker
			position={{ lat: -13.38789, lng: 34.24292 }}
			title="Alinafe Private "
		/>
		<Marker position={{ lat: -14.79853, lng: 35.44326 }} title="Alinafe " />
	</GoogleMap>
))

export default Map
