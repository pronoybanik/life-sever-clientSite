import { useState, useEffect } from "react";
import axios from "axios";

const UseGetRequest = (endPoint) => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const url = `${import.meta.env.VITE_API_URL}/${endPoint}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        setError(response.data.error);
        if (response.data.statusbar === 200) {
          setData(response.data.data);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]);

  return { data, loading, error };
};

export default UseGetRequest;
