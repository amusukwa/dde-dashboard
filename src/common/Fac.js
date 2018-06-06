import React, { Component } from 'react'
import { fetchTotalIds } from '../actions/index'
import { connect } from 'react-redux'

class Fac extends Component {
	componentDidMount() {
		this.props.fetchTotalIds(this.props.facilityLocation.doc_id)
	}

	render() {
		return (
			<li>
				{this.props.facilityLocation.name}{' '}
				{this.props.counts[this.props.facilityLocation.doc_id]}{' '}
			</li>
		)
	}
}

const mapStateToProps = state => ({
	counts: state.facilities.counts
})

export default connect(mapStateToProps, {
	fetchTotalIds
})(Fac)
