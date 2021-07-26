import "./App.css"
import "./logo.svg"

import Vogel, {Röhre} from "./Gegenstände";
import {useEffect, useState} from "react";

const App = () => {
    const FPS = 60;
    const [spielStaus, setSpielStatus] = useState({
        status: "idle",
        score: 0,
        springen: false
    });

    const vogelDaten = {
        posX: 11,
        posY: 70,
        velocity: -4.1
    }

    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            tickGame(spielStaus);
        }, 1000 / FPS);

        return () => clearInterval(interval);
    }, [])

    const tickGame = spielstatus => {
        setSpielStatus({score: spielStaus.score + 0.01})
        vogelDaten.velocity += 0.1;
        vogelDaten.posY += vogelDaten.velocity;

        if (spielStaus.status === "idle") {
            if (vogelDaten.posY > 65) {
                vogelDaten.velocity = -2
            }
        } else {
            if (spielStaus.springen || vogelDaten.posY > 65) {
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
    }

    //Röhren generieren
    const röhren = []
    const röhrenDaten = []
    for (let i = 0; i < 8; i++) {
        röhrenDaten[i] = {
            posX: 25 * (i + 1),
            posY: Math.floor(Math.random() * 50) + 50
        }
        röhren[i] = <Röhre data={röhrenDaten[i]}/>;
    }


    const sprungHandler = () => {
        setSpielStatus({springen: true});
        console.log(spielStaus.springen);
    }

    function startHandler() {
        setSpielStatus({status: "running"})
    }

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


export default App;
