import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetch = (endpoint, method, payload, runImmedietly) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const url = `${process.env.REACT_APP_BACK_URL}/${endpoint}`;


    const fetchData = useCallback(async () => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }

        var data;
        switch (method) {
            case 'POST':
                data = payload;
                break;
            default:
                data = {}

        };

        const axios_response = await axios({
            url: url,
            method: method,
            headers: headers,
            withCredentials: true,
            credentials: "include",
            data: data
        }).then(response => {
            const fetchedData = response.data;
            setError(null);
            setData(fetchedData);
            return { data: fetchedData };
        }).catch(err => {
            const error = err.response.data;
            const errorMessage = error.message;
            setError(errorMessage);
            setData(null);
            return { error: errorMessage };
        });

        return axios_response

    }, [url, method, payload]);

    useEffect(() => {
        if (runImmedietly) {
            fetchData();
        }

    }, [fetchData, runImmedietly])

    return { data, error, fetchData };
}

export default useFetch;