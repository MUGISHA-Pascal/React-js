import React, { useState } from 'react'
import './App.css';
import Modal from './components/Modal.jsx';
export default function App() {
 const [isOpen, setOpen]= useState(false)
 return (
   <div>
     <button onClick={()=> {setOpen(true)}}>show button</button>
     <Modal isOpen= {isOpen} onClose={()=>setOpen(false)}/>
   </div>
 )
};