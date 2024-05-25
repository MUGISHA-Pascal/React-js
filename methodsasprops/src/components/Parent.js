import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "pascal"
    }
    this.greetparent = this.greetparent.bind(this)
  }
  greetparent() {
alert(`hello ${this.state.name}`)
  }

  render() {
    return (
      <div>
        <Child greethandler={this.greetparent}/>
      </div>
    )
  }
}

export default Parent
