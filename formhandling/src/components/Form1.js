import React, { useState } from "react";

const Form1 = () => {
  const [data, setinput] = useState({
    name: "",
    age: 0,
  });
  function handleinput(event) {
    setinput({ ...data, name: event.target.value });
  }
  function handleinput2(event) {
    setinput({ ...data, age: event.target.value });
  }

  function handlesubmit(event, form) {
    event.preventDefault();
    form = {
      data,
    };
    for (const value in form.data) {
      console.log(form.data[value]);
    }
  }
  return (
    <div>
      <p>enter your name:</p>
      <input type="text" onChange={handleinput} />
      <input type="number" onChange={handleinput2} />
      <input type="submit" onClick={handlesubmit} />

      {data.age === 0 ? <h1></h1> : <h1>{data.age}</h1>}
      <h1>{data.name}</h1>
    </div>
  );
};

export default Form1;
