import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useService from '../../CustomHooks/useService';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [product, setProduct] = useState({});
    const [services, setServices] = useService();


    const navigate = useNavigate();


    useEffect(() => {
        const url = `https://fast-retreat-32260.herokuapp.com/product/${serviceId}`;
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
            const url = `https://fast-retreat-32260.herokuapp.com/product/${serviceId}`;
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
            const url = `https://fast-retreat-32260.herokuapp.com/product/${serviceId}`

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

        if (product.quantity > 0) {
            setProduct(product);
            console.log(product);
            const url = `https://fast-retreat-32260.herokuapp.com/product/${serviceId}`;
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
        } else {
            const url = `https://fast-retreat-32260.herokuapp.com/product/${serviceId}`

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




    }

    return (
        <div className=''>
            <PageTitle title={"Item Details"}></PageTitle>
            <h1 className='section-header pt-3 text-center'>Item Details</h1>
            <div className='item-details-container w-50 mx-auto my-4'>
                <div className='text-center details-img'>
                    <img src={product?.img} alt="" />
                </div>
                <div className='details-context'>
                    <h2 className='product-name-single'>{product?.name}</h2>

                    <h3 className='product-details-single'>{product?.description}</h3>
                    <h3 className='product-details-single'>supplier name: {product?.supplierName}</h3>
                    <h5 className='product-price-single'>Quantity: {product?.quantity} pieces only</h5>
                    <h5 className='product-price-single'>Price: {product?.price} (per piece)</h5>

                    <div className='py-3'>
                        <button onClick={handelQuantity} className='btn btn-primary '>Delivered</button>
                    </div>


                </div>
                <div className='py-3 restock-div'>
                    <h2>Restock The Items</h2>
                    <form onSubmit={handelRestock}>
                        <input type="number" name='stock' placeholder='restock quantity' required />

                        <input className='special-special-btn' type="submit" value="Restock" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;