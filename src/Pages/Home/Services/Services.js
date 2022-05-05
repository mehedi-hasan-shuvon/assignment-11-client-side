import React, { useEffect, useState } from 'react';
import useService from '../../../CustomHooks/useService';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, []);
    const [services, setServices] = useService();
    return (
        <div id='services' className='container pb-3'>
            <h1 className='text-center  my-4'>My Services {services.length}</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;