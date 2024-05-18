import React,{Component, useState} from "react";
class ActionButton extends Component{
    render(){
        const [istoggle,settoggle]=useState(false);
        const handleinput=()=>{
            settoggle(!istoggle);
        };
        return(
            <div>
            {istoggle ? <p>label 1</p> : <p>label2</p>}        
               <button onclick={handleinput}>change label</button>
            </div>
        );
    }  
}
export default ActionButton;