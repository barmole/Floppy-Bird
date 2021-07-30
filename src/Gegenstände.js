import './Gegenstände.css'

import bird from './Textures/Bird.png'
import röhre from './Textures/Röhre.png'
import {useState} from "react";

const Vogel = props => {
    const [data, setData] = useState(props.data)

    let styles = {
        left: data.posX + "%",
        top: data.posY + "%",
    }

    const vogel = <img style={styles} className="Vogel" key="Vogel" id={"Vogel"} src={bird} alt={'Floppy Disk'}/>

    return (
        vogel
    );

}

const Röhre = props => {
    const [data, setData] = useState(props.data)

    let style = {};
    style.left = data.posX + "%";
    style.top = data.posY + "%"

    let flippedStyle = {
        "-webkit-transform": "scaleY(-1) scaleX(-1)",
        "transform": "scaleY(-1) scaleX(-1)",
    }
    flippedStyle.left = data.posX + "%";
    flippedStyle.top = data.posY - 120 + "%";


    return (
        <div>
            <img style={style} className="Röhre" key="Röhre" src={röhre} alt={'Röhre'}/>
            <img style={flippedStyle} className="Röhre" key="RöhreTop" src={röhre} alt={'Röhre'}/>
        </div>

    )
}

export default Vogel;
export {
    Röhre
}