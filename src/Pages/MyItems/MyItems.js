import './MyItems.css';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useService from '../../CustomHooks/useService';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import { signOut } from 'firebase/auth';
import axios from 'axios';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [services, setServices] = useService();
    const [myitem, setMyitem] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const email = user?.email;
        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
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
            const url = `http://localhost:5000/product/${id}`
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
            <h2>my items page for: {user?.email}</h2>
            <h1>{myitem.length}</h1>
            {
                myitem.map(product => <div key={product._id}>{product.name}
                    <button onClick={() => handelDelete(product._id)}>X</button>
                </div>)
            }
        </div>
    );
};

export default MyItems;