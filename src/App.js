import "./App.css"
import "./logo.svg"

import Vogel, {Röhre} from "./Gegenstände";
import {useEffect, useState} from "react";

const App = () => {
    const FPS = 60;
    const [spielStaus, setSpielStatus] = useState({
        status: "idle",
        score: 0
    });

    const vogelDaten = {
        posX: 10,
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
        setSpielStatus({score: spielStaus.score+0.01})
        vogelDaten.velocity += 0.08;
        vogelDaten.posY += vogelDaten.velocity;

        if (vogelDaten.posY > 70) {
            vogelDaten.velocity = -2
        }
    }

    return (
        <div className="App">
            <div className="App-header">
                <Röhre flipped={false}/>
                <Vogel data={vogelDaten}/>
                <h1 key="App-text" className="App-text">Floppy Birds</h1>
                <a href="/" key="App-start" className="App-start">Start Game</a>
            </div>
        </div>
    );
}


export default App;
