import { useEffect, useState } from "react";
import axios from "axios";
import { headers } from "../constants/Constants";

const useRequestData = (url, condition) => {
    const [data, setData] = useState();

    useEffect(() => {
        axios
            .get(url, headers)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [condition])

    return [data]
}

export default useRequestData 