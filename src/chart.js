import React from 'react'
import ReactDOM from 'react-dom'

const dataKeys = {
    'Line': 'points',
    'Radar': 'points',
    'Bar': 'bars'
}

const addData = function(nextProps, chart, setIndex, pointIndex) {
  var values = []
  nextProps.data.datasets.forEach(function(set) {
    values.push(set.data[pointIndex])
  })
  chart.addData(values, nextProps.data.labels[setIndex])
}

const updatePoints = function(nextProps, chart, dataKey) {
  var name = chart.name

  if (name === 'PolarArea' || name === 'Pie' || name === 'Doughnut') {
    nextProps.data.forEach(function(segment, segmentIndex) {
      if (!chart.segments[segmentIndex]) {
        chart.addData(segment)
      } else {
        Object.keys(segment).forEach(function (key) {
          chart.segments[segmentIndex][key] = segment[key]
        })
      }
    })

    while(nextProps.data.length < chart.segments.length) {
      chart.removeData()
    }
  } else if (name === "Radar") {
    chart.removeData()
    nextProps.data.datasets.forEach(function(set, setIndex) {
      set.data.forEach(function(val, pointIndex) {
        if (typeof(chart.datasets[setIndex][dataKey][pointIndex]) == "undefined") {
          addData(nextProps, chart, setIndex, pointIndex)
        } else {
          chart.datasets[setIndex][dataKey][pointIndex].value = val
        }
      })
    })
  } else {
    while (chart.scale.xLabels.length > nextProps.data.labels.length) {
      chart.removeData()
    }
    nextProps.data.datasets.forEach(function(set, setIndex) {
      set.data.forEach(function(val, pointIndex) {
        if (typeof(chart.datasets[setIndex][dataKey][pointIndex]) == "undefined") {
          addData(nextProps, chart, setIndex, pointIndex)
        } else {
          chart.datasets[setIndex][dataKey][pointIndex].value = val
        }
      })
    })
  }
};

export default class Chart extends React.Component {
  state = {}
  
  constructor(props) {
    super(props)
    this.canvassRef = React.createRef()
  }

  componentDidMount = function() {
    this.initializeChart(this.props);
  }

  render() {
    const excludedProps = ['data', 'options', 'redraw']
    var _props = {}
    for (var name in this.props) {
      if (this.props.hasOwnProperty(name)) {
        if (excludedProps.indexOf(name) === -1) {
            _props[name] = this.props[name];
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
    var chart = new Chart(ctx, {type: 'line',data: nextProps.data, options: nextProps.options || {}});
  }
}