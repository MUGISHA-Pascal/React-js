import React, { Component } from 'react'

export class States extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:"mugisha"
  }
}

  render() {
    const {name}=this.state
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{name}</h1>
      </div>
    )
  }
}

export default States
