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

To custom size you need to set `responsive` to `false`

```
const chartOptions = {
  responsive: false
}

<Bar data={this.state.chartDataBar} 
     options={chartOptions} 
     width={800} 
     height={400} />
```
