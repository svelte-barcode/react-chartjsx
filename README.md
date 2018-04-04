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