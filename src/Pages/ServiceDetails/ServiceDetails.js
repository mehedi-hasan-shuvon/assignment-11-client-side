import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div>
            <h2>deatils of service:{product.name}</h2>
        </div>
    );
};

export default ServiceDetails;