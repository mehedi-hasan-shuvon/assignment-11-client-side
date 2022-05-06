import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    // const { _id, name, img, description, price, supplierName, supplierEmail, quantity } = service;

    const navigate = useNavigate();
    const stokeUpdate = (_id) => {
        navigate(`/service/${_id}`);
    };

    return (
        <div className='service'>
            <img className='img-fluid w-100 img-border' src={service?.img} alt="" />
            <h2>{service?.name} </h2>
            <h4>Supplier Name:{service?.supplierName}</h4>

            <p><small>{service?.description}</small></p>
            <p className='text-white'>Price: {service?.price} BDT</p>
            <p className='text-white'>Quantity: {service?.quantity}</p>
            <button onClick={() => stokeUpdate(service?._id)} className='btn btn-primary checkout-btn'>Manage Stock</button>
        </div>
    );
};

export default Service;