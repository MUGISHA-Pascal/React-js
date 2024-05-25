import React from 'react'

const Like2 = props => {
  return (
    <div>
    {/* <h1>{this.state.like}</h1>
    <h1>{this.state.unlike}</h1> */}
      <button onClick={props.onlikeh}>like</button>
      <button onClick={props.onunlikeh}>unlike</button>
    </div>
  )
}

export default Like2
