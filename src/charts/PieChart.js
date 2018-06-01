import React, { Component } from 'react'
import { Card, CardTitle } from 'react-materialize'
import ReactDOM from 'react-dom'
//@flow
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

class PieChart extends Component<> {
	componentDidMount() {}
	render() {
		const chartDefinition = (
			<VictoryPie
				colorScale={['green', 'black', 'navy', 'cyan', 'navy']}
				data={[
					{ x: 'A IDs', y: 35 },
					{ x: 'UA IDS', y: 40 },
					{ x: ' IDS', y: 55 }
				]}
				width={440}
				height={390}
			/>
		)

		return <ChartContainer title="Pie Chart" chart={chartDefinition} />
	}
}

const mapStateToProps = state => ({
	facilities: state.facilities
})

export default connect(mapStateToProps, {
	fetchLocation
})(PieChart)
