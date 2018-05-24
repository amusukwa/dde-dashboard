import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import ReactDOM from 'react-dom';
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryCursorContainer,
} from 'victory';
import { fetchData } from '../actions';
import { connect } from 'react-redux';

class LineGraph extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="">
          <div className="col mfl-tm-5 ">
            <VictoryChart theme={VictoryTheme.material}>
              <VictoryLine
                style={{
									labels: { fontSize: 12 },
									parent: { border: '2px solid #ccc' },
								}}
                padding={{ top: 40, bottom: 60 }}
                data={[
									{ x: 1, y: 2 },
									{ x: 2, y: 3 },
									{ x: 3, y: 5 },
									{ x: 4, y: 4 },
									{ x: 5, y: 7 },
								]}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  facilities: state.facilities,
});

export default connect(mapStateToProps, {
  fetchData,
})(LineGraph);
