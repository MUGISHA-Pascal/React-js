import React, { useState } from "react";
const ColorSwitcher = () =>{
const [bgcolor, setcolor] = useState('white');
const handlecolorchange = (color) => {
    setcolor(color);
};
return <p onClick={() => handlecolorchange('red')} style={{ backgroundColor: bgcolor }}>change color</p>;
}; 
export default ColorSwitcher;