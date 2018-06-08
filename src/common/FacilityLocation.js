import React from 'react'
import { connect } from 'react-redux'
import { fetchTotalIds } from '../actions/index'
class FacilityLocation extends React.Component {
	componentWillMount() {
		this.props.fetchTotalIds(this.props.location.doc_id)
	}
	render() {
		return (
			<div>
				facility : {this.props.location.name} allocated_npids: ======={' '}
				{this.props.facilities.totalIds[this.props.location.doc_id]}
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		facilities: state.facilities
	}
}

const mapDispatchToProps = {
	fetchTotalIds
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityLocation)
