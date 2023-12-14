import axios from 'axios';
import { useEffect, useState } from 'react';
// import ProductCard from '../../components/product_card';
import HeadCover from './head_cover';

const Home = () => {

    const [data, setData] = useState([]);

    

    useEffect(() => {
        const queryParams = {
            page: 1,
            page_limit: 4,
            filters: [{ kind: 'Plant'}]
        }
        
        axios.get("/products", {params: queryParams})
            .then(response => {
                setData(response.data);
            })
    }, [])

    return (
        <>
            <HeadCover />
            {/* <ProductCard /> */}
            {data?.map((product) => (
                <div key={product._id}>
                    <h1>{product.product_name}</h1>
                </div>
            ))}
        </>
    )
};

export default Home;