// import axios from "axios";
// import { useEffect, useState } from "react";

// const UseGetRequest = (endPint) => {
//     const [getData, setGetData] = useState([]);
//     // const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         if (endPint) {
//             axios.get(`http://localhost:5000/${endPint}`)
//                 .then(data => {
//                     setGetData(data.data.data);
//                 });
//         }
//     }, [endPint]);
//     return [getData]
// };

// export default UseGetRequest;

// useFetchData.js
import { useState, useEffect } from "react";
import axios from "axios";

const UseGetRequest = (endPint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `http://localhost:5000/${endPint}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default UseGetRequest;
