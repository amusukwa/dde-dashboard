//@flow
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { checkCredentials } from '../actions'
import { connect } from 'react-redux'
import banner from '../banner.png'
import { withRouter } from 'react-router-dom'
import { Switch, Route, Link } from 'react-router-dom'
import DashHome from '../charts/DashHome'

type State = {
	username: string,
	password: string,
	match: any,
	current: any
}
type Props = {
	checkCredentials: Function,
	getUserDetails: Function
}
class Login extends Component<State, Props> {
	state = {
		username: null,
		password: null
	}

	componentWillMount() {}

	loginCredentials = async () => {
		await this.props.checkCredentials(this.state.username, this.state.password)
		this.props.history.push('/DashHome')

		//  if (!this.props.loginResponse.isLoginFailed) {
		//  	await sessionStorage.setItem(
		//  		'token',
		//  		this.props.loginResponse.loginResponse.id
		// 	)
		//  }
	}

	render() {
		return (
			<div className="container">
				<div className="container mfl-dash-container mfl-ref dash-tm-2">
					<img src={banner} className="mfl-abs mfl-banner-img" />
					<div className="mfl-abs mfl-parallax">
						<div className="mfl-login-container green darken-2">
							<h4 className="white-text" />
							<div className="mfl-tm-2" />
							<div className="mfl-login-input-container">
								<div className="mfl-login-icon grey lighten-2 grey-text">
									<i className="material-icons">perm_identity</i>
								</div>
								<input
									onKeyUp={e =>
										this.setState({
											username: e.currentTarget.value
										})
									}
									type="text"
									className="mfl-login-input"
									placeholder="username"
								/>
							</div>
							<div className="dash-tm-5" />
							<div className="mfl-login-input-container">
								<div className="mfl-login-icon grey lighten-2 grey-text">
									<i className="material-icons">lock</i>
								</div>
								<input
									onKeyUp={e =>
										this.setState({
											password: e.currentTarget.value
										})
									}
									type="password"
									className="mfl-login-input"
									placeholder="Password"
								/>
							</div>
							<div className="dash-tm-5" />
							<a
								onClick={this.loginCredentials}
								className="btn-large black lighten-1"
							>
								Login
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loginResponse: state.auth.loginResponse
})

export default connect(mapStateToProps, { checkCredentials })(Login)
