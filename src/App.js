import "./App.css"
import "./logo.svg"

import {Röhre} from "./Gegenstände";
import Vogel from "./Vogel";
import React, {useEffect} from "react";

const FPS = 60;
var app;
var state;

var vogelDaten;

//Röhren generieren
const röhren = []
const röhrenDaten = []

for (let i = 0; i < 8; i++) {
    röhrenDaten
        [i] = {
        posX: 25 * (i + 1),
        posY: Math.floor(Math.random() * 50) + 50
    }
    röhren
        [i] = <Röhre data={röhrenDaten[i]}/>;
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "idle",
            score: 0,
            springen: false
        }
        state = this.state
        app = this;

        vogelDaten = {
            posX: 11,
            posY: 70,
            velocity: -4.1
        }

        looper()
    }


    render() {
        return (
            <div className="App" onClick={sprungHandler}>
                <div className="App-header">
                    {röhren}
                    <Vogel data={vogelDaten}/>
                    <div className="Titel">
                        <h1 key="App-text" className="App-text">Floppy Birds</h1>
                        <p onClick={startHandler} key="App-start" className="App-start">Start Game</p>
                    </div>
                </div>
            </div>
        );
    }
}

let letzterRun = 0;
let delta, jetzt;

const looper = () => {
    jetzt = Date.now();
    delta = jetzt - letzterRun;
    letzterRun = jetzt;

    setInterval(tickGame, 1000 / FPS);

}

const tickGame = () => {
    state.score += 0.01
    vogelDaten.velocity += 0.1;
    vogelDaten.posY += vogelDaten.velocity;

    if (state.status === "idle") {
        if (vogelDaten.posY >= röhrenDaten[0].posY) {
            
            vogelDaten.velocity = -2
        }
    } else {
        if (state.springen || vogelDaten.posY > 65) {
            vogelDaten.velocity = -2
        }

        for (let i = 0; i < röhren.length; i++) {
            röhrenDaten[i].posX -= 0.2;
            if (röhrenDaten[i].posX < -100) {
                röhrenDaten[i].posX = 100;
                röhrenDaten[i].posY = Math.floor(Math.random() * 50) + 50
            }
        }
    }

    app.render();
}

const sprungHandler = () => {
    state.springen = true;
    console.log(state.springen);
}

const startHandler = () => {
    state.status = "running"
}


export default App;
