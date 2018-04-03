import React from 'react'

import Chart from './chart'

export class Line extends React.Component {
  render() {
    var chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    var chartOptions = {
      bezierCurve: false
    }
    return (
      <div><Chart type={"Line"} data={chartData} options={chartOptions} width="600" height="250" /></div>
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

