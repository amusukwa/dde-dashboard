import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
	VictoryLine,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryCursorContainer,
	VictoryLabel
} from 'victory'
import { fetchLocation } from '../actions'
import { connect } from 'react-redux'
import ChartContainer from '../common/chartContainer'

export default class LineGraph extends Component {
	componentDidMount() {}
	render() {
		const data = this.props
		const chartDefinition = (
			<VictoryChart theme={VictoryTheme.material}>
				<VictoryLine
					style={{
						data: { stroke: '#c43a31' },
						parent: { border: '1px solid #ccc' }
					}}
					data={[
						{ x: 1, y: 2 },
						{ x: 2, y: 3 },
						{ x: 3, y: 5 },
						{ x: 4, y: 4 },
						{ x: 5, y: 7 }
					]}
					interpolation="natural"
					categories={{ x: ['day', 'week', 'month'] }}
				/>
			</VictoryChart>
		)
		return <ChartContainer title="line graph" chart={chartDefinition} />
	}
}

const mapStateToProps = state => ({
	facilities: state.facilities
})
