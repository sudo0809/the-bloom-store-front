import { useEffect, useState } from 'react';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/product")
            .then(response => response.json())
            .then(res => {
                console.log(res);
                setData(res);
            })
    }, [])

    return (
        <>
            <h1>Home</h1>
            {data.products}
        </>
    )
};

export default Home;