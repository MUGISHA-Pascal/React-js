import React, { useState } from "react";
function Toggle() {
    const [istoogle, settoggle] = useState(false)
    const handletoggle=()=>{
        settoggle(!istoogle)
    }
    return (
     <div onClick={handletoggle}>
    {istoogle ? <p>toggle on</p> : <p>toggle off</p>}
    </div>
    );
};
export default Toggle;