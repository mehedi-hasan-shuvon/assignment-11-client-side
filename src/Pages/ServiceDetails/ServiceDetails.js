import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useService from '../../CustomHooks/useService';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [product, setProduct] = useState({});
    const [services, setServices] = useService();


    const navigate = useNavigate();


    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product])

    const handelQuantity = event => {
        event.preventDefault();
        product.quantity = parseInt(product.quantity) - 1;

        if (product.quantity > 0) {
            setProduct(product);
            console.log(product);
            const url = `http://localhost:5000/product/${serviceId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json)
                .then(data => {
                    console.log('quantity updated');
                    toast('quantity reduced by 1');
                    // event.target.reset();
                })
        } else {
            const url = `http://localhost:5000/product/${serviceId}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== serviceId);
                    setServices(remaining);
                    toast(`all items of ${product.name} have been develered. Directed to inventory`);
                    navigate('/home')

                });

        }
    };


    const handelRestock = (event) => {
        event.preventDefault();
        const updatedRestock = parseInt(event.target.stock.value);
        product.quantity = parseInt(product.quantity) + updatedRestock;

        setProduct(product);
        console.log(product);
        const url = `http://localhost:5000/product/${serviceId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json)
            .then(data => {
                console.log('quantity updated');
                toast(`quantity added by ${updatedRestock}`);
                // event.target.reset();
            })

    }

    return (
        <div className='text-center w-75 mx-auto'>
            <h1>Item Details</h1>
            <img src={product?.img} alt="" />
            <h2>{product?.name}</h2>

            <h3>{product?.description}</h3>
            <h4>supplier name: {product?.supplierName}</h4>
            <h5 className='text-white'>Quantity: {product?.quantity} pieces only</h5>
            <h5 className='text-white'>Price: {product?.price} (per piece)</h5>

            <div className='py-3'>
                <button onClick={handelQuantity} className='btn btn-primary '>Delivered</button>
            </div>

            <div className='py-3'>
                <h2>Restock The Items</h2>
                <form onSubmit={handelRestock}>
                    <input type="number" name='stock' placeholder='restock quantity' required />

                    <input type="submit" value="Restock" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;