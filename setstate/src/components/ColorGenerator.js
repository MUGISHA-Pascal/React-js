import React, { Component } from 'react'

export class ColorGenerator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "red"
        }
    }
    changecolor(){
        this.setState({
            color:"yellow"
        })
    }

    render() {
        return (
            <div>
                <h1 style={{ backgroundColor: this.state.color }}>Color</h1>
                <button onClick={()=>{this.changecolor()}}>change color</button>
            </div>
        )
    }
}

export default ColorGenerator
