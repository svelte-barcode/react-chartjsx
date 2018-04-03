import React from 'react'

import Chart from './chart'

export class Line extends React.Component {
  state = {
    chartData: {
      datasets: [
        {
          data: [10, 20, 30]
        },
        {
          data: [40, 50, 60]
        }
      ],

      labels: [
        'Red',
        'Yellow',
        'Blue'
      ]
    }
  }

  test() {
    this.setState(
      {
        chartData: {
          datasets: [
        {
          data: [10, 20, 30]
        },
        {
          data: [40, 50, 90]
        }
      ],

          labels: [
            'Red',
            'Yellow',
            'Blue'
          ]
        }
      }
    )
  }

  render() {
    var chartOptions = {
      segmentStrokeColor: "#000000"
    }

    return (
      <div>
        <Chart type={"line"} data={this.state.chartData} options={chartOptions} width="600" height="250" />
        <button onClick={this.test.bind(this)}>Hello</button>
      </div>
    )
  }
}

export class Bar extends React.Component {
  render() {
    return (
      <div>Bar!</div>
    )
  }
}

export class Radar extends React.Component {
  render() {
    return (
      <div>Radar!</div>
    )
  }
}

export class Doughnut extends React.Component {
  render() {
    return (
      <div>Doughnut!</div>
    )
  }
}

export class PolarArea extends React.Component {
  render() {
    return (
      <div>PolarArea!</div>
    )
  }
}

export class Bubble extends React.Component {
  render() {
    return (
      <div>Bubble!</div>
    )
  }
}

