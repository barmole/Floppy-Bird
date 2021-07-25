import './Gegenstände.css'

import bird from './Textures/Bird.png'
import röhre from './Textures/Röhre.png'
import {useState} from "react";

const Vogel = props => {
    const [data, setData] = useState(props.data)
    console.log(data)

    let animation;

    if(data.velocity <= -2){
        animation = 'running';
    }else if(data.velocity>=1){
        animation = 'paused'
    }

    let styles ={
        left: data.posX + "%",
        top: data.posY + "%",
        'animation-play-state': animation,
        animation: "Vogel-sprung 1s "
    }

    const vogel = <img style={styles} className="Vogel" key="Vogel" id={"Vogel"} src={bird} alt={'Floppy Disk'}/>



    return (
        vogel
    );

}

function Röhre() {
    return (
        <img className="Röhre" key="Röhre" src={röhre} alt={'Röhre'}/>
    )
}

export default Vogel;
export {
    Röhre
}