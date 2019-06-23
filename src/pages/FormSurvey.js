import React, { Component } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar'
import {css} from 'emotion'

class FormSurvey extends Component{
    state = {
        statussoal: 0,
        totalbobot: 0,
        nosoal: "",
        bobot: []
    }

    changeStatusSoal = () => {
        // let bobot = this.state.totalbobot + this.state.bobotsementara;
        // this.setState({totalbobot:bobot},()=>{
        //     console.log(this.state)
        // })
        if(this.state.statussoal === 0){
            this.setState({statussoal : 1})
        }else if(this.state.statussoal === 1){
            this.setState({statussoal : 2})
        }else if(this.state.statussoal === 2){
            this.setState({statussoal : 3})
        }else if(this.state.statussoal === 3){
            this.setState({statussoal : 4})
        }
    }

    onJawab(event) {
        // console.log(event.target.name)
        let nilai = event.target.value;
        let soal = event.target.name;
        let id = Number(event.target.id)-1
        // let bobot = []
        // this.state.bobot.push(nilai)
        // console.log(this.state.bobot)
        if(this.state.nosoal !== soal){
        //     let bobot = this.state.totalbobot+Number(nilai);
            this.setState({nosoal:soal},()=>{
                // this.setState({bobotsementara: Number(nilai)},()=>{
        //             console.log("!=",this.state)
        //         // })
            this.state.bobot.push(nilai)
            })
        }else{
            this.state.bobot.splice(id,0,nilai)
        //     this.setState({bobotsementara: Number(nilai)},()=>{
        //         console.log("==",this.state)
        //     })
    }
    console.log(this.state.bobot)
    }
    render() {
        // console.log(this.state)
        const soaltoleransi = [
            {id: 1, text: "1. Saya menerima keberadaan teman yang berbeda agama di lingkungan sekitar saya."},
            {id: 2, text: "2. Saya tidak memaksakan teman yang berbeda agama dengan kehendak dan kemauan saya sendiri."},
            {id: 3, text: "3. Saya bersedia menghormati keyakinan teman yang berbeda agama meskipun tidak sama dengan keyakinan saya."},
            {id: 4, text: "4. Saya mampu untuk menahan hal-hal yang tidak disetujui atau tidak disukai, dalam rangka membangun hubungan sosial yang lebih baik terhadap teman yang berbeda agama."},
            {id: 5, text: "5. Saya membolehkan teman yang berbeda agama untuk mengamalkan dan mengkomunikasikan agamanya."},
        ]
        const soalsosek = [
            {id: 6, text: "1. Menurut anda bagaimana ketika melihat sifat teman anda yang sering memandang derajat sosial seseorang."},
            {id: 7, text: "2. Bagaimana pendapat anda ketika melihat orang yg fanatik terhadap partai politik."},
            {id: 8, text: "3. Bagaimana pendapat anda ketika melihat seseorang yang suka menghina pemimpin."},
            {id: 9, text: "4. Bagaimana pendapat anda mengenai sistem pemerintahan saat ini."},
            {id: 10, text: "5. Bagaimana pendapat anda mengenai demonstrasi yang terjadi akhir-akhir ini."},
        ]
        const soalagama = [
            {id: 11, text: "1. Saya yakin bahwa Al –Quran adalah kitab penyempurna dari kitab pendahulu sebagai pedoman hidup umat manusia"},
            {id: 12, text: "2. Saya percaya bahwa semua yang terjadi pada kita adalah ketentuan dari Allah"},
            {id: 13, text: "3. saya selalu mendahulukan kepentingan orang lain daripada kepentingan saya sendiri."},
            {id: 14, text: "4. saya yakin bahwa hari kiamat akan datang, dimana alam semesta dihancurkan dan akan ada hari dimana kita mempertanggungjawabkan perbuatan kita."},
            {id: 15, text: "5. saya mengerjakan sholat lima waktu setiap hari"},
        ]
        const soalbudaya = [
            {id: 16, text: "1. Bagaimana menurut anda dengan adanya budaya daerah yang ada di indonesia?"},
            {id: 17, text: "2. Bagaimana menurut anda dengan budaya daerah yang masih murni?"},
            {id: 18, text: "3. Bagaimana menurut anda dengan budaya daerah yang sudah berintegrasi dengan agama?"},
            {id: 19, text: "4. Bagaimana menurut anda dengan bangunan peninggalan budaya yang menjadi tempat wisata?(candi, keraton, pura)"},
            {id: 20, text: "5. budaya soal?"},
        ]
        return (
            <div>
                <div className="wrapper">
                    <Sidebar active={2}/>
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
                                                        <div className={css`margin-bottom: 10px; font-weight:500`}>Soal Sosekpol</div>
                                                    : this.state.statussoal === 2 ?
                                                        <div className={css`margin-bottom: 10px; font-weight:500`}>Soal Agama</div>
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
                                                                            <input className="form-check-input" type="radio" id={items.id} name={"toleransi"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.1"/>Sangat Tidak Setuju
                                                                            <span className="circle">
                                                                                <span className="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" id={items.id} name={"toleransi"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.2" />Tidak Setuju
                                                                            <span className="circle">
                                                                                <span className="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" id={items.id} name={"toleransi"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.3"/>Setuju
                                                                            <span className="circle">
                                                                                <span className="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input className="form-check-input" type="radio" id={items.id} name={"toleransi"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.4"/>Sangat Setuju
                                                                            <span className="circle">
                                                                                <span className="check"></span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    ))
                                                : this.state.statussoal === 1 ?
                                                    soalsosek.map((items,index)=>(
                                                        <div key={items.id} className="row" onChange={this.onJawab.bind(this)}>
                                                            <div className="col-sm-10">
                                                                <div className={css`margin-top:0px !important; padding-bottom: 0px !important`+" form-group"}>
                                                                    <p className="form-control-static">{items.text}</p>
                                                                </div>
                                                            </div>
                                                            <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" type="radio" name={"sosekpol"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.6"/>Baik
                                                                        <span className="circle">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" type="radio" name={"sosekpol"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.3"/>Sedang
                                                                        <span className="circle">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" type="radio" name={"sosekpol"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.1"/>Buruk
                                                                        <span className="circle">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                ))
                                            : this.state.statussoal === 2 ?
                                                soalagama.map((items,index)=>(
                                                    <div key={items.id} className="row" onChange={this.onJawab.bind(this)}>
                                                        <div className="col-sm-10">
                                                            <div className={css`margin-top:0px !important; padding-bottom: 0px !important`+" form-group"}>
                                                                <p className="form-control-static">{items.text}</p>
                                                            </div>
                                                        </div>
                                                        <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name={"soalagama"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.1"/>Sangat Tidak Setuju
                                                                    <span className="circle">
                                                                        <span className="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name={"soalagama"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.2"/>Tidak Setuju
                                                                    <span className="circle">
                                                                        <span className="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name={"soalagama"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.3"/>Setuju
                                                                    <span className="circle">
                                                                        <span className="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" type="radio" name={"soalagama"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.4"/>Sangat Setuju
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
                                                <div key={items.id} className="row" onChange={this.onJawab.bind(this)}>
                                                    <div className="col-sm-10">
                                                        <div className={css`margin-top:0px !important; padding-bottom: 0px !important`+" form-group"}>
                                                            <p className="form-control-static">{items.text}</p>
                                                        </div>
                                                    </div>
                                                    <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="radio" name={"soalbudaya"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.6"/>Baik
                                                                <span className="circle">
                                                                    <span className="check"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="radio" name={"soalbudaya"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.3"/>Sedang
                                                                <span className="circle">
                                                                    <span className="check"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={css`margin-left: 15px;`+" col-sm-10 checkbox-radios"}>
                                                        <div className="form-check">
                                                            <label className="form-check-label">
                                                                <input className="form-check-input" type="radio" name={"soalbudaya"+String(items.id)} onChange={this.onJawab.bind(this)} value="0.1"/>Buruk
                                                                <span className="circle">
                                                                    <span className="check"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))
                                    :<div></div>}
                                                    <button type="button" onClick={this.changeStatusSoal}>tes</button>
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