
const UseGetRequest = (endPint) => {
    fetch(`http://localhost:5000/${endPint}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

};

export default UseGetRequest;