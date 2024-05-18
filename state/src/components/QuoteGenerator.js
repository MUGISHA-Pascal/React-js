import React, { Component } from 'react';
class QuoteGenerator extends Component {
    constructor() {
        super();
        this.state = {
            quotes: []
        }
    }
    Quotes() {
        this.setState({
            quotes: ["life is great", " ", "focus is important"]
        })
    }
    render() {
        return (
            <div>
                <h1>Generate a quote</h1>
                <button onClick={() => { this.Quotes() }}>Generate</button>
                <h1>{this.state.quotes}</h1>
            </div>
        );
    }
}
export default QuoteGenerator;