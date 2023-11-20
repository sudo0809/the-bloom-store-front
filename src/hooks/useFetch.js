import { useCallback, useEffect, useState } from "react";

const useFetch = (endpoint, method, payload, runImmedietly) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const url = `${process.env.REACT_APP_BACK_URL}/${endpoint}`;
    
    
    const fetchData = useCallback(async () => {
        var default_options = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: method
        };
    
        var extra_param;
        switch (method) {
            case 'POST':
                extra_param = { body: JSON.stringify(payload) };
                break;
            default:
                extra_param = {}
    
        };
    
        const options = {...default_options, ...extra_param }

        
        try {
            const response = await fetch(url, options);
            console.log('fetch response :: ', response)

            if (response.status >= 400) {
                const message = await response.json().then((res => {
                    console.log('error :: ', res.message);
                    setError(res.message);
                    return res.message
                }))
                console.log('Custome error from Node :: ', message);
                throw new Error(message)
            }

            await response.json().then((res) => {
                setData(res.data);

            })
            return response.data
    
        } catch(e) {
            console.log(e); // manipulate afterwards
        }
       
    }, [url, method, payload]);

    useEffect(() => {
        if (runImmedietly) {
            fetchData();
        }

    }, [fetchData, runImmedietly])

    return { data, error, fetchData };
}

export default useFetch;