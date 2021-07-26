import "./App.css"
import "./logo.svg"

import Vogel, {Röhre} from "./Gegenstände";
import {useEffect, useState} from "react";

const App = () => {
    const FPS = 60;
    const [spielStaus, setSpielStatus] = useState({
        status: "running",
        score: 0
    });

    const vogelDaten = {
        posX: 11,
        posY: 70,
        velocity: -2.5
    }

    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            tickGame();
        }, 1000 / FPS);

        return () => clearInterval(interval);
    }, [])

    const tickGame = () => {
        setSpielStatus({score: spielStaus.score + 0.01})
        vogelDaten.velocity += 0.1;
        vogelDaten.posY += vogelDaten.velocity;

        if (spielStaus.status == "idle") {
            if (vogelDaten.posY > 65) {
                vogelDaten.velocity = -2
            }
        } else {
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
            posX: 25 * (i + 2),
            posY: Math.floor(Math.random() * 50) + 50
        }
        röhren[i] = <Röhre data={röhrenDaten[i]}/>;
    }


    return (
        <div className="App">
            <div className="App-header">
                {röhren}
                <Vogel data={vogelDaten}/>
                <div className="Titel">
                    <h1 key="App-text" className="App-text">Floppy Birds</h1>
                    <a href="/" key="App-start" className="App-start">Start Game</a>
                </div>
            </div>
        </div>
    );
}


export default App;
