import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = "http://localhost:5000/product";
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
                toast("product have been added")
            })

    };
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-center'>please add Product</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />
                    <input className='mb-2' placeholder='Supplier Email' type="text" {...register("supplierEmail")} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='mb-2' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;