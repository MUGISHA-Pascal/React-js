import React from 'react'
import {createPortal} from 'react-dom';
import './Modal.css';
export default function Modal({isOpen, onClose}) {
   if(!isOpen)return null;
 return createPortal(
   <div className='modal'>
       <div className='modal-container'>
           <div  className='modal-body'>
               <p>sample modal</p>
           </div>
           <button onClick={onClose}>Close</button>
       </div>
    
   </div>
   , document.getElementById('modal') // this will let react-dom know that we want to render this modal outside the current React tree
 )
}
// ???