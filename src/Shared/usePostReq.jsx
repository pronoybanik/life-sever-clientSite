const usePostRequest = (endPint, BodyData) => {
  fetch(`http://localhost:5000/${endPint}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(BodyData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

export default usePostRequest;
