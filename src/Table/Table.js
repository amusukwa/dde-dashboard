import React, { Component } from 'react'
import ChartContainer from '../common/chartContainer'

class Table extends Component {
	render() {
		const tableDefinition = (
			<table className="striped">
				<thead>
					<tr>
						<th>Name</th>
						<th>Item Name</th>
						<th>Item Price</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Alvin</td>
						<td>Eclair</td>
						<td>$0.87</td>
					</tr>
					<tr>
						<td>Alan</td>
						<td>Jellybean</td>
						<td>$3.76</td>
					</tr>
					<tr>
						<td>Jonathan</td>
						<td>Lollipop</td>
						<td>$7.00</td>
					</tr>
				</tbody>
			</table>
		)
		return (
			<div>
				<ChartContainer title="List of Facilities" chart={tableDefinition} />
			</div>
		)
	}
}

export default Table
