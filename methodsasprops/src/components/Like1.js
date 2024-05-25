import React, { Component } from 'react'
import Like2 from './Like2'

export class Like1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            like: "",
            unlike: ""
        }
        this.onlike = this.onlike.bind(this)
        this.onunlike = this.onunlike.bind(this)
    }
    onlike() {
        this.setState({
            like: "liked"
        })
        alert(`${this.state.like}`)
    }
    onunlike() {
        this.setState({
            unlike: "unliked"
        })
        alert(`${this.state.like}`)
    }


    render() {
        return (
            <div>
                <Like2 onlikeh={this.onlike} onunlikeh={this.onunlike} />
            </div>
        )
    }
}

export default Like1
