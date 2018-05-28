import React, { Component } from 'react'
import { Card, CardTitle } from 'react-materialize'
import ReactDOM from 'react-dom'
import {
	VictoryLine,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryPie
} from 'victory'
import { fetchLocation } from '../actions'
import { connect } from 'react-redux'
import ChartContainer from '../common/chartContainer'

class PieChart extends Component {
	componentDidMount() {}
	render() {
		const chartDefinition = (
			<VictoryPie
				colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
				data={[
					{ x: 'A IDs', y: 35 },
					{ x: 'UA IDS', y: 40 },
					{ x: ' IDS', y: 55 }
				]}
			/>
		)

		return <ChartContainer chart={chartDefinition} />
	}
}

const mapStateToProps = state => ({
	facilities: state.facilities
})

export default connect(mapStateToProps, {
	fetchLocation
})(PieChart)
