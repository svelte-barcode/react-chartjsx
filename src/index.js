import React from 'react'
import Chart from './chart'

export class Line extends React.Component {
  render() {
    return (
      <Chart type="line" {...this.props} />
    )
  }
}

export class Bar extends React.Component {
  render() {
    return (
      <Chart type="bar" {...this.props} />
    )
  }
}

export class Radar extends React.Component {
  render() {
    return (
      <Chart type="radar" {...this.props} />
    )
  }
}

export class Pie extends React.Component {
  render() {
    return (
      <Chart type="pie" {...this.props} />
    )
  }
}

export class Doughnut extends React.Component {
  render() {
    return (
      <Chart type="doughnut" {...this.props} />
    )
  }
}

export class PolarArea extends React.Component {
  render() {
    return (
      <Chart type="polarArea" {...this.props} />
    )
  }
}

export class HorizontalBar extends React.Component {
  render() {
    return (
      <Chart type="horizontalBar" {...this.props} />
    )
  }
}

export class Bubble extends React.Component {
  render() {
    return (
      <Chart type="bubble" {...this.props} />
    )
  }
}

export class Scatter extends React.Component {
  render() {
    return (
      <Chart type="scatter" {...this.props} />
    )
  }
}

