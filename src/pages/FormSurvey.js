import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import {css} from 'emotion'
import Store from './Store'
import { Redirect } from 'react-router-dom'

class FormSurvey extends Component{
    state = {
        statussoal: 0,
        totalbobot: 0,
        nosoal: "",
        bobot: [[]],
        redirect : false
    }

    arrSum = async () => {
        let nested=this.state.bobot
        let totalArr = []
        // let flat = nested.reduce((acc, it) => [...acc, ...it], [])
        for(let i=0; i<nested.length;i++){
            let total = nested[i].reduce((a,b) => a + b, 0)
            totalArr.push(Math.round(total * 100) / 100)
        }
        // console.log(totalArr)
        await Store.setJawaban(totalArr)
    }


    changeStatusSoal = () => {
        this.setState({bobot : [...this.state.bobot,[]]},()=>{
            // console.log(this.state.bobot)
            if(this.state.statussoal === 0){
                this.setState({statussoal : 1})
            }else if(this.state.statussoal === 1){
                this.setState({statussoal : 2})
            }else if(this.state.statussoal === 2){
                this.setState({statussoal : 3})
            }else if(this.state.statussoal === 3){
                this.arrSum()
                this.setState({statussoal : 4, redirect : true})
            }
        })

    }

    onJawab(event) {
        let nilai = event.target.value;
        let soal = Number(this.state.statussoal);
        let id = Number(event.target.id)-1
        this.state.bobot[soal][id] = Number(nilai)
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/hasil"/>
        }
        // console.log(this.state)
        const soaltoleransi = [
            {id: 1, text: "1. Saya menerima keberadaan teman yang berbeda agama di lingkungan sekitar saya.", nomor : "1"},
            {id: 2, text: "2. Saya tidak memaksakan teman yang berbeda agama dengan kehendak dan kemauan saya sendiri.", nomor : "2"},
            {id: 3, text: "3. Saya bersedia menghormati keyakinan teman yang berbeda agama meskipun tidak sama dengan keyakinan saya.", nomor : "3"},
            {id: 4, text: "4. Saya mampu untuk menahan hal-hal yang tidak disetujui atau tidak disukai, dalam rangka membangun hubungan sosial yang lebih baik terhadap teman yang berbeda agama.", nomor : "4"},
            {id: 5, text: "5. Saya membolehkan teman yang berbeda agama untuk mengamalkan dan mengkomunikasikan agamanya.", nomor : "5"},
        ]
        const soalsosek = [
            {id: 6, text: "1. Menurut anda bagaimana ketika melihat sifat teman anda yang sering memandang derajat sosial seseorang.", nomor : "1"},
            {id: 7, text: "2. Bagaimana pendapat anda ketika melihat orang yg fanatik terhadap partai politik.", nomor : "2"},
            {id: 8, text: "3. Bagaimana pendapat anda ketika melihat seseorang yang suka menghina pemimpin.", nomor : "3"},
            {id: 9, text: "4. Bagaimana pendapat anda mengenai sistem pemerintahan saat ini.", nomor : "4"},
            {id: 0, text: "5. Bagaimana pendapat anda mengenai demonstrasi yang terjadi akhir-akhir ini.", nomor : "5"},
        ]
        const soalagama = [
            {id: 11, text: "1. Saya yakin bahwa Al –Quran adalah kitab penyempurna dari kitab pendahulu sebagai pedoman hidup umat manusia", nomor : "1"},
            {id: 12, text: "2. Saya percaya bahwa semua yang terjadi pada kita adalah ketentuan dari Allah", nomor : "2"},
            {id: 13, text: "3. saya selalu mendahulukan kepentingan orang lain daripada kepentingan saya sendiri.", nomor : "3"},
            {id: 14, text: "4. saya yakin bahwa hari kiamat akan datang, dimana alam semesta dihancurkan dan akan ada hari dimana kita mempertanggungjawabkan perbuatan kita.", nomor : "4"},
            {id: 15, text: "5. saya mengerjakan sholat lima waktu setiap hari", nomor : "5"},
        ]
        const soalbudaya = [
            {id: 16, text: "1. Bagaimana menurut anda dengan adanya budaya daerah yang ada di indonesia?", nomor : "1"},
            {id: 17, text: "2. Bagaimana menurut anda dengan budaya daerah yang masih murni?", nomor : "2"},
            {id: 18, text: "3. Bagaimana menurut anda dengan budaya daerah yang sudah berintegrasi dengan agama?", nomor : "3"},
            {id: 19, text: "4. Bagaimana menurut anda dengan bangunan peninggalan budaya yang menjadi tempat wisata?(candi, keraton, pura)", nomor : "4"},
            {id: 20, text: "5. Bagaimana jika ada orang yang berdakwah dengan media budaya yang ada?", nomor : "5"},
        ]
        return (
            <div>
                <div className="wrapper">
                    <Sidebar active={1}/>
                    <div className="main-panel">
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-header card-header-rose card-header-text">
                                                <div className="card-text">
                                                    <h4 className="card-title">Quisioner</h4>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <form method="get" action="/" className="form-horizontal" name="survey">
                                                    {this.state.statussoal === 0 ?
                                                        <div className={css`margin-bottom: 10px; font-weight:500`}>Soal Toleransi</div>
                                                    : this.state.statussoal === 1 ?
                                                        <div className={css`margin-bottom: 10px; font-weight:500`}>Soal Agama</div>
                                                    : this.state.statussoal === 2 ?
                                                        <div className={css`margin-bottom: 10px; font-weight:500`}>Soal Sosekpol</div>
                                                    : this.state.statussoal === 3 ?
                                                        <div className={css`margin-bottom: 10px; font-weight:500`}>Soal Budaya</div>
                                                    :<div></div>}
                                                    {this.state.statussoal === 0 ?
                                                        soaltoleransi.map((items,index)=>(
                                                            <div key={items.id} className="row">
                                                                <div className="col-sm-10">
                                                                    <div className={css`margin-top:0px !important; padding-bottom: 0px !important`+" form-group"}>
                                                                        <p className="form-control-static">{items.text}</p>
                                                                    </div>
                                                                </div>
                                                                <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" id={items.nomor} name={"toleransi"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.2"/>Sangat Tidak Setuju
                                                                            <span className="circle">
                                                                                <span className="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" id={items.nomor} name={"toleransi"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.4" />Tidak Setuju
                                                                            <span className="circle">
                                                                                <span className="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" id={items.nomor} name={"toleransi"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.6"/>Setuju
                                                                            <span className="circle">
                                                                                <span className="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" id={items.nomor} name={"toleransi"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.8"/>Sangat Setuju
                                                                            <span className="circle">
                                                                                <span className="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    ))
                                                :this.state.statussoal === 1 ?
                                                    soalagama.map((items,index)=>(
                                                        <div key={items.id} className="row" >
                                                            <div className="col-sm-10">
                                                                <div className={css`margin-top:0px !important; padding-bottom: 0px !important`+" form-group"}>
                                                                    <p className="form-control-static">{items.text}</p>
                                                                </div>
                                                            </div>
                                                            <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" type="radio" id={items.nomor} name={"soalagama"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.2"/>Sangat Tidak Setuju
                                                                        <span className="circle">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" type="radio" id={items.nomor} name={"soalagama"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.4"/>Tidak Setuju
                                                                        <span className="circle">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" type="radio" id={items.nomor} name={"soalagama"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.6"/>Setuju
                                                                        <span className="circle">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" type="radio" id={items.nomor} name={"soalagama"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.8"/>Sangat Setuju
                                                                        <span className="circle">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                ))
                                                : this.state.statussoal === 2 ?
                                                soalsosek.map((items,index)=>(
                                                    <div key={items.id} className="row">
                                                        <div className="col-sm-10">
                                                            <div className={css`margin-top:0px !important; padding-bottom: 0px !important`+" form-group"}>
                                                                <p className="form-control-static">{items.text}</p>
                                                            </div>
                                                        </div>
                                                        <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" id={items.nomor} name={"sosekpol"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.2"/>Buruk
                                                                    <span className="circle">
                                                                        <span className="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" id={items.nomor} name={"sosekpol"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.5"/>Sedang
                                                                    <span className="circle">
                                                                        <span className="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" id={items.nomor} name={"sosekpol"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.7"/>Baik
                                                                    <span className="circle">
                                                                        <span className="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                            ))
                                        : this.state.statussoal === 3 ?
                                            soalbudaya.map((items,index)=>(
                                                <div key={items.id} className="row" >
                                                    <div className="col-sm-10">
                                                        <div className={css`margin-top:0px !important; padding-bottom: 0px !important`+" form-group"}>
                                                            <p className="form-control-static">{items.text}</p>
                                                        </div>
                                                    </div>
                                                    <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="radio" id={items.nomor} name={"soalbudaya"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.2"/>Buruk
                                                                <span className="circle">
                                                                    <span className="check"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="radio" id={items.nomor} name={"soalbudaya"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.5"/>Sedang
                                                                <span className="circle">
                                                                    <span className="check"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="radio" id={items.nomor} name={"soalbudaya"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.7"/>Baik
                                                                <span className="circle">
                                                                    <span className="check"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))
                                    :<div></div>}
                                                    <div className={css`float:right;`+" card-footer text-right"}>
                                                        <button type="button" className="btn btn-rose" onClick={this.changeStatusSoal}>SUBMIT</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormSurvey;