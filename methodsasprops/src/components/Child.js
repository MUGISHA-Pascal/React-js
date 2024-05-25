import React from 'react'

const Child = props => {
  return (
    <div>
      <button onClick={props.greethandler}>alert</button>
    </div>
  )
}

export default Child
