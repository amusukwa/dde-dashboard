import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

class Table extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
