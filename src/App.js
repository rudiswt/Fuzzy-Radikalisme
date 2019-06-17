import React from 'react';
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class App extends React.Component {
  state =  {
    x4par:[[0,0,1,2],[1,2,2,5],[1,2,2,3],[3,3.5,4,4]],
    y4par:[0],
    x3par: [[0,0,1,2],[1,2,2,3],[2,3,4,4]],
    y3par: [],
    x5par:[],
    y5par:[],
    tipontoleransi:[],
    toleransi: 2.5,
    sosekpol: 4.4, 
    radikal : 1.5,
    agama: 3,
    garisburuk:[
      [0, 1],
      [0, 1],
      [1, 1],
      [2, 0]
    ]
  }
  componentDidMount = () =>{
    this.cekPersamaanToleransi()
    this.cekPersamaanSosekpol()
  }
  cekPersamaanToleransi = () => {
    let i = 0;
    let hsl = 0;
    let y4par = []
    let tipontoleransi = []
    for(i = 0; i<=3; i++){
      if (Number(this.state.toleransi) <= Number(this.state.x4par[i][0]) || Number(this.state.toleransi) >= Number(this.state.x4par[i][3])) {
        hsl = 0
      } else if (this.state.x4par[i][0] <= this.state.toleransi && this.state.toleransi <= this.state.x4par[i][1]) {
        hsl = Number((this.state.toleransi - this.state.x4par[i][0]) /  (this.state.x4par[i][1] - this.state.x4par[i][0]))
        // this.setState({
        //   y4par : [ ...this.state.y4par,[hsl ]]
        // })
      } else if (this.state.x4par[i][1] <= this.state.toleransi && this.state.toleransi <= this.state.x4par[i][2]) {
        hsl = 1
        // this.setState({
        //   y4par : [ ...this.state.y4par,[1 ]]
        // })
      } else if (this.state.x4par[i][2] <= this.state.toleransi && this.state.toleransi <= this.state.x4par[i][3]) {
        hsl = Number((this.state.x4par[i][3] - this.state.toleransi) /  (this.state.x4par[i][3] - this.state.x4par[i][2]))
      }
      y4par.push(hsl)
      tipontoleransi.push([this.state.toleransi,hsl])
    }
    this.setState({
      y4par,
      tipontoleransi
    })
  }
  cekPersamaanSosekpol = () => {

  }
  render(){
    console.log(this.state.tipontoleransi[2])
    
    // console.log(String(this.state.tipontoleransi))
    const options = {
      title: {
        text: 'My chart'
      },
      xAxis:{
        min:0,
        max:4
      },
      yAxis:{
        min:0,
        max:1
      },
      series: [{
				name: 'Point',
				data: [this.state.tipontoleransi[2]]
			},{
				name: 'Jelek',
				data: [
					[0, 1],
					[0, 1],
					[1, 1],
					[2, 0]
				]
			}]
    }
    return (
      <div className="App">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
      </div>
    );
  }
}

export default App;
