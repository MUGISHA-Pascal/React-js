import React from 'react'
import axios from 'axios'

function Axios() {
    async  function cal(){
    await axios.get("http://localhost:3000/getlocation").then((response)=>{
        console.log(response.data)
    }).catch((err)=>{
        console.log(err)
    })
    };
    cal()
  return (
    <div>
      <p>calling data</p>
    </div>
  )
}

export default Axios
