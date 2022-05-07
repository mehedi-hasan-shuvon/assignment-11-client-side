import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fast-retreat-32260.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices];
};

export default useService;