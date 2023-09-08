// const usePostRequest = (endPint, BodyData) => {
//   fetch(`http://localhost:5000/${endPint}`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(BodyData),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// export default usePostRequest;

import { useState } from "react";

const usePostRequest = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const post = async (endPint, BodyData) => {
    const url = `http://localhost:5000/${endPint}`;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
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

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      // const responseData = await response.json();
      // setData(responseData);
      // setError(responseData)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, post };
};

export default usePostRequest;
