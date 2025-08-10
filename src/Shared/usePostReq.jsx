import { useState } from "react";

const usePostRequest = () => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [data, setData] = useState([] || {});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const post = async (endPoint, BodyData) => {
    const url = `${import.meta.env.VITE_API_URL}/${endPoint}`;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(BodyData),
      })
        .then((res) => res.json())
        .then((responseData) => {
          console.log(responseData);
          if (responseData.status === "success") {
            setData(responseData);
            setLoading(false);
            setError("");
          }

          if (responseData.status === "Fail") {
            console.log("test", responseData);
            setLoading(false);
            setError(responseData.error);
          }
        });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, post };
};

export default usePostRequest;
