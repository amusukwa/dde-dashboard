//@flow
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import banner from '../banner.png'

type State = {
	username: string,
	password: string
}
type Props = {
	checkCredentials: Function,
	getUserDetails: Function
}
class Banner extends Component<State, Props> {
	state = {
		email: null,
		password: null
	}

	render() {
		return (
			<div className="">
				<div className="container mfl-dash-container">
					<img src={banner} className="mfl-abs mfl-banner-img" />
					<div className="mfl-abs mfl-parallax">
						<h3>How to Get in Touch</h3>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		loginResponse: state.authReducer
	}
}

export default connect(mapStateToProps, {})(Banner)
