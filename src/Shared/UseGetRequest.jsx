import { useEffect, useState } from "react";


const UseGetRequest = (endPint) => {
    const [getData, setGetData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (endPint) {
            fetch(`http://localhost:5000/${endPint}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.data);
                    setGetData(data.data);
                    // setIsLoading(false)

                });
        }
    }, [endPint]);
    return [getData]
};

export default UseGetRequest;