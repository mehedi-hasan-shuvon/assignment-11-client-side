import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data);
        data.supplierEmail = user.email;
        const url = "https://fast-retreat-32260.herokuapp.com/product";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast("product have been added");
            })

    };
    return (
        <div>
            <div className='w-75 mx-auto fff'>
                <h1 className='text-center py-3 section-header'>Add products</h1>
                <form className='d-flex flex-column add-product-form my-3 p-2' onSubmit={handleSubmit(onSubmit)}>
                    <input className='my-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Supplier Name' value={user?.displayName} type="text" {...register("supplierName")} />
                    <input className='mb-2' placeholder='Supplier Email' value={user?.email} required readOnly disabled type="email" {...register("supplierEmail")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='my-2 add-btn' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;