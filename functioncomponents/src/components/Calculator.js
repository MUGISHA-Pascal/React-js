import React, { useState } from "react";
// import { Fragment } from "react";
export default function Calculate() {
    const [input, setdata] = useState(0)
    const handlesubmit = (event) => { event.preventDefault(); console.log("submited"); };
    const handleinput = (event) => {
        setdata(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handlesubmit} >
                <input type="number" onChange={handleinput} value={input} />
                <input type="submit" />
            </form>
            <p>{input}</p>

        </div>
    );
}