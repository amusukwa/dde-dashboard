import React, { Component } from "react"
import { Card, CardTitle } from "react-materialize"
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryCursorContainer
} from "victory"
import { fetchData } from "../actions"
import { connect } from "react-redux"
import ReactDOM from "react-dom"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps"

class Map extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="">
          <div className="col mfl-tm-5 ">
            <ComposableMap>
              <ZoomableGroup>
                <Geographies geography={"../topjson/gadm36_MW1_O.json"}>
                  {(geographies, projection) =>
                    geographies.map(geography => (
                      <Geography
                        key={geography.id}
                        geography={geography}
                        projection={projection}
                      />
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   facilities: state.facilities,
// });

export default Map
