import React from 'react'
import { useRef } from 'react';

function Ref() {
    const nameref=useRef(null);
   const handleSubmit=(e)=>{
    e.preventDefault();
   const name=nameref.current.value
   const correctedname=name.trim();
   console.log(correctedname);
   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>name : </p>
        <input type="text" ref={nameref}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default Ref
