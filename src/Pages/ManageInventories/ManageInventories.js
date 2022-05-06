import React from 'react';
import useService from '../../CustomHooks/useService';
import './ManageInventories.css';


const ManageInventories = () => {
    const [services, setServices] = useService();

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
        <div className='w-50 mx-auto'>
            <h2>Manage your inventories</h2>
            {
                services.map(product => <div key={product._id}>
                    <h4>{product.name}
                        <button onClick={() => handelDelete(product._id)}>X</button>
                    </h4>

                </div>)
            }
        </div>
    );
};

export default ManageInventories;