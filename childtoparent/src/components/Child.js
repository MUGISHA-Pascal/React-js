import React, { useState } from 'react'

const Child = ({ senddata }) => {
  const [data, setdata] = useState("")
  const handleinput = (event) => {
    const dv = event.target.value;
    setdata(dv);
  }
  const handlesubmit = () => {
    senddata(data);
  }
  return (
    <div>

      <input type="text" onChange={handleinput} />
      <input onClick={handlesubmit} value="submit" />
    </div>
  )
}

export default Child
