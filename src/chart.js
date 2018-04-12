import React from 'react'
import ReactDOM from 'react-dom'
import isEqual from 'lodash/isEqual'

const dataKeys = {
  'line': 'data',
  'radar': 'data',
  'bar': 'data',
  'horizontalBar': 'data',
  'bubble': 'data'
}

var updatePoints = function(nextProps, chart, dataKey) {
  var name = chart.config.type
  var nextProps = nextProps

  if (name === 'polarArea' || name === 'pie' || name === 'doughnut') {
    nextProps.data.datasets.forEach(function(segment, segmentIndex) {
      if (!chart.data.datasets[segmentIndex]) {
        chart.data.labels.push(nextProps.data.labels[segmentIndex])
        chart.data.datasets.forEach((dataset) => {
          dataset.data.push(segment)
        })
      } else {
        Object.keys(segment).forEach(function (key) {
          chart.data.datasets[segmentIndex][key] = segment[key]
        })
      }
    })

    while(nextProps.data.datasets.length < chart.data.datasets.length) {
      removeData(chart)
    }
  } else if (name === "radar") {
    removeData(chart)
    nextProps.data.datasets.forEach(function(set, setIndex) {
      set.data.forEach(function(val, pointIndex) {
        if (typeof(chart.data.datasets[setIndex][dataKey][pointIndex]) == "undefined") {
          addData(nextProps, chart, setIndex)
        } else {
          chart.data.datasets[setIndex][dataKey][pointIndex] = val
        }
      })
    })
  } else if (name === "bubble") {
    while (chart.data.datasets.length > nextProps.data.datasets.length) {
      chart.data.datasets.pop()
    }
    nextProps.data.datasets.forEach(function(set, setIndex) {
      if (typeof(chart.data.datasets[setIndex]) == "undefined") {
        chart.data.datasets.push(nextProps.data.datasets[setIndex])
      } else {
        chart.data.datasets[setIndex][dataKey] = set.data
      }
    })
  } else if (name === "scatter"){
    if (chart.data.datasets.length > nextProps.data.datasets.length) {
      chart.data.datasets.pop()
    }
    nextProps.data.datasets.forEach(function(set, setIndex){
      if (typeof(chart.data.datasets[setIndex]) == "undefined") {
        chart.data.datasets.push(nextProps.data.datasets[setIndex])
      } else {
        chart.data.datasets[setIndex] = nextProps.data.datasets[setIndex]
      }
    })
  }
  else {
    while (chart.data.labels.length > nextProps.data.labels.length) {
      removeData(chart)
    }
    nextProps.data.datasets.forEach(function(set, setIndex) {
      set.data.forEach(function(val, pointIndex) {
        if (typeof(chart.data.datasets[setIndex][dataKey][pointIndex]) == "undefined") {
          addData(nextProps, chart, setIndex)
        } else {
          chart.data.datasets[setIndex][dataKey][pointIndex] = val
        }
      })
    })
  }
}

function addData(nextProps, chart, setIndex) {
  chart.data.labels.push(nextProps.data.labels[setIndex])
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(nextProps.data)
  })
}

function removeData(chart) {
  chart.data.labels.pop()
  chart.data.datasets.forEach((dataset) => {
    dataset.data.pop();
  })
}

export default class Chart extends React.Component {
  state = {}
  
  constructor(props) {
    super(props)
    this.canvassRef = React.createRef()
  }

  componentDidMount() {
    this.initializeChart(this.props)
    this.props.getChart && this.props.getChart(this.state.chart)
    this.props.getCanvas && this.props.getCanvas(this.canvassRef)
  }

  componentWillUnmount() {
    var chart = this.state.chart
    chart.destroy()
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { 
      redraw,
      type,
      options,
      height,
      width,
      data,
      plugins
    } = this.props
    if (!isEqual(data.datasets, nextProps.data.datasets) || 
        nextProps.redraw == true || 
        type != nextProps.type || 
        height != nextProps.height || 
        width != nextProps.width || 
        !isEqual(options, nextProps.options) ||
        !isEqual(plugins, nextProps.plugins)) {
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
        return false
      }
    }
  }

  handleOnClick = (event) => {
    const {
      getDatasetAtEvent,
      getElementAtEvent,
      getElementsAtEvent,
    } = this.props
    getDatasetAtEvent && getDatasetAtEvent(this.state.chart.getDatasetAtEvent(event), event)
    getElementAtEvent && getElementAtEvent(this.state.chart.getElementAtEvent(event), event)
    getElementsAtEvent && getElementsAtEvent(this.state.chart.getElementsAtEvent(event), event)
  }


  render() {
    const excludedProps = [
      'data', 
      'options', 
      'redraw'
    ]
    var _props = {}
    for (var name in this.props) {
      if (this.props.hasOwnProperty(name)) {
        if (excludedProps.indexOf(name) === -1) {
          _props[name] = this.props[name]
        }
      }
    }
    var canvasStyle = {
      width: this.props.width ? this.props.width : "auto",
      height: this.props.height ? this.props.height : "auto"
    }
    return (
      <div>
        <canvas ref={this.props.ref ? this.props.ref : this.canvassRef} style={canvasStyle} onClick={this.handleOnClick} />
      </div>
    )
  }

  initializeChart(nextProps) {
    var Chart = require('chart.js')
    var el = ReactDOM.findDOMNode(this.canvassRef.current)
    var ctx = el.getContext("2d")
    var chart = new Chart(ctx, {type: nextProps.type, data: nextProps.data, options: nextProps.options || {}, plugins: nextProps.plugins || {}})
    this.state.chart = chart;
  }
}