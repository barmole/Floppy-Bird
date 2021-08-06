import bird from "./Textures/Bird.png";
import React from "react";

class Vogel extends React.Component {
    styles;
    state = {};

    constructor(props) {
        super(props);
        this.state = props.data;

        this.styles = {
            left: this.state.posX + "%",
            top: this.state.posY + "%",
        }
    }


    componentDidMount() {


        setInterval(this.render, 1000)
    }


    render() {
        return (
            <div>
                <img style={this.styles} className="Vogel" key="Vogel" id={"Vogel"} src={bird} alt={'Floppy Disk'}/>
                <p>{this.state.posY}</p>
            </div>
        );
    }
}

export default Vogel;
