import { useState } from "react";

const useDeleteRequest = (endPint) => {
    const [data, setData] = useState([])
    fetch(`http://localhost:5000/${endPint}`, {
        method: 'DELETE',

    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data)
            // if (data.status === "success") {
            //     alert(`Delete user`)
            //     const remaining = doctors.filter((doctor) => doctor._id !== id);
            //     setDoctors(remaining);

            // }
        })
    return [data]

};

export default useDeleteRequest;