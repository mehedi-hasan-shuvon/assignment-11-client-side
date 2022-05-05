import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { _id, name, img, description, price, supplierName, supplierEmail, quantity } = service;

    const navigate = useNavigate();
    const stokeUpdate = (_id, name, img, description, price) => {
        navigate(`/service/${_id}`);
    };

    return (
        <div className='service'>
            <img className='img-fluid w-100 img-border' src={img} alt="" />
            <h2>{name} </h2>
            <h4>Supplier Name:{supplierName}</h4>

            <p><small>{description}</small></p>
            <p className='text-white'>Price: {price} BDT</p>
            <p className='text-white'>Quantity: {quantity}</p>
            <button onClick={() => stokeUpdate(_id, name, img, description, price)} className='btn btn-primary checkout-btn'>Manage Stock</button>
        </div>
    );
};

export default Service;