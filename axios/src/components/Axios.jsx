import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getSubject")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(`there was an error fetching the data , ${error}`);
      });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h1>data from the backend : </h1>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
            {data.map((item) => (
              <li key={item.id}>{item.subject}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Axios;
