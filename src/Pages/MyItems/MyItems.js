import './MyItems.css';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useService from '../../CustomHooks/useService';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faList } from '@fortawesome/free-solid-svg-icons';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [services, setServices] = useService();
    const [myitem, setMyitem] = useState([]);
    const navigate = useNavigate();
    const stokeUpdate = (_id) => {
        navigate(`/inventory/${_id}`);
    };
    useEffect(() => {
        const email = user?.email;
        const getOrders = async () => {
            const email = user?.email;
            const url = `https://fast-retreat-32260.herokuapp.com/myitems?email=${email}`;
            try {
                // const { data } = await axiosPrivate.get(url);
                const { data } = await axiosPrivate.get(url)
                setMyitem(data);
                // console.log(myitem);
            } catch (error) {
                console.log('error');
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user, services]);


    const handelDelete = id => {
        const procced = window.confirm("are you sure?");
        if (procced) {
            const url = `https://fast-retreat-32260.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                });

        }
    }
    return (
        <div className='w-75 mx-auto'>
            <h1 className='text-center py-3'>My Items:</h1>
            <h2 className='text-center'>Total:{myitem.length}</h2>
            {
                myitem.map(product => <div key={product._id}>
                    {/* {product.name}
                    <button onClick={() => handelDelete(product._id)}>X</button> */}
                    <div className='inventory my-3'>
                        <div className='row'>
                            <div className='col-md-4 text-center d-flex  align-items-center left-side-in'>
                                <img className='inventory-img' src={product.img} alt="" />
                                <h4>{product.name}</h4>
                            </div>
                            <div className='col-md-3 d-flex justify-content-center align-items-center middle-in'>
                                <div>

                                    <p>supplier name: {product.supplierName}</p>
                                    <p>description: {product.description}</p>
                                </div>
                            </div>
                            <div className='col-md-3 d-flex flex-column justify-content-center align-items-center right-middle'>
                                <p className='text-white'>Quantity: {product.quantity} pieces only</p>

                                <p className='text-white'>Price: {product.price}BDT (per piece)</p>
                            </div>
                            <div className='col-md-2 d-flex justify-content-center align-items-center right-in'>
                                <div className='row '>
                                    <div className='col-12 d-flex justify-content-center align-items-center'>
                                        <button onClick={() => stokeUpdate(product._id)} className='btn btn-primary checkout-btn-special'><FontAwesomeIcon icon={faList} /> Manage</button>
                                    </div>
                                    <div className='col-12 d-flex justify-content-center align-items-center'>
                                        <button onClick={() => handelDelete(product._id)} className='btn btn-primary item-remove-button' ><FontAwesomeIcon icon={faDeleteLeft} /> Remove </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>)
            }
        </div >
    );
};

export default MyItems;