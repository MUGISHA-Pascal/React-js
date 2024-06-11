import React, { useState } from 'react'
// import '../App.css';
import Modal from './Modal.jsx';
export default function Appy() {
 const [isOpen, setOpen]= useState(false)
 return (
   <div>
     <button onClick={()=> {setOpen(true)}}>show button</button>
     <Modal isOpen= {isOpen} onClose={()=>setOpen(false)}/>
   </div>
 )
};