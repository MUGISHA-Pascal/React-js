import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Get() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getlocation");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
return(
  <div></div>
)
}

export default Get;