import React from 'react'
import ReactDOM from 'react-dom'

const dataKeys = {
  'line': 'data',
  'radar': 'data',
  'bar': 'data'
}

var updatePoints = function(nextProps, chart, dataKey) {
  var name = chart.config.type
  var nextProps = nextProps

  if (name === 'polarArea' || name === 'pie' || name === 'doughnut') {
    nextProps.data.datasets.forEach(function(segment, segmentIndex) {
      if (!chart.data.datasets[segmentIndex]) {
        chart.data.labels.push(nextProps.data.labels[segmentIndex]);
        chart.data.datasets.forEach((dataset) => {
          dataset.data.push(segment);
        });
      } else {
        Object.keys(segment).forEach(function (key) {
          chart.data.datasets[segmentIndex][key] = segment[key]
        })
      }
    })

    while(nextProps.data.datasets.length < chart.data.datasets.length) {
      chart.data.labels.pop()
      chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
      })
    }
  } else if (name === "radar") {
    chart.data.labels.pop()
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    })
    nextProps.data.datasets.forEach(function(set, setIndex) {
      set.data.forEach(function(val, pointIndex) {
        if (typeof(chart.data.datasets[setIndex][dataKey][pointIndex]) == "undefined") {
          addData(nextProps, chart, setIndex, pointIndex)
        } else {
          chart.data.datasets[setIndex][dataKey][pointIndex] = val
        }
      })
    })
  } else {
    // chart.scales['x-axis-0'].ticks.length
    while (chart.data.labels.length > nextProps.data.labels.length) {
      chart.data.labels.pop()
      chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
      })
    }

    nextProps.data.datasets.forEach(function(set, setIndex) {
      set.data.forEach(function(val, pointIndex) {
        if (typeof(chart.data.datasets[setIndex][dataKey][pointIndex]) == "undefined") {
          addData(nextProps, chart, setIndex, pointIndex)
        } else {
          chart.data.datasets[setIndex][dataKey][pointIndex] = val
        }
      })
    })
  }
}

function addData(nextProps, chart, setIndex, pointIndex) {
  var values = []
  chart.data.labels.push(nextProps.data.labels[setIndex]);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(nextProps.data);
  });
}

export default class Chart extends React.Component {
  state = {}
  
  constructor(props) {
    super(props)
    this.canvassRef = React.createRef()
  }

  componentDidMount() {
    this.initializeChart(this.props)
  }

  componentWillUnmount() {
    var chart = this.state.chart
    chart.destroy()
  }

  componentWillReceiveProps(nextProps) {
    var chart = this.state.chart
    if (nextProps.redraw) {
      chart.destroy()
      this.initializeChart(nextProps)
    } else {
      var dataKey = nextProps.dataKey || dataKeys[chart.config.type]
      updatePoints(nextProps, chart, dataKey)
      if (chart.scales) {
        chart.config.data.labels = nextProps.data.labels
      }
      chart.update()
    }
  }

  render() {
    const excludedProps = ['data', 'options', 'redraw']
    var _props = {}
    for (var name in this.props) {
      if (this.props.hasOwnProperty(name)) {
        if (excludedProps.indexOf(name) === -1) {
          _props[name] = this.props[name]
        }
      }
    }
    return (
      <div>
        <canvas ref={this.canvassRef} {..._props} />
      </div>
    )
  }

  initializeChart(nextProps) {
    var Chart = require('chart.js')
    var el = ReactDOM.findDOMNode(this.canvassRef.current)
    var ctx = el.getContext("2d")
    var chart = new Chart(ctx, {type: nextProps.type, data: nextProps.data, options: nextProps.options || {}})
    this.state.chart = chart;
  }
}