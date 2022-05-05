import React from 'react';
import notfound from '../../../Images/404.png'
const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='text-center mx-auto my-3 container'>
                <img className='w-50 mx-auto' src={notfound} alt="" />
                <h2 className='text-center text-danger'>Page not Found</h2>

            </div>
        </div>
    );
};

export default NotFound;