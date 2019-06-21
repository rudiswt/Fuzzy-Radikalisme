/* eslint-disable */
import React from 'react';
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import SideBar from './components/Sidebar';
import * as Survey from "survey-react";
import "survey-react/survey.css";

class App extends React.Component {
  json = {
    elements: [
      {"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"Apakah anda bosan hidup di bumi?","choices":[{"value":"item1","text":"Tidak"},{"value":"item2","text":"Biasa Ajah"},{"value":"item3","text":"Bosan"}]},{"type":"radiogroup","name":"question2","title":"Apakah anda Manusia di bumi?","choices":["item1","item2","item3"]}]}]}
    ]
   };
  state =  {
    x4par:[[0,0,1,2],[1,2,2,3],[2,3,3,3.5],[3,3.5,4,4]],
    y4partol:[0],
    y4paragm:[0],
    x3par: [[0,0,1,2],[1,2,2,3],[2,3,4,4]],
    y3parpol: [0],
    y3parkal: [0],
    tipontoleransi:[],
    tiponsosekpol:[],
    tiponradikal:[],
    tiponagama:[],
    toleransi: 2.34,
    sosekpol: 3.6, 
    radikal : 1.5,
    agama: 3,
    tmp1: [],
    tmp2: [],
    paramtoleransi: [
      { type: 'line', name: 'Buruk', data: [[0,1], [0,1], [1,1], [2,0]] },
      { type: 'line', name: 'Sedang', data: [[1,0], [2,1], [2,1], [3,0]] },
      { type: 'line', name: 'Baik', data: [[2,0], [3,1], [3,1],[4,0]] },
      { type: 'line', name: 'Sangat Baik', data: [[3,0], [4,1], [5,1], [5,1]] },
    ],
    paramsosekpol: [
      { type: 'line', name: 'Buruk', data: [[0,1], [0,1], [1,1], [2,0]] },
      { type: 'line', name: 'Sedang', data: [[1,0], [2,1], [2,1], [3,0]] },
      { type: 'line', name: 'Baik', data: [[2,0],[3,1],[4,1],[4,1]] },
    ],
    paramagama: [
      { type: 'line', name: 'Sangat Tidak Setuju', data: [[0,1], [0,1], [1,1], [2,0]] },
      { type: 'line', name: 'Tidak Setuju', data: [[1,0], [2,1], [2,1], [3,0]] },
      { type: 'line', name: 'Setuju', data: [[2,0], [3,1], [3,1],[4,0]] },
      { type: 'line', name: 'Sangat Setuju', data: [[3,0], [4,1], [5,1], [5,1]] },
    ],
    paramsradikal: [
      { type: 'line', name: 'Tidak Berpotensi', data: [[0,1], [0,1], [1,1], [2,0]] },
      { type: 'line', name: 'Berpotensi', data: [[1,0], [2,1], [2,1], [3,0]] },
      { type: 'line', name: 'Sangat Berpotensi', data: [[2,0],[3,1],[4,1],[4,1]] },
    ],
  }
  componentDidMount = () =>{
    this.cekPersamaanToleransi()
    this.cekPersamaanSosekpol()
    this.cekPersamaanAgama()
    this.cekPersamaanRadikal()
  }
  sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
  }
  cekPersamaanToleransi = () => {
    let i = 0;
    let hsl = 0;
    let y4partol = []
    let tipontoleransi = []
    for(i = 0; i<=3; i++){
      if (Number(this.state.toleransi) <= Number(this.state.x4par[i][0]) || Number(this.state.toleransi) >= Number(this.state.x4par[i][3])) {
        hsl = 0
      } else if (this.state.x4par[i][0] <= this.state.toleransi && this.state.toleransi <= this.state.x4par[i][1]) {
        hsl = Number((this.state.toleransi - this.state.x4par[i][0]) /  (this.state.x4par[i][1] - this.state.x4par[i][0]))
      } else if (this.state.x4par[i][1] <= this.state.toleransi && this.state.toleransi <= this.state.x4par[i][2]) {
        hsl = 1
      } else if (this.state.x4par[i][2] <= this.state.toleransi && this.state.toleransi <= this.state.x4par[i][3]) {
        hsl = Number((this.state.x4par[i][3] - this.state.toleransi) /  (this.state.x4par[i][3] - this.state.x4par[i][2]))
      }
      if(hsl !== 0){
        tipontoleransi.push([this.state.toleransi,hsl])
      }
      y4partol.push(parseFloat(Math.round(hsl * 100) / 100).toFixed(2))
    }
    this.setState({tipontoleransi,y4partol,paramtoleransi: [...this.state.paramtoleransi, { type: 'scatter', name: 'Titik Poin', data: tipontoleransi }]},
      () => {this.interferensosektol()}
    )
  }
  cekPersamaanAgama = () => {
    let i = 0;
    let hsl = 0;
    let y4paragm = []
    let tiponagama = []
    for(i = 0; i<=3; i++){
      if (Number(this.state.agama) <= Number(this.state.x4par[i][0]) || Number(this.state.agama) >= Number(this.state.x4par[i][3])) {
        hsl = 0
      } else if (this.state.x4par[i][0] <= this.state.agama && this.state.agama <= this.state.x4par[i][1]) {
        hsl = Number((this.state.agama - this.state.x4par[i][0]) /  (this.state.x4par[i][1] - this.state.x4par[i][0]))
      } else if (this.state.x4par[i][1] <= this.state.agama && this.state.agama <= this.state.x4par[i][2]) {
        hsl = 1
      } else if (this.state.x4par[i][2] <= this.state.agama && this.state.agama <= this.state.x4par[i][3]) {
        hsl = Number((this.state.x4par[i][3] - this.state.agama) /  (this.state.x4par[i][3] - this.state.x4par[i][2]))
      }
      if(hsl !== 0){
        tiponagama.push([this.state.agama,hsl])
      }
      y4paragm.push(parseFloat(Math.round(hsl * 100) / 100).toFixed(2))
    }
    this.setState({tiponagama,y4paragm,paramagama: [...this.state.paramagama, { type: 'scatter', name: 'Titik Poin', data: tiponagama }]},
      () => {this.interferenskalagm()}
    )
  }
  cekPersamaanSosekpol = () => {
    let i = 0;
    let hsl = 0;
    let y3parpol = []
    let tiponsosekpol = []
    for(i=0; i<=2; i++){
      if (Number(this.state.sosekpol) <= Number(this.state.x3par[i][0]) || Number(this.state.sosekpol) >= Number(this.state.x3par[i][3])) {
        hsl = 0
      } else if (this.state.x3par[i][0] <= this.state.sosekpol && this.state.sosekpol <= this.state.x3par[i][1]) {
        hsl = Number((this.state.sosekpol - this.state.x3par[i][0]) /  (this.state.x3par[i][1] - this.state.x3par[i][0]))
      } else if (this.state.x3par[i][1] <= this.state.sosekpol && this.state.sosekpol <= this.state.x3par[i][2]) {
        hsl = 1
      } else if (this.state.x3par[i][2] <= this.state.sosekpol && this.state.sosekpol <= this.state.x3par[i][3]) {
        hsl = Number((this.state.x3par[i][3] - this.state.sosekpol) /  (this.state.x3par[i][3] - this.state.x3par[i][2]))
      }
      if(hsl !== 0){
        tiponsosekpol.push([this.state.sosekpol,hsl])
      }
      y3parpol.push(parseFloat(Math.round(hsl * 100) / 100).toFixed(2))
    }
    this.setState({tiponsosekpol,y3parpol,paramsosekpol: [...this.state.paramsosekpol, { type: 'scatter', name: 'Titik Poin', data: tiponsosekpol }]},
      () => {this.interferensosektol()}
    )
  }
  cekPersamaanRadikal = () => {
    let i = 0;
    let hsl = 0;
    let y3parkal = []
    let tiponradikal = []
    for(i=0; i<=2; i++){
      if (Number(this.state.radikal) <= Number(this.state.x3par[i][0]) || Number(this.state.radikal) >= Number(this.state.x3par[i][3])) {
        hsl = 0
      } else if (this.state.x3par[i][0] <= this.state.radikal && this.state.radikal <= this.state.x3par[i][1]) {
        hsl = Number((this.state.radikal - this.state.x3par[i][0]) /  (this.state.x3par[i][1] - this.state.x3par[i][0]))
      } else if (this.state.x3par[i][1] <= this.state.radikal && this.state.radikal <= this.state.x3par[i][2]) {
        hsl = 1
      } else if (this.state.x3par[i][2] <= this.state.radikal && this.state.radikal <= this.state.x3par[i][3]) {
        hsl = Number((this.state.x3par[i][3] - this.state.radikal) /  (this.state.x3par[i][3] - this.state.x3par[i][2]))
      }
      if(hsl !== 0){
        tiponradikal.push([this.state.radikal,hsl])
      }
      y3parkal.push(parseFloat(Math.round(hsl * 100) / 100).toFixed(2))
    }
    this.setState({tiponradikal,y3parkal,paramsradikal: [...this.state.paramsradikal, { type: 'scatter', name: 'Titik Poin', data: tiponradikal }]},
      () => {this.interferenskalagm()}
    )
  }

  interferensosektol = () => {
    let x = 0;
    let y = 0;
    let tole = this.state.y4partol;
    let telo = this.state.y3parpol;
    let tmp1 = []
    for(x=0; x < telo.length ; x++){
      tmp1[x] = []
      for(y=0; y < tole.length ; y++){
        if(telo[x] > tole[y]){
          tmp1[x][y] = telo[x]
        }else{
          tmp1[x][y] = tole[y]
        }
      }
    }
    this.setState({tmp1})
  }
  interferenskalagm = () => {
    let x = 0;
    let y = 0;
    let tole = this.state.y4paragm;
    let telo = this.state.y3parkal;
    let tmp2 = []
    for(x=0; x < telo.length ; x++){
      tmp2[x] = []
      for(y=0; y < tole.length ; y++){
        if(telo[x] > tole[y]){
          tmp2[x][y] = telo[x]
        }else{
          tmp2[x][y] = tole[y]
        }
      }
    }
    this.setState({tmp2})
  }
  render(){
    console.log(this.state)
    const toleransi = {
      title: {
        text: 'Toleransi Chart'
      },
      xAxis:{
        min:0,
        max:4
      },
      yAxis:{
        min:0,
        max:1
      },
      series: this.state.paramtoleransi
    }
    const agama = {
      title: {
        text: 'Agama Chart'
      },
      xAxis:{
        min:0,
        max:4
      },
      yAxis:{
        min:0,
        max:1
      },
      series: this.state.paramagama
    }
    const sosekpol = {
      title: {
        text: 'Sosekpol Chart'
      },
      xAxis:{
        min:0,
        max:4
      },
      yAxis:{
        min:0,
        max:1
      },
      series: this.state.paramsosekpol
    }
    const radikal = {
      title: {
        text: 'Budaya Chart'
      },
      xAxis:{
        min:0,
        max:4
      },
      yAxis:{
        min:0,
        max:1
      },
      series: this.state.paramsradikal
    }
    var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"Apakah anda bosan hidup di bumi?","choices":[{"value":"item1","text":"Tidak"},{"value":"item2","text":"Biasa Ajah"},{"value":"item3","text":"Bosan"}]},{"type":"radiogroup","name":"question2","title":"Apakah anda Manusia di bumi?","choices":["item1","item2","item3"]}]}]}
    return (
      
          <div className="App">
            <div className="wrapper">
              <SideBar/>
              <div className="main-panel">
              <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                  <div class="navbar-wrapper">
                    <a class="navbar-brand" href="#pablo">Welcome</a>
                  </div>
                  <div class="collapse navbar-collapse justify-content-end">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a class="nav-link" href="#pablo" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="material-icons">person</i>
                          <p class="d-lg-none d-md-block">
                            Account
                          </p>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                          <a class="dropdown-item" href="#">Quisioner</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
                <div className="content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card card-chart">
                          <div className="card-body">
                              <HighchartsReact highcharts={Highcharts} options={toleransi} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card card-chart">
                          <div className="card-body">
                              <HighchartsReact highcharts={Highcharts} options={sosekpol} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="card">
                        <div className="card-header card-header-danger">
                          <h4 className="card-title">Tabel Interference</h4>
                          <p className="card-category">Toleransi dan Sosekpol</p>
                        </div>
                        <div className="card-body table-responsive">
                        {
                          this.state.tmp1.length != '0'
                            ? <table className="table table-hover">
                            <thead>
                                <tr>
                                  <th>Toleransi/Sosekpol</th>
                                  <th>Buruk</th>
                                  <th>Sedang</th>
                                  <th>Baik</th>
                                  <th>Sangat Baik</th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Buruk</td>
                                <td>Potensi ({this.state.tmp1[0][0]})</td>
                                <td>Potensi ({this.state.tmp1[0][1]})</td>
                                <td>Potensi ({this.state.tmp1[0][2]})</td>
                                <td>Potensi ({this.state.tmp1[0][3]})</td>
                              </tr>
                              <tr>
                                <td>Sedang</td>
                                <td>Potensi ({this.state.tmp1[1][0]})</td>
                                <td>Potensi ({this.state.tmp1[1][1]})</td>
                                <td>Netral ({this.state.tmp1[1][2]})</td>
                                <td>Netral ({this.state.tmp1[1][3]})</td>
                              </tr>
                              <tr>
                                <td>Baik</td>
                                <td>Aman ({this.state.tmp1[2][0]})</td>
                                <td>Aman ({this.state.tmp1[2][1]})</td>
                                <td>Aman ({this.state.tmp1[2][2]})</td>
                                <td>Aman ({this.state.tmp1[2][3]})</td>
                              </tr>
                            </tbody>
                          </table>
                          : <div></div>
                        }
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card card-chart">
                          <div className="card-body">
                              <HighchartsReact highcharts={Highcharts} options={agama} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card card-chart">
                          <div className="card-body">
                              <HighchartsReact highcharts={Highcharts} options={radikal} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                      <div className="card">
                        <div className="card-header card-header-danger">
                          <h4 className="card-title">Tabel Interference</h4>
                          <p className="card-category">Toleransi dan Sosekpol</p>
                        </div>
                        <div className="card-body table-responsive">
                        {
                          this.state.tmp2.length != '0'
                            ? <table className="table table-hover">
                            <thead>
                                <tr>
                                  <th>Toleransi/Sosekpol</th>
                                  <th>Buruk</th>
                                  <th>Sedang</th>
                                  <th>Baik</th>
                                  <th>Sangat Baik</th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Buruk</td>
                                <td>Potensi ({this.state.tmp2[0][0]})</td>
                                <td>Potensi ({this.state.tmp2[0][1]})</td>
                                <td>Potensi ({this.state.tmp2[0][2]})</td>
                                <td>Potensi ({this.state.tmp2[0][3]})</td>
                              </tr>
                              <tr>
                                <td>Sedang</td>
                                <td>Potensi ({this.state.tmp2[1][0]})</td>
                                <td>Potensi ({this.state.tmp2[1][1]})</td>
                                <td>Netral ({this.state.tmp2[1][2]})</td>
                                <td>Netral ({this.state.tmp2[1][3]})</td>
                              </tr>
                              <tr>
                                <td>Baik</td>
                                <td>Aman ({this.state.tmp2[2][0]})</td>
                                <td>Aman ({this.state.tmp2[2][1]})</td>
                                <td>Aman ({this.state.tmp2[2][2]})</td>
                                <td>Aman ({this.state.tmp2[2][3]})</td>
                              </tr>
                            </tbody>
                          </table>
                          : <div></div>
                        }
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Survey.Survey json={ surveyJSON } onComplete={ this.sendDataToServer }/> */}
            </div>
    );
  }
}

export default App;
