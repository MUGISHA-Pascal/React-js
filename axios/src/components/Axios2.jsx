import React, { useEffect, useState } from "react";
import axios from "axios";
const Axios2 = () => {
  const [data, useData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getsongs")
      .then((response) => {
        useData(response.data);
      })
      .catch((error) => {
        console.log(`error while fetching data , ${error}`);
      });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.singer} sung {item.song}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Axios2;
