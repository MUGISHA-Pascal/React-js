import React, { Component } from 'react';
class InteractiveText extends Component {
    constructor() {
        super();
        this.state = {
            text: "this is the text"
        }
    }
    Changetext() {
        this.setState({
            text: <b>{this.state.text}</b>
        })
    }
    render() {
        return (<p onClick={() => { this.Changetext() }}>{this.state.text}</p>);
    }
}
export default InteractiveText;