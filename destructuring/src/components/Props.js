import React from 'react'

const Props = (props) => {
  const {name}=props
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Props
