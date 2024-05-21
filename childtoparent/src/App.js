import React, {  useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import Parent from './components/Parent';

const App=()=>{
  
    const [data2,sentdata2]=useState("")
    const handlesent=(data)=>{
      sentdata2(data)
    }
    return (
      <div className="App">
        <Child senddata={handlesent}/>
        <Parent dt={data2}/>
      </div>
    );
  
}

export default App;
