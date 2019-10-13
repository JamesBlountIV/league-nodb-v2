import React, {Component} from 'react';
import data from '../data';
import '../components/Champion.css';
import '../components/ChampionImg.css';

export default class Champion extends Component {
    constructor() {
        super();
        this.state = {
            prop: data,
            id: 0,
        }
    }

    tryndamere = () => {
        this.setState({
            id: this.state.id !== 1 ? this.state.id = 1 : this.state.id = 1
        })
    }
    mundo = () => {
        this.setState({
            id: this.state.id !== 2 ? this.state.id = 2 : this.state.id = 2
        })
    }
    voli = () => {
        this.setState({
            id: this.state.id !== 3 ? this.state.id = 3 : this.state.id = 3
        })
    }
    graves = () => {
        this.setState({
            id: this.state.id !== 4 ? this.state.id = 4 : this.state.id = 4
        })
    }
    ekko = () => {
        this.setState({
            id: this.state.id !== 5 ? this.state.id = 5 : this.state.id = 5
        })
    }
    kha = () => {
        this.setState({
            id: this.state.id !== 6 ? this.state.id = 6 : this.state.id = 6
        })
    }
    nunu = () => {
        this.setState({
            id: this.state.id !== 7 ? this.state.id = 7 : this.state.id = 7
        })
    }
    hec = () => {
        this.setState({
            id: this.state.id !== 8 ? this.state.id = 8 : this.state.id = 8
        })
    }
    udyr = () => {
        this.setState({
            id: this.state.id !== 9 ? this.state.id = 9 : this.state.id = 9
        })
    }
    vi = () => {
        this.setState({
            id: this.state.id !== 10 ? this.state.id = 10 : this.state.id = 10
        })
    }

    render() {
        return (
            <main id= "body">
                <div className= "page-container"> 
                    <header className= "header"><p className="header-text">Top 10 Junglers for patch 9.18</p></header>
                    <section className="page-center">




                        <section className = "champion-buttons">

                            <section className= "top-5">

                                <div className= "champ-square">
                                    <div className= "tryn-btn" onClick= {this.tryndamere}></div>
                                    <p>Tryndamere</p>
                                </div>

                                <div className= "champ-square">
                                    <div className= "mundo-btn" onClick= {this.mundo}></div>
                                    <p>Dr. Mundo</p>
                                </div>

                                <div className= "champ-square">
                                    <div className= "voli-btn" onClick= {this.voli}></div>
                                    <p>Volibear</p>
                                </div>

                                <div className= "champ-square">
                                    <div className= "graves-btn" onClick= {this.graves}></div>
                                    <p>Graves</p>
                                </div>

                                <div className= "champ-square">
                                    <div className= "ekko-btn" onClick= {this.ekko}></div>
                                    <p>Ekko</p>
                                </div>

                            </section>

                            <section className= "bot-5">

                                <div className= "champ-square">
                                    <div className= "kha-btn" onClick= {this.kha}></div>
                                    <p>Kha'Zix</p>
                                </div>

                                <div className= "champ-square">
                                    <div className= "nunu-btn" onClick= {this.nunu}></div>
                                    <p>Nunu &<br/> Willump</p>
                                </div>

                                <div className= "champ-square">
                                    <div className= "hec-btn" onClick= {this.hec}></div>
                                    <p>Hecarim</p>
                                </div>

                                <div className= "champ-square">
                                    <div className= "udyr-btn" onClick= {this.udyr}></div>
                                    <p>Udyr</p>
                                </div>

                                <div className= "champ-square">
                                    <div className= "vi-btn" onClick= {this.vi}></div>
                                    <p>Vi</p>
                                </div>

                            </section>

                        </section>





                        <section className= "champion-infoDisplay"> 
                            <section> 
                            <h2 className="champion-nameDisplay">{this.state.prop[this.state.id].name}</h2>
                            </section>
                            <section id="stats-container">
                                <div className= "stats-winrate">Winrate Percent: {this.state.prop[this.state.id].winrate}</div>
                                <div className= "stats">Combat Type: {this.state.prop[this.state.id].combat}</div>
                                <div className= "stats">Health Points: {this.state.prop[this.state.id].health}</div>
                                <div className= "stats">Base Damage: {this.state.prop[this.state.id].damage}</div>
                                <div className= "stats-counter">Rival: {this.state.prop[this.state.id].counter} 
                                    <button className="view-counter">View</button></div>
                            </section>
                        </section>
                    </section>
                    <footer className="footer">
                        <h1 className= "footer-text">The Jungler's Guide</h1>
                    </footer>
                </div>
            </main>
        )
    }
}