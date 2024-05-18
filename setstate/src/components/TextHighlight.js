import React, { Component } from 'react'

export class TextHighlight extends Component {
    constructor(props) {
        super(props)

        this.state = {
            texti: "this is the one"
        }
    }
    hightlight() {
        this.setState({
            texti: <b>{this.state.texti}</b>
        })
    }
    render() {
        return (
            <div>
                <p onClick={() => { this.hightlight() }}>{this.state.texti}</p>
            </div>
        )
    }
}

export default TextHighlight
