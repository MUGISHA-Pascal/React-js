import React from 'react'

export default function Wrapper({children}) {
  return (
    <div style={{background:"red"}}>
      {children}
    </div>
  )
}
