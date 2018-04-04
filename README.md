![react-chartjsx](https://github.com/codefacebook/react-chartjsx/blob/master/images/react-chartjsx.png)

# react-chartjsx

![react-chartjsx](https://github.com/codefacebook/react-chartjsx/blob/master/images/chart.png)

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