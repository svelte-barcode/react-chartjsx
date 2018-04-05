![react-chartjsx](https://github.com/codefacebook/react-chartjsx/blob/master/images/react-chartjsx.png)

# react-chartjsx

![react-chartjsx](https://github.com/codefacebook/react-chartjsx/blob/master/images/chart.png)

The Official React [chart.js](http://www.chartjs.org) components. [![version](https://img.shields.io/npm/v/react-chartjsx.svg?style=flat-square)](https://www.npmjs.com/package/react-chartjsx) [![downloads](https://img.shields.io/npm/dm/react-chartjsx.svg?style=flat-square)](https://www.npmjs.com/package/react-chartjsx) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT).

We'd love to have your helping hand on contributions to react-chartjsx by forking and sending a pull request!

## Installation

```
npm install react-chartjsx chart.js --save
```

## Usage

```
import { Bar, Line } from 'react-chartjsx'

<Bar data={this.state.barChartData} 
     options={chartOptions} 
     width={800} 
     height={400} />

<Line data={this.state.lineChartData} 
      options={chartOptions} 
      width={400} 
      height={400} />
```

### Properties

* data: PropTypes.object.isRequired
* width: PropTypes.number
* height: PropTypes.number
* options: PropTypes.object
* redraw: PropTypes.bool

### Custom size

To custom size you need to set `responsive` to `false`.

```
const chartOptions = {
  responsive: false
}

<Bar data={this.state.chartDataBar} 
     options={chartOptions} 
     width={800} 
     height={400} />
```

## Sample

### Bar chart

![Bar chart](https://github.com/codefacebook/react-chartjsx/blob/master/images/bar-chart.png)

```
import { Bar } from 'react-chartjsx'

export default class App extends Component {
  state = {
    barChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div>
        <Bar data={this.state.barChartData} 
             options={chartOptions} 
             width={800} 
             height={400} />
      </div>
    )
  }
}
```

### Line chart

![Line chart](https://github.com/codefacebook/react-chartjsx/blob/master/images/line-chart.png)

```
import { Line } from 'react-chartjsx'

export default class App extends Component {
  state = {
    lineChartData: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "North America",
          borderColor: "#c45850",
    
          fill: false
        }
      ]
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div>
        <Line data={this.state.lineChartData} 
              options={chartOptions} 
              width={800} 
              height={400} />
      </div>
    )
  }
}
```

### Pie chart

![Pie chart](https://github.com/codefacebook/react-chartjsx/blob/master/images/pie-chart.png)

```
import { Pie } from 'react-chartjsx'

export default class App extends Component {
  state = {
    pieChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div>
        <Pie data={this.state.pieChartData} 
             options={chartOptions} 
             width={800} 
             height={400} />
      </div>
    )
  }
}
```

### Radar chart

![Radar chart](https://github.com/codefacebook/react-chartjsx/blob/master/images/radar-chart.png)

```
import { Radar } from 'react-chartjsx'

export default class App extends Component {
  state = {
    radarChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div>
        <Radar data={this.state.radarChartData} 
               options={chartOptions} 
               width={800} 
               height={400} />
      </div>
    )
  }
}
```

### Polar area chart

![Polar area chart](https://github.com/codefacebook/react-chartjsx/blob/master/images/polar-area-chart.png)

```
import { PolarArea } from 'react-chartjsx'

export default class App extends Component {
  state = {
    polarAreaChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div>
        <PolarArea data={this.state.polarAreaChartData} 
                   options={chartOptions} 
                   width={800} 
                   height={400} />
      </div>
    )
  }
}
```

### Doughnut chart

![Doughnut chart](https://github.com/codefacebook/react-chartjsx/blob/master/images/doughnut-chart.png)

```
import { Doughnut } from 'react-chartjsx'

export default class App extends Component {
  state = {
    doughnutChartData: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div>
        <Doughnut data={this.state.doughnutChartData} 
                  options={chartOptions} 
                  width={800} 
                  height={400} />
      </div>
    )
  }
}
```

### Grouped bars chart

![Grouped bars chart](https://github.com/codefacebook/react-chartjsx/blob/master/images/grouped-bar-chart.png)

```
import { Bar } from 'react-chartjsx'

export default class App extends Component {
  state = {
    groupedBarsChartData: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div>
        <Bar data={this.state.groupedBarsChartData} 
             options={chartOptions} 
             width={800} 
             height={400} />
      </div>
    )
  }
}
```

### Mixed charts

![Mixed charts](https://github.com/codefacebook/react-chartjsx/blob/master/images/mixed-chart.png)

```
import { Bar } from 'react-chartjsx'

export default class App extends Component {
  state = {
    mixedChartsData: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [{
          label: "Europe",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Africa",
          type: "line",
          borderColor: "#3e95cd",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const chartOptions = {
      responsive: false
    }

    return (
      <div>
        <Bar data={this.state.mixedChartsData} 
             options={chartOptions} 
             width={800} 
             height={400} />
      </div>
    )
  }
}
```

## Contributing

We'd love to have your helping hand on contributions to react-chartjsx by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

## License

MIT License

Copyright (c) 2018 [codefacebook](https://github.com/codefacebook), [Bunlong](https://github.com/Bunlong)
