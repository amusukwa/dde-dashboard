import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
	VictoryLine,
	VictoryChart,
	VictoryAxis,
	VictoryTheme,
	VictoryCursorContainer
} from 'victory'
import { fetchLocation } from '../actions'
import { connect } from 'react-redux'
import ChartContainer from '../common/chartContainer'

type Props = {
	data: Array<{ x: string, y: number }>
}

export default class LineGraph extends Component<Props> {
	componentDidMount() {}
	render() {
		const data = this.props
		const chartDefinition = (
			<VictoryChart theme={VictoryTheme.material}>
				<VictoryLine
					style={{
						labels: { fontSize: 12 },
						parent: { border: '2px solid #ccc' }
					}}
					padding={{ top: 40, bottom: 60 }}
					data={[
						{ x: 1, y: 2 },
						{ x: 2, y: 3 },
						{ x: 3, y: 5 },
						{ x: 4, y: 4 },
						{ x: 5, y: 7 }
					]}
				/>
			</VictoryChart>
		)
		return <ChartContainer chart={chartDefinition} />
	}
}

const mapStateToProps = state => ({
	facilities: state.facilities
})
