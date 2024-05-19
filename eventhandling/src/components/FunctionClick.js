import React from 'react'

export default function FunctionClick() {
    function handleclick(){
        console.log("function click")
    }
  return (
    <div>
      <button onClick={handleclick}>click me</button>
    </div>
  )
}
