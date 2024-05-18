import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        //     this.setState({
        //         count: this.state.count + 1
        //     }, () =>{
        //         console.log(this.state.count);
        //     })
this.setState(prevstate=>({
    count:prevstate.count+1
}))
    }
    increment5(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }


    render() {
        return (
            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={() => (this.increment5())}>increment</button>
            </div>
        )
    }
}

export default Count;
