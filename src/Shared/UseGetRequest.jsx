import axios from "axios";
import { useEffect, useState } from "react";


const UseGetRequest = (endPint) => {
    const [getData, setGetData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (endPint) {
            axios.get(`http://localhost:5000/${endPint}`)
                .then(data => {
                    setGetData(data.data.data);
                });
        }
    }, [endPint]);
    return [getData]
};

export default UseGetRequest;