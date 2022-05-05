import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: "800" }} className='w-100 d-flex justify-content-center align-items-center p-5'>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;